import './profileDropDown.styles.scss';
import { Button } from '@mui/material';
import { SignOutAuth } from '../../utils/amplifyUtils';

const ProfileDropDown = () => {
  const signOutHandler = async () => {
    try {
      await SignOutAuth();
    } catch (error) {
      alert('There was an error trying to sign out.');
    }
  };

  return (
    <div className='profile-dropdown-container'>
      <h1>profile container</h1>
      <Button>Settings</Button>
      <Button onClick={() => signOutHandler()}>SIGN OUT</Button>
    </div>
  );
};

export default ProfileDropDown;
