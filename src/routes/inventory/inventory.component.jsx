import {
  Alert,
  Collection,
  Pagination,
  SelectField,
} from '@aws-amplify/ui-react';
import { Box, Modal } from '@mui/material';
import { DataStore } from 'aws-amplify';
import { useContext, useEffect, useState } from 'react';
import AddPartPopUp from '../../components/addPartPopUp/addPartPopUp.component';
import DeleteAllPartsPopUp from '../../components/deleteAllPartsPopUp/deleteAllPartsPopUp.component';
import ImportDataPopUp from '../../components/importDataPopUp/importDataPopUp.component';
import { InventoryContext } from '../../context/inventory.context';
import { Item, UserDetails } from '../../models';
import { InventoryKey, InventoryPartsDetails } from '../../ui-components';
import {
  GetCompanyByID,
  GetPartCountByCompany,
  GetPartsByCompany,
  GetPartsByCompanySubscribe,
} from '../../utils/utilsAmplify';

const Inventory = () => {
  const [data, setData] = useState({ company: null, parts: null });
  const [company, setCompany] = useState(null);
  const [allCheckboxValue, setAllCheckboxValue] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState({});
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const handleCheckboxChange = (index) => {
    let allTrue = true;
    const tempValues = checkboxValues.map((c, i) => {
      if (i === index) {
        if (!c === false) {
          allTrue = false;
        }
        return !c;
      } else {
        if (c === false) {
          allTrue = false;
        }
        return c;
      }
    });
    setCheckboxValues(tempValues);
    setAllCheckboxValue(allTrue);
  };

  const changeAllCheckboxValues = (value) => {
    setCheckboxValues(Array(checkboxValues.length).fill(value));

    setAllCheckboxValue(value);
  };

  const {
    isAddPartOpen,
    isDeleteAllPartOpen,
    isImportPartOpen,
    setIsAddPartOpen,
    setIsDeleteAllPartOpen,
    setIsImportPartOpen,
  } = useContext(InventoryContext);

  useEffect(() => {
    const queryData = async () => {
      const userDetails = await DataStore.query(UserDetails);
      const companyID = userDetails[0].companyID;

      let company = null;
      try {
        company = await GetCompanyByID(companyID);
      } catch (error) {
        alert('There was an error retrieving Company.');
        console.log(error);
      }

      if (company) {
        setCompany(company[0]);
      }
    };
    queryData();
  }, []);

  useEffect(() => {
    const asyncGetData = async () => {
      const count = await GetPartCountByCompany(company);
      const index = currentPage - 1;
      await GetPartsByCompanySubscribe(company, setData, index, itemsPerPage);
      setTotalItems(Math.ceil(count / itemsPerPage));
    };
    if (company) {
      asyncGetData();
    }
  }, [company, currentPage, itemsPerPage]);

  useEffect(() => {
    if (data.parts) {
      if (data.parts.length)
        setCheckboxValues(Array(data.parts.length).fill(false));
    }
  }, [data]);

  useEffect(() => {
    setAllCheckboxValue(false);
  }, [currentPage]);

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
          <div style={{ display: 'flex' }}>
            <SelectField
              onChange={(e) => {
                setItemsPerPage(parseInt(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={75}>75</option>
              <option value={100}>100</option>
            </SelectField>
            <button onClick={() => setIsDeleteAllPartOpen(true)}>
              DELETE ALL DATA
            </button>
          </div>
        </div>
        <div style={{ paddingBottom: 10 }}>
          <InventoryKey
            overrides={{
              CheckboxField: {
                checked: allCheckboxValue,
                onChange: () => changeAllCheckboxValues(!allCheckboxValue),
              },
            }}
          />
        </div>

        <Collection items={data.parts} type='grid' itemsPerPage={itemsPerPage}>
          {(item, index) => (
            <InventoryPartsDetails
              key={item.id}
              item={item}
              overrides={{
                CheckboxField: {
                  checked: checkboxValues[index] || false,
                  onChange: () => handleCheckboxChange(index),
                },
              }}
            />
          )}
        </Collection>
        <Pagination
          currentPage={currentPage}
          onChange={(newPageIndex) => setCurrentPage(newPageIndex)}
          totalPages={totalItems}
          onNext={() => setCurrentPage(currentPage + 1)}
          onPrevious={() => setCurrentPage(currentPage - 1)}
        />
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
