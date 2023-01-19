import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './addPartPopUp.styles.scss';

const AddPartPopUp = () => {
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

  const handlePartSubmit = async () => {};

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
            onChange={(event) => setPrice(event.target.value)}
            style={{ marginBottom: 10 }}
          />
        </div>
      </div>
      <Button style={{ marginTop: 20 }} onClick={handlePartSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default AddPartPopUp;
