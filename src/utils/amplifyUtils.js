import { Alert } from '@mui/material';
import { Auth, Predicates } from 'aws-amplify';
import { DataStore } from 'aws-amplify';
import { Company, Item } from '../models';

export const SignOutAuth = async () => {
  return await Auth.signOut();
};

export const AddPartToInventory = async (
  partID,
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
      PartID: partID,
      NSN: nsn,
      PartNumber: partNumber,
      AltPartNumber: altPartNumber,
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

export async function batchAddPartsToInventoryILS(
  items,
  companyID,
  setImportDataOpen
) {
  const promises = items.map((item) => {
    const newPrice = parseFloat(item.PRICE);
    const newQuantity = parseInt(item.QUANTITY);
    return DataStore.save(
      new Item({
        // PartID: partID,
        // NSN: nsn,
        PartNumber: item.PARTNUMBER,
        AltPartNumber: item.ALTERNATEPARTNUMBER,
        description: item.DESCRIPTION,
        quantity: newQuantity,
        condition: item.CONDITIONCD,
        // imageUrl: imageUrl,
        control: item.CONTROL,
        price: newPrice,
        companyID: companyID,
      })
    );
  });
  await Promise.all(promises)
    .then(() => {
      alert('Successfully saved all items to database.');
      setImportDataOpen(false);
    })
    .catch((err) => {
      console.log('Error while batch saving:', err);
    });
}

export const GetPartsByCompany = async (companyID) => {
  const parts = await DataStore.query(Item, (p) => p.companyID.eq(companyID));
  return parts;
};
export const GetCompanyByID = async (companyID) => {
  const company = await DataStore.query(Company, (p) => p.p.eq(companyID));
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

// const response = await DataStore.save(
//   new UserDetails({
//     companyID: companyID,
//     isCompanyOwner: true,
//   })
// );

export const DeleteAllPartsByCompany = async (companyID) => {
  return await DataStore.delete(Item, (p) => p.companyID.eq(companyID));
};

export const DeleteAllParts = async () => {
  return await DataStore.delete(Item, Predicates.ALL);
};
