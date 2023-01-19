import { Auth } from 'aws-amplify';
import { DataStore } from 'aws-amplify';
import { Item } from '../models';

export const signOutHandler = async () => {
  try {
    const response = await Auth.signOut();
    console.log(response);
  } catch (error) {
    console.log('error signing out:', error);
  }
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
  await DataStore.save(
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

export const GetPartsByCompany = async (companyID) => {
  const parts = await DataStore.query(Item, (i) => i.companyID === companyID);
  return parts;
};
