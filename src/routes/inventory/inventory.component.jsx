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
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const queryData = async () => {
  //     const userDetails = await DataStore.query(UserDetails);
  //     const companyID = userDetails[0].companyID;

  //     let company = null;
  //     let parts = null;

  //     try {
  //       company = await GetCompanyByID(companyID);
  //       parts = await GetPartsByCompany(companyID);
  //     } catch (error) {
  //       alert('There was an error retrieving parts list.');
  //       console.log(error);
  //     }
  //     if (company && parts) {
  //       const data = new Object({
  //         company: company,
  //         parts: parts,
  //       });
  //       setData(data);
  //     }
  //   };
  //   queryData();
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
