import { Button, TextField } from '@mui/material';
import { forwardRef, useContext, useEffect, useState } from 'react';
import './addPartPopUp.styles.scss';
import { AddPartToInventory } from '../../utils/utilsAmplify';
import { UserDetails } from '../../models';
import { DataStore, Storage } from 'aws-amplify';
import { InventoryContext } from '../../context/inventory.context';
import { useAuthenticator } from '@aws-amplify/ui-react';

const AddPartPopUp = forwardRef((props, ref) => {
  const [nsn, setNsn] = useState('');
  const [partNumber, setPartNumber] = useState('');
  const [altPartNumber, setAltPartNumber] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [condition, setCondition] = useState('');
  const [control, setControl] = useState('');
  const [price, setPrice] = useState(0.0);
  const [submitted, setSubmitted] = useState(false);
  const [images, setImages] = useState([]);

  const { setIsAddPartOpen } = useContext(InventoryContext);
  const { user } = useAuthenticator();

  const handlePartSubmit = async () => {
    const newPrice = parseFloat(price);
    const newQuantity = parseInt(quantity);
    if (
      // nsn.length > 0 &&
      partNumber.length > 0 &&
      description.length > 0 &&
      newQuantity > -1 &&
      condition.length > 0 &&
      control.length > 0
    ) {
      const userDetails = await DataStore.query(UserDetails, (p) =>
        p.userID.eq(user.username)
      );
      const companyID = userDetails[0].companyID;

      const imageUrlStrings = [];

      for (let i = 0; i < images.length; i++) {
        try {
          const response = await Storage.put(images[i].name, images[i], {
            contentType: 'image/png', // contentType is optional
          });
          console.log(response);

          const urlResponse = await Storage.get(response.key);
          imageUrlStrings.push(urlResponse);

          console.log(urlResponse);
        } catch (error) {
          console.log('Error uploading file: ', error);
        }
      }

      if (companyID) {
        try {
          const response = await AddPartToInventory(
            nsn.toUpperCase(),
            partNumber.toUpperCase(),
            altPartNumber.toUpperCase(),
            description.toUpperCase(),
            newQuantity,
            condition.toUpperCase(),
            imageUrlStrings,
            control.toUpperCase(),
            newPrice,
            companyID
          );
          console.log(response);
          // setSubmitted(true);
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
  async function onChange(e) {
    try {
      const tempImages = [];
      images.map((i) => {
        tempImages.push(i);
      });
      tempImages.push(e.target.files[0]);
      setImages(tempImages);
    } catch (error) {
      console.log('Error saving file: ', error);
    }
  }

  // useEffect(() => {
  //   // on dismount
  //   const cleanUpStorage = async () => {
  //     for (let i = 0; i < imageUrls.length; i++) {
  //       const response = await Storage.remove(imageUrls[i].imageKey);
  //       console.log(response);
  //     }
  //   };
  //   return () => {
  //     console.log(submitted);
  //     if (!submitted) {
  //       window.addEventListener('beforeunload', cleanUpStorage);
  //     }
  //   };
  // }, []);

  return (
    <div className='add-part-pop-up-container'>
      <h1>Add Part</h1>
      <div style={{ display: 'flex' }}>
        <div className='text-field-container'>
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
          {/* <TextField
            label='Image URL'
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            style={{ marginBottom: 10 }}
          /> */}
          <input type='file' onChange={onChange} />
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
