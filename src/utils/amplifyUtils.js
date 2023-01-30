import { Alert } from '@mui/material';
import { Auth, Predicates } from 'aws-amplify';
import { Company, Item, UserDetails } from '../models';
import { DataStore } from 'aws-amplify';
import { useContext } from 'react';
import { InventoryContext } from '../context/inventory.context';
import React from 'react';

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
export const GetPartsByCompanySubscribe = (company, setData) => {
  const subscription = DataStore.observeQuery(
    Item,
    (p) => p.companyID.eq(company.id),
    { pollInterval: 2000 }
  ).subscribe((snapshot) => {
    const { items, isSynced } = snapshot;
    setData({
      company: company,
      parts: items,
    });
  });
  return subscription;
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

const sendData = async () => {
  const response = await DataStore.save(
    new Company({
      companyName: 'My company',
      phone: '+16617448383',
      contactEmail: 'dylangiv123@gmail.com',
    })
  );
  console.log(response);
};

export const CreateUserDetails = async (companyID, isOwner) => {
  const response = await DataStore.save(
    new UserDetails({
      companyID: companyID,
      isCompanyOwner: isOwner,
    })
  );
  return response;
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

export const DeleteAllPartsByCompany = async (companyID) => {
  return await DataStore.delete(Item, (p) => p.companyID.eq(companyID));
};

export const DeleteAllParts = async () => {
  return await DataStore.delete(Item, Predicates.ALL);
};
