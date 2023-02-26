import { Button } from '@aws-amplify/ui-react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../context/user.context';
import {
  CreateCompanyItemsImportRequest,
  PopulateCountries,
  SignOutAuth,
} from '../../utils/utilsAmplify';

const Settings = () => {
  const navigate = useNavigate();
  const signOutHandler = async () => {
    try {
      await SignOutAuth();

      navigate('/');
    } catch (error) {
      alert('There was an error trying to sign out.');
    }
  };

  const { company } = useContext(UserContext);

  const clickHandler = async () => {
    console.log(company.id);
    const response = await CreateCompanyItemsImportRequest(
      company.id,
      'BQYGU01_BATCHInventory_01_14_23_013250.csv',
      'firstTest'
    );
    console.log(response);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Settings Page</h1>
      {/* <Button onClick={() => PopulateCountries()}>
        Populate all Countries
      </Button> */}
      {/* <Button onClick={clickHandler}>Create import request</Button> */}
      <Button onClick={() => signOutHandler()}>SIGN OUT</Button>
    </div>
  );
};

export default Settings;
