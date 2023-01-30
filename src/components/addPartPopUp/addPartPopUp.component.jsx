import { Button, TextField } from '@mui/material';
import { forwardRef, useContext, useState } from 'react';
import './addPartPopUp.styles.scss';
import { AddPartToInventory } from '../../utils/amplifyUtils';
import { UserDetails } from '../../models';
import { DataStore } from 'aws-amplify';
import { InventoryContext } from '../../context/inventory.context';

const AddPartPopUp = forwardRef((props, ref) => {
  const [partID, setPartID] = useState('');
  const [nsn, setNsn] = useState('');
  const [partNumber, setPartNumber] = useState('');
  const [altPartNumber, setAltPartNumber] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [condition, setCondition] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [control, setControl] = useState('');
  const [price, setPrice] = useState(0.0);

  const { setIsAddPartOpen } = useContext(InventoryContext);

  const handlePartSubmit = async () => {
    const newPrice = parseFloat(price);
    const newQuantity = parseInt(quantity);
    if (
      partID.length > 0 &&
      nsn.length > 0 &&
      partNumber.length > 0 &&
      altPartNumber.length > 0 &&
      description.length > 0 &&
      newQuantity > -1 &&
      condition.length > 0 &&
      imageUrl.length > 0 &&
      control.length > 0 &&
      newPrice > 0
    ) {
      const userDetails = await DataStore.query(UserDetails);
      const companyID = userDetails[0].companyID;

      if (companyID) {
        try {
          const response = await AddPartToInventory(
            nsn,
            partNumber,
            altPartNumber,
            description,
            newQuantity,
            condition,
            imageUrl,
            control,
            newPrice,
            companyID
          );
          console.log(response);
          alert('Part successfully added!');
          setIsAddPartOpen(false);
        } catch (error) {
          console.log(error);
          alert('There was an error submitting your part.');
        }
      } else {
        alert('There was an error retrieving company from your profile.');
      }
    } else {
      alert('Please fill all required fields.');
    }
  };

  return (
    <div className='add-part-pop-up-container'>
      <h1>Add Part</h1>
      <div style={{ display: 'flex' }}>
        <div className='text-field-container'>
          <TextField
            label='Part ID'
            value={partID}
            onChange={(event) => setPartID(event.target.value)}
            style={{ marginBottom: 10 }}
          />
          <TextField
            label='NSN'
            value={nsn}
            onChange={(event) => setNsn(event.target.value)}
            style={{ marginBottom: 10 }}
          />
          <TextField
            label='Part Number'
            value={partNumber}
            onChange={(event) => setPartNumber(event.target.value)}
            style={{ marginBottom: 10 }}
          />
          <TextField
            label='Alternate Part Number'
            value={altPartNumber}
            onChange={(event) => setAltPartNumber(event.target.value)}
            style={{ marginBottom: 10 }}
          />
          <TextField
            label='Description'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            style={{ marginBottom: 10 }}
          />
        </div>
        <div className='text-field-container'>
          <TextField
            label='Quantity'
            value={quantity}
            type='number'
            onChange={(event) => setQuantity(event.target.value)}
            style={{ marginBottom: 10 }}
          />
          <TextField
            label='Condition'
            value={condition}
            onChange={(event) => setCondition(event.target.value)}
            style={{ marginBottom: 10 }}
          />
          <TextField
            label='Image URL'
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            style={{ marginBottom: 10 }}
          />
          <TextField
            label='Control'
            value={control}
            onChange={(event) => setControl(event.target.value)}
            style={{ marginBottom: 10 }}
          />
          <TextField
            label='Price'
            value={price}
            type='number'
            onChange={(event) => setPrice(event.target.value)}
            style={{ marginBottom: 10 }}
          />
        </div>
      </div>
      <Button style={{ marginTop: 20 }} onClick={() => handlePartSubmit()}>
        Submit
      </Button>
    </div>
  );
});

export default AddPartPopUp;
