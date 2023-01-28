import { Button, TextField } from '@mui/material';
import { DataStore } from 'aws-amplify';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { InventoryContext } from '../../context/inventory.context';
import { UserDetails } from '../../models';
import { DeleteAllPartsByCompany } from '../../utils/amplifyUtils';
import './deleteAllPartsPopUp.styles.scss';

const DELETE_MATCH_WORD = 'delete';

const DeleteAllPartsPopUp = () => {
  const [buttonInactive, setButtonInactive] = useState(true);
  const [deleteText, setDeleteText] = useState('');

  const { setIsDeleteAllPartOpen } = useContext(InventoryContext);

  useEffect(() => {
    if (deleteText.toLocaleLowerCase() === DELETE_MATCH_WORD)
      setButtonInactive(false);

    if (
      deleteText.toLocaleLowerCase() !== DELETE_MATCH_WORD &&
      buttonInactive === false
    )
      setButtonInactive(true);
  }, [deleteText]);

  const deleteAllPartsHandler = async () => {
    const userDetails = await DataStore.query(UserDetails);
    const companyID = userDetails[0].companyID;
    if (companyID) {
      try {
        const response = await DeleteAllPartsByCompany(companyID);
        console.log(response);
        alert('Successfully deleted all items');
        setIsDeleteAllPartOpen(false);
      } catch (error) {
        console.log(error);
        alert('There was an error trying to delete all items.');
      }
    } else {
      alert('There was an error trying to find your company.');
    }
  };

  return (
    <div className='delete-all-parts-pop-up-container'>
      <div className='delete-all-text-container'>
        <h2>
          Beware, once all items have been deleted there is no way to retrieve
          them again.
        </h2>
        <h2>
          If you are sure you want to delete all items in your inventory, type
          DELETE.
        </h2>
      </div>
      <div className='delete-all-input-button-container'>
        <div className='delete-all-text-field'>
          <TextField
            value={deleteText}
            onChange={(event) => setDeleteText(event.target.value)}
          />
        </div>
        <Button
          size='large'
          color='error'
          disabled={buttonInactive}
          onClick={() => deleteAllPartsHandler()}
        >
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default DeleteAllPartsPopUp;
