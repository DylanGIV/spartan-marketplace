import { Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router';
import { PopulateCountries, SignOutAuth } from '../../utils/utilsAmplify';

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
      {/* <Button onClick={() => PopulateCountries()}>
        Populate all Countries
      </Button> */}
      <Button>Populate Countries</Button>
      <Button onClick={() => signOutHandler()}>SIGN OUT</Button>
    </div>
  );
};

export default Settings;
