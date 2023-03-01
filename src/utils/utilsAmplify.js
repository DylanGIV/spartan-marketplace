import { API, Auth, graphqlOperation, Predicates, Storage } from 'aws-amplify';
import {
  Company,
  Item,
  Rfq,
  ShippingAddress,
  UserDetails,
  UserDetailsShippingAddress,
} from '../models';
import countryList from '../countryList.json';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import * as queries from '../graphql/queries.ts';
import * as mutations from '../graphql/mutations.ts';
import * as subscriptions from '../graphql/subscriptions.ts';

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
    limit: 25,
  };

  if (nextToken) {
    variables.nextToken = nextToken;
  }
  if (search) {
    variables.filter = {
      or: [
        { nsn: { matchPhrasePrefix: search } },
        { partNumber: { matchPhrasePrefix: search } },
        { altPartNumber: { matchPhrasePrefix: search } },
        { description: { matchPhrasePrefix: search } },
        { control: { matchPhrasePrefix: search } },
      ],
    };
  }
  try {
    const response = await API.graphql(
      graphqlOperation(queries.searchItems, variables)
    );

    const parts = response.data.searchItems.items;

    // console.log(parts);
    setData({
      company: company,
      parts: parts,
      nextToken: response.data.searchItems.nextToken
        ? response.data.searchItems.nextToken
        : null,
    });
    return response.data.searchItems.nextToken;
  } catch (error) {
    console.log(error);
  }
};
export const GetRFQByCompany = async (
  company,
  setRFQs,
  page,
  itemsPerPage,
  filter,
  userDetails
) => {
  let rfqs = null;
  if (filter === 'sent') {
    const response = await API.graphql(
      graphqlOperation(queries.listRfqs, {
        filter: {
          sendingCompanyID: { eq: company.id },
        },
      })
    );
    rfqs = response.data.listRfqs.items;
  } else if (filter === 'received') {
    const response = await API.graphql(
      graphqlOperation(queries.listRfqs, {
        filter: {
          receivingCompanyID: { eq: company.id },
        },
      })
    );
    rfqs = response.data.listRfqs.items;
  } else {
    const response = await API.graphql(
      graphqlOperation(queries.listRfqs, {
        filter: {
          or: [
            { receivingCompanyID: { eq: company.id } },
            { sendingCompanyID: { eq: company.id } },
          ],
        },
      })
    );
    rfqs = response.data.listRfqs.items;
  }
  setRFQs({
    items: rfqs,
    count: 1,
  });
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
export const CreateUserDetails = async (isOwner, user, userDetails) => {
  const existingUserResponse = await API.graphql(
    graphqlOperation(queries.getUserDetails, { id: user.username })
  );
  const existingUser = existingUserResponse.data.getUserDetails;
  if (existingUser) {
    return existingUser;
  }

  const response = await API.graphql(
    graphqlOperation(mutations.createUserDetails, {
      input: {
        id: user.username,
        isCompanyOwner: isOwner,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        contactEmail: userDetails.contactEmail,
        contactPhone: userDetails.contactPhone,
      },
    })
  );

  console.log(response.data.createUserDetails);
  return response.data.createUserDetails;
};
export const AddUserShippingAddress = async (shippingAddress, user) => {
  const userDetailsResponse = await API.graphql(
    graphqlOperation(queries.getUserDetails, { id: user.username })
  );
  const userDetails = userDetailsResponse.data.getUserDetails;
  if (!userDetails) {
    alert(
      'User details not found, could not add shipping address. If this issue persists, please contact support.'
    );
    return;
  }
  try {
    const newShippingAddressResponse = await API.graphql(
      graphqlOperation(mutations.createShippingAddress, {
        input: {
          addressLine1: shippingAddress.addressLine1,
          addressLine2: shippingAddress.addressLine2,
          city: shippingAddress.city,
          postalCode: shippingAddress.postalCode,
          state: shippingAddress.state,
          streetNumber: shippingAddress.streetNumber,
          unitNumber: shippingAddress.unitNumber,
          countryID: shippingAddress.countryID,
        },
      })
    );
    const newShippingAddress =
      newShippingAddressResponse.data.createShippingAddress;
    if (!newShippingAddress) {
      alert(
        'Could not add shipping address. If this issue persists, please contact support.'
      );
      return;
    }
    try {
      const response = await API.graphql(
        graphqlOperation(mutations.createUserDetailsShippingAddress, {
          input: {
            shippingAddressID: newShippingAddress.id,
            userDetailsID: userDetails.id,
            shippingAddress: newShippingAddress,
            userDetails: userDetails,
          },
        })
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
export const CreateRFQ = async (rfqDetails) => {
  try {
    const rfqResponse = await API.graphql(
      graphqlOperation(mutations.createRfq, {
        input: {
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
        },
      })
    );
    console.log(rfqResponse);
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
  const response = await API.graphql(
    graphqlOperation(mutations.createCompany, {
      input: {
        companyName: companyName,
        companyDescription: companyDescription,
        contactEmail: email,
        phone: phone,
        fax: fax,
        profilePictureUrl: profilePictureUrl,
        countryID: country.code,
      },
    })
  );
  return response.data.createCompany;
};
export const AddUserToCompany = async (userDetails, companyID) => {
  const userToAddResponse = await API.graphql(
    graphqlOperation(queries.getUserDetails, { id: userDetails.userID })
  );
  const userToAdd = userToAddResponse.data.getUserDetails;
  const originalCompanyResponse = await API.graphql(
    graphqlOperation(queries.getCompany, { id: companyID })
  );
  const originalCompany = originalCompanyResponse.data.getCompany;

  await API.graphql(
    graphqlOperation(mutations.updateUserDetails, {
      input: { id: userToAdd.id, companyID: companyID },
    })
  );
  const response = await API.graphql(
    graphqlOperation(mutations.updateCompany, {
      input: {
        id: originalCompany.id,
        CompanyMembers: [...originalCompany.CompanyMembers, userToAdd],
      },
    })
  );
  return response;
};
export const AddOwnerToCompany = async (userDetails, companyID) => {
  const userToAddResponse = await API.graphql(
    graphqlOperation(queries.getUserDetails, { id: userDetails.userID })
  );
  const userToAdd = userToAddResponse.data.getUserDetails;
  const originalCompanyResponse = await API.graphql(
    graphqlOperation(queries.getCompany, { id: companyID })
  );
  const originalCompany = originalCompanyResponse.data.getCompany;

  await API.graphql(
    graphqlOperation(mutations.updateUserDetails, {
      input: { id: userToAdd.id, companyID: companyID },
    })
  );
  const response = await API.graphql(
    graphqlOperation(mutations.updateCompany, {
      input: {
        id: originalCompany.id,
        CompanyOwner: userToAdd,
      },
    })
  );
  return response;
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
    const userShippingAddressesResponse = await API.graphql(
      graphqlOperation(queries.listUserDetailsShippingAddresses, {
        filter: {
          userDetailsUserID: {
            eq: userDetails.userID,
          },
        },
      })
    );
    console.log(
      userShippingAddressesResponse.data.listUserDetailsShippingAddresses.items
    );
    return userShippingAddressesResponse.data.listUserDetailsShippingAddresses.items.map(
      (item) => item.shippingAddress
    );
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
export const SubscribeToUserDetails = async (
  userID,
  setUser,
  setUserDetails,
  setUserDetailsExists
) => {
  const subscription = await API.graphql(
    graphqlOperation(subscriptions.onCreateUserDetails)
  ).subscribe({
    next: ({ provider, value }) => {
      console.log('entered');
      console.log({ provider, value });
      const userDetails = value.data.onCreateUserDetails;
      setUserDetails(userDetails);
      setUserDetailsExists(true);
    },
    error: (error) => console.warn(error),
  });
  return subscription;
};
export const GetUserDetails = async (userID) => {
  try {
    const userDetailsResponse = await API.graphql(
      graphqlOperation(queries.getUserDetails, { userID: userID })
    );
    const userDetails = userDetailsResponse.data.getUserDetails;
    return userDetails;
  } catch (error) {
    console.log(error);
  }
};
export const SubscribeToCompanyItemsImport = async (
  companyID,
  setImporting,
  setImportProgress,
  importing
) => {
  const subscription = await API.graphql({
    query: subscriptions.onUpdateCompanyItemsImport,
    variables: {
      filter: {
        companyID: {
          contains: companyID,
        },
        importStatus: {
          contains: 'IMPORTING',
        },
      },
    },
  }).subscribe({
    next: ({ provider, value }) => {
      if (value.data.onUpdateCompanyItemsImport) {
        console.log(value.data.onUpdateCompanyItemsImport);
        if (!importing) {
          setImporting(true);
        }
        setImportProgress(value.data.onUpdateCompanyItemsImport.importProgress);
      } else if (value.data.onUpdateCompanyItemsImport === null) {
        // setImporting(false);
      }
      // const companyItemsImport = value.data.onUpdateCompanyItemsImport;
    },
    error: (error) => console.warn(error),
  });
  return subscription;
};
export const GetCompanyItemsImport = async (companyID) => {
  try {
    const companyItemsImportResponse = await API.graphql(
      graphqlOperation(queries.listCompanyItemsImports, {
        filter: {
          companyID: {
            eq: companyID,
          },
          importStatus: {
            eq: 'PENDING',
          },
        },
      })
    );
    return companyItemsImportResponse.data.listCompanyItemsImports.items;
  } catch (error) {
    console.log(error);
  }
};
// export const UpdateCompanyItemsImport = async (id) => {
//   try {
//     const response = await API.graphql(
//       graphqlOperation(mutations.updateCompanyItemsImport, {
//         input: {
//           id: id,
//           importProgress: 99 % 100,
//         },
//       })
//     );
//     // console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
