import { Alert } from '@mui/material';
import {
  API,
  Auth,
  graphqlOperation,
  Predicates,
  SortDirection,
} from 'aws-amplify';
import {
  Company,
  Country,
  Item,
  Rfq,
  RfqItems,
  ShippingAddress,
  UserDetails,
  UserDetailsShippingAddress,
} from '../models';
import { DataStore } from 'aws-amplify';
import { useContext } from 'react';
import { InventoryContext } from '../context/inventory.context';
import countryList from '../countryList.json';
import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
// import { ItemsByCompanyIDQuery } from '../API';
// import {} from '../API.ts';
// import * as queries from '../graphql/queries';

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
  imageUrl,
  control,
  price,
  companyID
) => {
  return await DataStore.save(
    new Item({
      nsn: nsn,
      partNumber: partNumber,
      altPartNumber: altPartNumber,
      description: description,
      quantity: quantity,
      condition: condition,
      imageUrl: imageUrl,
      control: control,
      price: price,
      companyID: companyID,
    })
  );
};

export const BatchAddPartsToInventoryILS = async (
  items,
  companyID,
  setIsImportPartOpen
) => {
  // const { setIsImportPartOpen } = useContext(InventoryContext);
  const promises = items.map(async (item) => {
    let newPrice = null;
    console.log(item.PRICE);

    if (item.PRICE !== '') {
      newPrice = parseFloat(item.PRICE);
      console.log(newPrice);
    }
    const newQuantity = parseInt(item.QUANTITY);
    try {
      const response = await DataStore.save(
        new Item({
          nsn: '',
          partNumber: item.PARTNUMBER,
          altPartNumber: item.ALTERNATEPARTNUMBER,
          description: item.DESCRIPTION,
          quantity: newQuantity,
          condition: item.CONDITIONCD,
          imageUrls: [''],
          control: item.CONTROL,
          price: newPrice,
          companyID: companyID,
        })
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  });
  await Promise.all(promises)
    .then(() => {
      alert('Successfully saved all items to database.');
      setIsImportPartOpen(false);
    })
    .catch((err) => {
      console.log('Error while batch saving:', err);
    });
};

export const GetPartsByCompany = async (companyID) => {
  const parts = await DataStore.query(Item, (p) => p.companyID.eq(companyID));
  return parts;
};

export const GetPartsByCompanySubscribe = async (
  company,
  setData,
  page,
  itemsPerPage
) => {
  // const subscription = DataStore.observeQuery(
  //   Item,
  //   (p) => p.companyID.eq(company.id),
  //   { page: page, limit: itemsPerPage }
  // ).subscribe((snapshot) => {
  //   const { items, isSynced } = snapshot;
  //   setData({
  //     company: company,
  //     parts: items,
  //   });
  // });
  // return subscription;
  const parts = await DataStore.query(Item, (p) => p.companyID.eq(company.id), {
    page: page - 1,
    limit: itemsPerPage,
  });
  setData({ company: company, parts: parts });
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
export const GetPartCountByCompany = async (company) => {
  const parts = await DataStore.query(Item, (p) => p.companyID.eq(company.id));
  return parts.length;
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
  const company = await DataStore.query(Company, (p) => p.id.eq(companyID));
  return company;
};
export const GetAllCompanies = async () => {
  const companies = await DataStore.query(Company);
  return companies;
};

export const CreateUserDetails = async (companyID, isOwner, user) => {
  console.log(user.username);
  const response = await DataStore.save(
    new UserDetails({
      companyID: companyID,
      isCompanyOwner: isOwner,
      userID: user.username,
    })
  );
  return response;
};

export const AddUserShippingAddress = async (shippingAddress, user) => {
  const userDetails = await DataStore.query(UserDetails, (p) =>
    p.userID.eq(user.username)
  );
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
          userDetails: userDetails[0],
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
        attr1: rfqDetails.attr1,
        attr2: rfqDetails.attr2,
        attr3: rfqDetails.attr3,
        attr4: rfqDetails.attr4,
        attr5: rfqDetails.attr5,
        attr6: rfqDetails.attr6,
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
  profilePictureUrl
) => {
  const response = await DataStore.save(
    new Company({
      companyName: companyName,
      companyDescription: companyDescription,
      contactEmail: email,
      phone: phone,
      fax: fax,
      profilePictureUrl: profilePictureUrl,
    })
  );
  return response;
};
export const AddUserToCompany = async (userDetails, companyID) => {
  const userToAdd = await DataStore.query(UserDetails, userDetails.id);
  const original = await DataStore.query(Company, companyID);
  const response = await DataStore.save(
    Company.copyOf(original, (newCompany) => {
      newCompany.CompanyMembers.push(userToAdd);
    })
  );
  return response;
};
export const AddOwnerToCompany = async (userDetails, companyID) => {
  const userToAdd = await DataStore.query(UserDetails, userDetails.id);
  const original = await DataStore.query(Company, companyID);
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
    const response = await DataStore.save(
      new Country({
        countryName: c.name,
        code: c.code,
      })
    );
    console.log(response);
    // const original = await DataStore.query(Country, (p) =>
    //   p.countryName.eq(c.name)
    // );
    // const response = await DataStore.save(
    //   Country.copyOf(original[0], (item) => {
    //     item.code = c.code;
    //   })
    // );
  });
};

export const GetCountries = async () => {
  try {
    const countries = await DataStore.query(Country, Predicates.ALL, {
      sort: (s) => s.countryName(SortDirection.ASCENDING),
    });
    return countries;
  } catch (error) {
    console.log(error);
  }
};

export const GetUserShippingAddresses = async (userDetails) => {
  try {
    const userShippingAddresses = await DataStore.query(ShippingAddress, (p) =>
      p.UserShippingAddresses.userDetails.id.eq(userDetails.id)
    );
    return userShippingAddresses;
  } catch (error) {
    console.log(error);
  }
};

export const GetCurrentUserDetails = async () => {
  const { user } = useAuthenticator();
  try {
    const userDetails = await DataStore.query(UserDetails, (p) =>
      p.userID.eq(user.username)
    );
    return userDetails;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteListOfParts = async (listOfParts) => {
  const promises = listOfParts.map(async (item) => {
    try {
      const response = await DataStore.delete(Item, (p) => p.id.eq(item.id));
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
