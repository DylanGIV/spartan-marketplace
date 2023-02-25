import { ScrollView, Text, useAuthenticator } from '@aws-amplify/ui-react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  LinearProgress,
} from '@mui/material';
import { Box } from '@mui/system';
import { DataStore } from 'aws-amplify';
import React, { forwardRef, useContext, useState } from 'react';
import { InventoryContext } from '../../context/inventory.context';
import { Company, Item, UserDetails } from '../../models';
import { BatchAddPartsToInventoryILS } from '../../utils/utilsAmplify';
import './importDataPopUp.styles.scss';

const ImportDataPopUp = forwardRef((props, ref) => {
  const [data, setData] = useState([]);
  const [progress, setProgress] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { setIsImportPartOpen } = useContext(InventoryContext);
  const { user } = useAuthenticator();
  const [allowClose, setAllowClose] = useState(true);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const csvData = event.target.result;
      const lines = csvData.split('\n');
      const result = [];
      const headers = lines[0].split(',');

      for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim() === '') continue;
        const obj = {};
        const currentline = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j].trim().replace(/\"/g, '');
        }

        result.push(obj);
      }

      setData(result);
    };

    reader.readAsText(file);
  };

  const batchAddHandler = async () => {
    const userDetails = await DataStore.query(UserDetails, user.username);
    const companyID = userDetails.companyID;
    try {
      await TestFunctionBatch(
        data,
        companyID,
        setIsImportPartOpen,
        setProgress
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='import-data-pop-up-container'>
      <input type='file' onChange={handleFileSelect} />
      <ScrollView className='import-data-scroll-container'>
        <pre>{JSON.stringify(data.slice(0, 10), null, 2)}</pre>
      </ScrollView>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button
          onClick={() => setIsImportPartOpen(false)}
          disabled={!allowClose}
        >
          Close
        </Button>
        <Button onClick={() => setDialogOpen(true)}>Submit</Button>
      </div>
      {progress ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <LinearProgress
            variant='determinate'
            value={progress}
            style={{ height: 5, borderRadius: 5, width: '85%' }}
          />
          <Text>{progress + '%'}</Text>
        </div>
      ) : null}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogContent>
          If you proceed you must wait until all parts have successfully been
          synced to the database before continuing. This may take a few minutes.
          Are you sure you want to continue?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              setAllowClose(false);
              setDialogOpen(false);
              batchAddHandler();
            }}
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
const TestFunctionBatch = async (
  items,
  companyID,
  setIsImportPartOpen,
  setProgress
) => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    let newPrice = parseFloat(item.PRICE);
    let newQuantity = parseInt(item.QUANTITY);

    if (i % 1000 === 0) {
      setProgress((i / items.length) * 100);
      console.log('getting there');
    }

    if (isNaN(newPrice)) {
      newPrice = null;
    }
    if (isNaN(newQuantity)) {
      newQuantity = null;
    }
    try {
      await DataStore.save(
        new Item({
          nsn: '',
          partNumber: item.PARTNUMBER,
          altPartNumber: item.ALTERNATEPARTNUMBER,
          description: item.DESCRIPTION,
          quantity: newQuantity,
          condition: item.CONDITIONCD,
          imageUrls: [],
          control: item.CONTROL,
          price: newPrice,
          companyID: companyID,
        })
      );
    } catch (error) {
      console.log(error);
      continue;
    }
  }
  alert('Successfully saved items to database.');
  setIsImportPartOpen(false);
  //   await Promise.all(promises)
  //     .then(() => {
  //       alert('Successfully saved all items to database.');
  //       setIsImportPartOpen(false);
  //     })
  //     .catch((err) => {
  //       console.log('Error while batch saving:', err);
  //     });
};

export default ImportDataPopUp;
