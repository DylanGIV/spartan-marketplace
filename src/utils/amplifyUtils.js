import { Auth } from 'aws-amplify';

export const signOutHandler = async () => {
  try {
    const response = await Auth.signOut();
    console.log(response);
  } catch (error) {
    console.log('error signing out:', error);
  }
};

export const AddPartToInventory = async () => {};
