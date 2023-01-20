import { Alert } from '@aws-amplify/ui-react';
import { Box, Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import AddPartPopUp from '../../components/addPartPopUp/addPartPopUp.component';
import DeleteAllPartsPopUp from '../../components/deleteAllPartsPopUp/deleteAllPartsPopUp.component';
import ImportDataPopUp from '../../components/importDataPopUp/importDataPopUp.component';
import {
  InventoryKey,
  InventoryPartsDetailsCollection,
} from '../../ui-components';
import { GetPartsByCompany } from '../../utils/amplifyUtils';

const Inventory = () => {
  const [addPartOpen, setAddPartOpen] = useState(false);
  const [importDataOpen, setImportDataOpen] = useState(false);
  const [deleteDataOpen, setDeleteDataOpen] = useState(false);
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 5,
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ paddingBottom: 10, marginRight: 10 }}>
              <button onClick={() => setAddPartOpen(true)}>ADD PART</button>
            </div>
            <div style={{ paddingBottom: 10 }}>
              <button onClick={() => setImportDataOpen(true)}>
                IMPORT DATA
              </button>
            </div>
          </div>
          <div style={{}}>
            <button onClick={() => setDeleteDataOpen(true)}>
              DELETE ALL DATA
            </button>
          </div>
        </div>
        <div style={{ paddingBottom: 10 }}>
          <InventoryKey />
        </div>

        <InventoryPartsDetailsCollection />
      </div>

      <Modal open={addPartOpen} onClose={() => setAddPartOpen(false)}>
        <AddPartPopUp setAddPartOpen={setAddPartOpen} />
      </Modal>
      <Modal open={importDataOpen} onClose={() => setImportDataOpen(false)}>
        <ImportDataPopUp setImportDataOpen={setImportDataOpen} />
      </Modal>
      <Modal open={deleteDataOpen} onClose={() => setDeleteDataOpen(false)}>
        <DeleteAllPartsPopUp setDeleteDataOpen={setDeleteDataOpen} />
      </Modal>
    </div>
  );
};

export default Inventory;
