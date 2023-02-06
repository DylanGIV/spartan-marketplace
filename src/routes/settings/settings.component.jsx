import { Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router';
import { populateCountries, SignOutAuth } from '../../utils/utilsAmplify';

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

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Settings Page</h1>
      {/* <Button onClick={() => populateCountries()}>
        Populate all Countries
      </Button> */}
      <Button>Settings</Button>
      <Button onClick={() => signOutHandler()}>SIGN OUT</Button>
    </div>
  );
};

export default Settings;
