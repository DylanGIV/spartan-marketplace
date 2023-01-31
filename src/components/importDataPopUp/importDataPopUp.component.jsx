import { ScrollView } from '@aws-amplify/ui-react';
import { Button } from '@mui/material';
import { DataStore } from 'aws-amplify';
import React, { forwardRef, useContext, useState } from 'react';
import { InventoryContext } from '../../context/inventory.context';
import { Company, Item, UserDetails } from '../../models';
import { BatchAddPartsToInventoryILS } from '../../utils/utilsAmplify';
import './importDataPopUp.styles.scss';

const ImportDataPopUp = forwardRef((props, ref) => {
  const [data, setData] = useState([]);
  const { setIsImportPartOpen } = useContext(InventoryContext);

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
    const userDetails = await DataStore.query(UserDetails);
    const companyID = userDetails[0].companyID;
    try {
      await TestFunctionBatch(data, companyID, setIsImportPartOpen);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='import-data-pop-up-container'>
      <input type='file' onChange={handleFileSelect} />
      <ScrollView className='import-data-scroll-container'>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </ScrollView>
      <Button onClick={batchAddHandler}>Submit</Button>
    </div>
  );
});
const TestFunctionBatch = async (items, companyID, setIsImportPartOpen) => {
  // const { setIsImportPartOpen } = useContext(InventoryContext);
  const promises = items.map(async (item) => {
    let newPrice = parseFloat(item.PRICE);
    let newQuantity = parseInt(item.QUANTITY);

    if (isNaN(newPrice)) {
      newPrice = null;
    }
    if (isNaN(newQuantity)) {
      newQuantity = null;
    }
    try {
      const response = await DataStore.save(
        new Item({
          nsn: '',
          partNumber: item.PARTNUMBER,
          altPartNumber: item.ALTERNATEPARTNUMBER,
          description: item.DESCRIPTION,
          quantity: newQuantity,
          condition: item.CONDITIONCD,
          imageUrls: [''],
          control: item.CONTROL,
          price: newPrice,
          companyID: companyID,
        })
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  });
  await Promise.all(promises)
    .then(() => {
      alert('Successfully saved all items to database.');
      setIsImportPartOpen(false);
    })
    .catch((err) => {
      console.log('Error while batch saving:', err);
    });
};
export default ImportDataPopUp;
