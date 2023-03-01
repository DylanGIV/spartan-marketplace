import { useAuthenticator } from '@aws-amplify/ui-react';
import { Button, TextField } from '@mui/material';
import { forwardRef, useContext, useEffect } from 'react';
import { useState } from 'react';
import { InventoryContext } from '../../context/inventory.context';
import { UserContext } from '../../context/user.context';
import { UserDetails } from '../../models';
import { DeleteListOfParts } from '../../utils/utilsAmplify';
import './deleteAllPartsPopUp.styles.scss';

const DELETE_MATCH_WORD = 'delete';

const DeleteAllPartsPopUp = forwardRef((props, ref) => {
  const [buttonInactive, setButtonInactive] = useState(true);
  const [deleteText, setDeleteText] = useState('');

  const { setIsDeleteAllPartOpen } = useContext(InventoryContext);
  const { user } = useAuthenticator();
  const { deletePartsList, setDeletePartsList } = props;

  const { refreshPage, setRefreshPage } = useContext(UserContext);

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
    await DeleteListOfParts(deletePartsList);
    setRefreshPage(!refreshPage);
    setDeletePartsList(null);
    setIsDeleteAllPartOpen(false);
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
});

export default DeleteAllPartsPopUp;
