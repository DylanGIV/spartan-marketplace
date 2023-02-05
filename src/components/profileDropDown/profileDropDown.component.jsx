import './profileDropDown.styles.scss';
import { Button } from '@mui/material';
import { populateCountries, SignOutAuth } from '../../utils/utilsAmplify';
import { useNavigate } from 'react-router';

const ProfileDropDown = () => {
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
    <div className='profile-dropdown-container'>
      <h1>profile container</h1>
      <Button onClick={() => populateCountries()}>
        Populate all Countries
      </Button>
      <Button>Settings</Button>
      <Button onClick={() => signOutHandler()}>SIGN OUT</Button>
    </div>
  );
};

export default ProfileDropDown;
