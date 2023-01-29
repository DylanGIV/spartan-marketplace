import { Alert } from '@aws-amplify/ui-react';
import { Box, Modal } from '@mui/material';
import { DataStore } from 'aws-amplify';
import { useContext, useEffect, useState } from 'react';
import AddPartPopUp from '../../components/addPartPopUp/addPartPopUp.component';
import DeleteAllPartsPopUp from '../../components/deleteAllPartsPopUp/deleteAllPartsPopUp.component';
import ImportDataPopUp from '../../components/importDataPopUp/importDataPopUp.component';
import { InventoryContext } from '../../context/inventory.context';
import { Item, UserDetails } from '../../models';
import {
  InventoryKey,
  InventoryPartsDetailsCollection,
} from '../../ui-components';
import { GetCompanyByID, GetPartsByCompany } from '../../utils/amplifyUtils';

const Inventory = () => {
  const [data, setData] = useState([]);
  const [parts, setParts] = useState([]);

  const {
    isAddPartOpen,
    isDeleteAllPartOpen,
    isImportPartOpen,
    setIsAddPartOpen,
    setIsDeleteAllPartOpen,
    setIsImportPartOpen,
  } = useContext(InventoryContext);

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

  useEffect(() => {
    const queryData = async () => {
      const userDetails = await DataStore.query(UserDetails);
      const companyID = userDetails[0].companyID;

      let company = null;
      let parts = null;

      try {
        company = await GetCompanyByID(companyID);
        parts = await GetPartsByCompany(companyID);
      } catch (error) {
        alert('There was an error retrieving parts list.');
        console.log(error);
      }
      if (company && parts) {
        const data = new Object({
          company: company,
          parts: parts,
        });
        setData(data);
      }
    };
    queryData();
  }, []);
  console.log(data.parts);

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
              <button onClick={() => setIsAddPartOpen(true)}>ADD PART</button>
            </div>
            <div style={{ paddingBottom: 10 }}>
              <button onClick={() => setIsImportPartOpen(true)}>
                IMPORT DATA
              </button>
            </div>
          </div>
          <div style={{}}>
            <button onClick={() => setIsDeleteAllPartOpen(true)}>
              DELETE ALL DATA
            </button>
          </div>
        </div>
        <div style={{ paddingBottom: 10 }}>
          <InventoryKey />
        </div>

        <InventoryPartsDetailsCollection items={data.parts} />
      </div>

      <Modal open={isAddPartOpen} onClose={() => setIsAddPartOpen(false)}>
        <AddPartPopUp />
      </Modal>
      <Modal open={isImportPartOpen} onClose={() => setIsImportPartOpen(false)}>
        <ImportDataPopUp />
      </Modal>
      <Modal
        open={isDeleteAllPartOpen}
        onClose={() => setIsDeleteAllPartOpen(false)}
      >
        <DeleteAllPartsPopUp />
      </Modal>
    </div>
  );
};

export default Inventory;
