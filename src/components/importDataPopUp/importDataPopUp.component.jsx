import { ScrollView } from '@aws-amplify/ui-react';
import { Button } from '@mui/material';
import { DataStore } from 'aws-amplify';
import React, { useState } from 'react';
import { UserDetails } from '../../models';
import { batchAddPartsToInventoryILS } from '../../utils/amplifyUtils';
import './importDataPopUp.styles.scss';

const ImportDataPopUp = (props) => {
  const [data, setData] = useState([]);
  const { setImportDataOpen } = props;

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

    await batchAddPartsToInventoryILS(data, companyID, setImportDataOpen);
  };

  return (
    <div className='import-data-pop-up-container'>
      <input type='file' onChange={handleFileSelect} />
      <ScrollView className='import-data-scroll-container'>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </ScrollView>
      <Button onClick={() => batchAddHandler()}>Submit</Button>
    </div>
  );
};

export default ImportDataPopUp;
