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
import { UserContext } from '../../context/user.context';
import { Company, Item, UserDetails } from '../../models';
import {
  BatchAddPartsToInventoryILS,
  CreateCompanyItemsImportRequest,
} from '../../utils/utilsAmplify';
import './importDataPopUp.styles.scss';

const ImportDataPopUp = forwardRef((props, ref) => {
  const [data, setData] = useState([]);
  const [progress, setProgress] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { setIsImportPartOpen } = useContext(InventoryContext);
  const { user } = useAuthenticator();
  const [allowClose, setAllowClose] = useState(true);
  const [importFile, setImportFile] = useState(null);

  const { company } = useContext(UserContext);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    console.log(file);

    setImportFile(file);
    const reader = new FileReader();

    reader.onload = (event) => {
      const csvData = event.target.result;
      const lines = csvData.split('\n');
      const result = [];
      const headers = lines[0].split(',');

      for (let i = 1; i < lines.length && 20; i++) {
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

  const handleImport = async () => {
    const response = await CreateCompanyItemsImportRequest(
      company.id,
      importFile
    );
    console.log(response);
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
          Continuing will add {data.length} parts to your inventory. This may
          take a few minutes to hours depending on the part count. This process
          will occur in the background and you may leave the page. Are you sure
          you want to continue?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              // setAllowClose(false);
              setDialogOpen(false);
              handleImport();
            }}
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

export default ImportDataPopUp;
