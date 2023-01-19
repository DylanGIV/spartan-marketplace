import { Alert } from '@aws-amplify/ui-react';
import { Box, Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import AddPartPopUp from '../../components/addPartPopUp/addPartPopUp.component';
import {
  InventoryKey,
  InventoryPartsDetailsCollection,
} from '../../ui-components';
import { GetPartsByCompany } from '../../utils/amplifyUtils';

const Inventory = () => {
  const [addPartOpen, setAddPartOpen] = useState(false);
  const [parts, setParts] = useState([]);

  const AddPartHandler = async () => {};

  // useEffect(() => {
  //   const GetParts = async () => {
  //     try {
  //       const parts = await GetPartsByCompany();
  //       setParts(parts);
  //     } catch (error) {
  //       Alert(error, 'Error fetching parts.');
  //     }
  //   };
  //   GetParts();
  // }, []);

  return (
    <div>
      <div style={{ padding: 10 }}>
        <h1>Inventory Page</h1>
        <div style={{ paddingBottom: 10 }}>
          <button onClick={() => setAddPartOpen(true)}>ADD PART</button>
        </div>
        <div style={{ paddingBottom: 10 }}>
          <InventoryKey />
        </div>

        <InventoryPartsDetailsCollection />
      </div>

      <Modal open={addPartOpen} onClose={() => setAddPartOpen(false)}>
        <AddPartPopUp />
      </Modal>
    </div>
  );
};

export default Inventory;
