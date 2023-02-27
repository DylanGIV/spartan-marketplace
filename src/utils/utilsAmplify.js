import { API, Auth, graphqlOperation, Predicates, Storage } from 'aws-amplify';
import {
  Company,
  CompanyItemsImport,
  Country,
  Item,
  Rfq,
  RfqItems,
  ShippingAddress,
  UserDetails,
  UserDetailsShippingAddress,
} from '../models';
import { DataStore } from 'aws-amplify';
import countryList from '../countryList.json';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import * as queries from '../graphql/queries.ts';
import * as mutations from '../graphql/mutations.ts';

export const SignOutAuth = async () => {
  return await Auth.signOut();
};

export const AddPartToInventory = async (
  nsn,
  partNumber,
  altPartNumber,
  description,
  quantity,
  condition,
  imageUrls,
  control,
  price,
  companyID
) => {
  const response = await API.graphql(
    graphqlOperation(mutations.createItem, {
      input: {
        nsn: nsn,
        partNumber: partNumber,
        altPartNumber: altPartNumber,
        description: description,
        quantity: quantity,
        condition: condition,
        imageUrls: imageUrls,
        control: control,
        price: price,
        companyID: companyID,
      },
    })
  );
  return response;
};

// export const GetPartsByCompany = async (companyID) => {
//   const parts = await DataStore.query(Item, (p) => p.companyID.eq(companyID));
//   return parts;
// };

export const GetPartsByCompanySubscribe = async (
  company,
  setData,
  page,
  itemsPerPage,
  nextToken,
  search
) => {
  const variables = {
    companyID: company.id,
    limit: itemsPerPage,
  };

  if (nextToken) {
    variables.nextToken = nextToken;
  }
  // if (search) {
  //   variables.filter = {
  //     nsn: { contains: search },
  //     partNumber: { contains: search },
  //     altPartNumber: { contains: search },
  //     description: { contains: search },
  //   };
  // }

  const response = await API.graphql(
    graphqlOperation(queries.itemsByCompanyID, variables)
  );

  const parts = response.data.itemsByCompanyID.items;

  // console.log(parts);
  setData({ company: company, parts: parts, nextToken: null });
  return response.data.itemsByCompanyID.nextToken;
};
export const GetRFQByCompany = async (
  company,
  setRFQs,
  page,
  itemsPerPage,
  filter,
  userDetails
) => {
  let count = 0;
  let rfqs = null;
  if (filter === 'sent') {
    count = await DataStore.query(Rfq, (p) =>
      p.sendingCompanyID.eq(company.id)
    );
    rfqs = await DataStore.query(
      Rfq,
      (p) => p.sendingCompanyID.eq(company.id),
      {
        page: page - 1,
        limit: itemsPerPage,
      }
    );
  } else if (filter === 'received') {
    count = await DataStore.query(Rfq, (p) =>
      p.receivingCompanyID.eq(company.id)
    );
    rfqs = await DataStore.query(
      Rfq,
      (p) => p.receivingCompanyID.eq(company.id),
      {
        page: page - 1,
        limit: itemsPerPage,
      }
    );
  } else {
    count = await DataStore.query(Rfq, (p) =>
      p.or((p) => [
        p.receivingCompanyID.eq(company.id),
        p.sendingCompanyID.eq(company.id),
      ])
    );
    rfqs = await DataStore.query(
      Rfq,
      (p) =>
        p.or((p) => [
          p.receivingCompanyID.eq(company.id),
          p.sendingCompanyID.eq(company.id),
        ]),
      {
        page: page - 1,
        limit: itemsPerPage,
      }
    );
  }
  setRFQs({
    items: rfqs,
    count: Math.ceil(count.length / itemsPerPage),
  });
};
export const GetPartsByCompanyAndSearch = async (
  companyID,
  search,
  searchUpper,
  searchLower
) => {
  const parts = await DataStore.query(
    Item,
    (p) =>
      p.companyID.eq(companyID) &&
      (p.altPartNumber.contains(search) ||
        p.nsn.contains(search) ||
        p.partNumber.contains(search) ||
        p.description.contains(search) ||
        p.altPartNumber.contains(searchLower) ||
        p.nsn.contains(searchLower) ||
        p.partNumber.contains(searchLower) ||
        p.description.contains(searchLower) ||
        p.altPartNumber.contains(searchUpper) ||
        p.nsn.contains(searchUpper) ||
        p.partNumber.contains(searchUpper) ||
        p.description.contains(searchUpper))
  );
  return parts;
};
export const GetCompanyByID = async (companyID) => {
  const company = await API.graphql(
    graphqlOperation(queries.getCompany, { id: companyID })
  );
  return company.data.getCompany;
};
export const GetAllCompanies = async () => {
  const companies = await API.graphql(graphqlOperation(queries.listCompanies));
  return companies.data.listCompanies.items;
};

export const CreateUserDetails = async (
  // companyID,
  isOwner,
  user,
  userDetails
) => {
  console.log(user.username);
  const existingUser = await DataStore.query(UserDetails, user.username);
  console.log(existingUser);
  if (existingUser) {
    console.log('enter');
    return existingUser;
  }
  const response = await DataStore.save(
    new UserDetails({
      // companyID: companyID,
      isCompanyOwner: isOwner,
      userID: user.username,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      contactEmail: userDetails.contactEmail,
      contactPhone: userDetails.contactPhone,
    })
  );
  console.log(response);
  return response;
};

export const AddUserShippingAddress = async (shippingAddress, user) => {
  const userDetails = await DataStore.query(UserDetails, user.username);
  try {
    const newShippingAddress = await DataStore.save(
      new ShippingAddress({
        addressLine1: shippingAddress.addressLine1,
        addressLine2: shippingAddress.addressLine2,
        city: shippingAddress.city,
        postalCode: shippingAddress.postalCode,
        regi: shippingAddress.regi,
        streetNumber: shippingAddress.streetNumber,
        unitNumber: shippingAddress.unitNumber,
        countryID: shippingAddress.countryID,
      })
    );
    try {
      await DataStore.save(
        new UserDetailsShippingAddress({
          shippingAddress: newShippingAddress,
          userDetails: userDetails,
        })
      );
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};

export const CreateRFQ = async (rfqDetails) => {
  try {
    const rfqResponse = await DataStore.save(
      new Rfq({
        rfqNumber: rfqDetails.rfqNumber,
        addressLine1: rfqDetails.addressLine1,
        addressLine2: rfqDetails.addressLine2,
        city: rfqDetails.city,
        country: rfqDetails.country,
        state: rfqDetails.state,
        zip: rfqDetails.zip,
        phone: rfqDetails.phone,
        email: rfqDetails.email,
        uom: rfqDetails.uom,
        discount: rfqDetails.discount,
        companyName: rfqDetails.companyName,
        contact: rfqDetails.contact,
        custRefNum: rfqDetails.custRefNum,
        dateSent: rfqDetails.dateSent,
        dueDate: rfqDetails.dueDate,
        emailComments: rfqDetails.emailComments,
        imageUrls: rfqDetails.imageUrls,
        internalComments: rfqDetails.internalComments,
        leadTime: rfqDetails.leadTime,
        lineTotal: rfqDetails.lineTotal,
        paymentTerms: rfqDetails.paymentTerms,
        quantityQuoted: rfqDetails.quantityQuoted,
        quantityRequested: rfqDetails.quantityRequested,
        salesTax: rfqDetails.salesTax,
        shippingMethod: rfqDetails.shippingMethod,
        shippingTerms: rfqDetails.shippingTerms,
        subtotal: rfqDetails.subtotal,
        total: rfqDetails.total,
        receivingCompanyID: rfqDetails.receivingCompanyID,
        sendingCompanyID: rfqDetails.sendingCompanyID,
        urgency: rfqDetails.urgency,
        itemIDs: rfqDetails.itemIDs,
      })
    );
    console.log(rfqResponse);
    // const rfq = await DataStore.query(Rfq, rfqResponse.id);
    // for (let i = 0; i < items.length; i++) {
    //   const response = await DataStore.save(
    //     new RfqItems({
    //       item: items[i],
    //       rfq: rfq,
    //     })
    //   );
    //   console.log(response);
    // }
    alert('Successfully sent RFQ to ' + rfqDetails.companyName);
  } catch (error) {
    console.log(error);
    alert('failed');
  }
};

export const AddCompany = async (
  companyName,
  companyDescription,
  email,
  phone,
  fax,
  profilePictureUrl,
  country
) => {
  const response = await DataStore.save(
    new Company({
      companyName: companyName,
      companyDescription: companyDescription,
      contactEmail: email,
      phone: phone,
      fax: fax,
      profilePictureUrl: profilePictureUrl,
      countryID: country.code,
    })
  );
  return response;
};
export const AddUserToCompany = async (userDetails, companyID) => {
  const userToAdd = await DataStore.query(UserDetails, userDetails.userID);
  const original = await DataStore.query(Company, companyID);
  await DataStore.save(
    UserDetails.copyOf(userToAdd, (user) => {
      user.companyID = companyID;
    })
  );
  const response = await DataStore.save(
    Company.copyOf(original, (newCompany) => {
      newCompany.CompanyMembers.push(userToAdd);
    })
  );
  return response;
};
export const AddOwnerToCompany = async (userDetails, companyID) => {
  const userToAdd = await DataStore.query(UserDetails, userDetails.userID);
  const original = await DataStore.query(Company, companyID);
  await DataStore.save(
    UserDetails.copyOf(userToAdd, (user) => {
      user.companyID = companyID;
    })
  );
  const response = await DataStore.save(
    Company.copyOf(original, (newCompany) => {
      newCompany.CompanyOwner = userToAdd;
    })
  );
  return response;
};

export const DeleteAllPartsByCompany = async (companyID) => {
  return await DataStore.delete(Item, (p) => p.companyID.eq(companyID));
};

export const DeleteAllParts = async () => {
  return await DataStore.delete(Item, Predicates.ALL);
};

export const PopulateCountries = async () => {
  countryList = countryList;
  countryList.forEach(async (c) => {
    await API.graphql(
      graphqlOperation(mutations.createCountry, {
        input: {
          countryName: c.name,
          code: c.code,
        },
      })
    );
  });
};

export const GetCountries = async () => {
  try {
    const countries = await API.graphql(
      graphqlOperation(queries.listCountries)
    );
    const sortedCountries = countries.data.listCountries.items.sort((a, b) =>
      a.countryName > b.countryName ? 1 : -1
    );
    return sortedCountries;
  } catch (error) {
    console.log(error);
  }
};

export const GetUserShippingAddresses = async (userDetails) => {
  try {
    const userShippingAddresses = await DataStore.query(ShippingAddress, (p) =>
      p.UserShippingAddresses.userDetails.userID.eq(userDetails.userID)
    );
    return userShippingAddresses;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteListOfParts = async (listOfParts) => {
  const promises = listOfParts.map(async (item) => {
    try {
      const response = await API.graphql(
        graphqlOperation(mutations.deleteItem, { input: { id: item.id } })
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  });
  await Promise.all(promises)
    .then(() => {
      alert('Successfully deleted all selected items.');
    })
    .catch((err) => {
      alert('Error while deleting items');
      console.log(err);
    });
};

export const GetAllCompanyUsers = async (companyID) => {
  const response = await DataStore.query(Company, companyID);
  return response.CompanyMembers;
};

export const DeleteAllCountries = async () => {
  // await DataStore.delete(Country, Predicates.ALL);
  // await API.graphql(graphqlOperation(mutations.deleteAllCountries));
};

export const CreateCompanyItemsImportRequest = async (companyID, file) => {
  const fileID = uuidv4();
  const name = file.name;
  let response = '';
  try {
    const graphqlResponse = await API.graphql(
      graphqlOperation(mutations.createCompanyItemsImport, {
        input: {
          companyID: companyID,
          id: fileID,
          importName: name,
          importProgress: 0,
          importStatus: 'PENDING',
        },
      })
    );
    console.log(graphqlResponse);
    try {
      const storageResponse = await Storage.put('csv/' + fileID, file, {
        contentType: file.type,
      });
      console.log(storageResponse);
      response = storageResponse;
    } catch (err) {
      console.log(err);
      await API.graphql(
        graphqlOperation(mutations.deleteCompanyItemsImport, {
          input: { id: fileID },
        })
      );
    }
  } catch (err) {
    console.log(err);
  }
  return response;
};
