import {
  Alert,
  CheckboxField,
  Collection,
  Pagination,
  SelectField,
  Text,
  useAuthenticator,
  useTheme,
} from '@aws-amplify/ui-react';
import { Box, Modal } from '@mui/material';
import { DataStore } from 'aws-amplify';
import { useContext, useEffect, useState } from 'react';
import AddPartPopUp from '../../components/addPartPopUp/addPartPopUp.component';
import DeleteAllPartsPopUp from '../../components/deleteAllPartsPopUp/deleteAllPartsPopUp.component';
import ImportDataPopUp from '../../components/importDataPopUp/importDataPopUp.component';
import { InventoryContext } from '../../context/inventory.context';
import { UserContext } from '../../context/user.context';
import { Item, UserDetails } from '../../models';
import {
  InventoryHeader,
  InventoryKey,
  InventoryPartsDetails,
} from '../../ui-components';
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
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [deletePartsList, setDeletePartsList] = useState(null);
  const [allowDelete, setAllowDelete] = useState(false);

  const { user } = useAuthenticator();
  const { tokens } = useTheme();

  const { refreshPage } = useContext(UserContext);

  const handleCheckboxChange = (index) => {
    let allTrue = true;
    let allFalse = true;
    const tempValues = checkboxValues.map((c, i) => {
      if (i === index) {
        if (!c === false) {
          allTrue = false;
        } else {
          allFalse = true;
        }
        return !c;
      } else {
        if (c === false) {
          allTrue = false;
        } else {
          allFalse = true;
        }
        return c;
      }
    });

    setAllowDelete(allFalse);
    setCheckboxValues(tempValues);
    setAllCheckboxValue(allTrue);
  };

  const changeAllCheckboxValues = (value) => {
    setCheckboxValues(Array(checkboxValues.length).fill(value));
    setAllowDelete(value);

    setAllCheckboxValue(value);
  };

  const handleDeleteParts = () => {
    const partsToDelete = [];
    checkboxValues.forEach((c, index) => {
      if (c) {
        console.log('entered');
        partsToDelete.push(data.parts[index]);
      }
    });
    setDeletePartsList(partsToDelete);
    setIsDeleteAllPartOpen(true);
  };

  const {
    isAddPartOpen,
    isDeleteAllPartOpen,
    isImportPartOpen,
    setIsAddPartOpen,
    setIsDeleteAllPartOpen,
    setIsImportPartOpen,
  } = useContext(InventoryContext);

  const inventoryHeaderOverrides = {
    AddButton: {
      onClick: () => setIsAddPartOpen(true),
    },
    ImportButton: {
      onClick: () => setIsImportPartOpen(true),
    },
    ItemSelect: {
      onChange: (e) => {
        const value = parseInt(e.target.value);
        setItemsPerPage(isNaN(value) ? 25 : value);
        setCurrentPage(1);
      },
      options: [25, 50, 75, 100],
    },
    DeleteIcon: {
      onClick: () => (allowDelete ? handleDeleteParts() : null),
      style: {
        cursor: allowDelete ? 'pointer' : 'not-allowed',
      },
    },
  };
  useEffect(() => {
    const queryData = async () => {
      const userDetails = await DataStore.query(UserDetails, (p) =>
        p.userID.eq(user.username)
      );
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
  }, [refreshPage]);

  useEffect(() => {
    const asyncGetData = async () => {
      const count = await GetPartCountByCompany(company);
      await GetPartsByCompanySubscribe(
        company,
        setData,
        currentPage,
        itemsPerPage
      );
      setTotalItems(count);
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
    <div style={{ display: 'flex' }}>
      <div style={{ padding: 10 }}>
        <InventoryHeader
          overrides={inventoryHeaderOverrides}
          width={1444}
          itemCount={
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                height: '100%',
              }}
            >
              <Text>
                {'Total Items: '} {totalItems}
              </Text>
            </div>
          }
        />
        <div style={{ paddingBottom: 10 }}>
          <InventoryKey
            // overrides={{
            //   CheckboxField: {
            //     checked: allCheckboxValue,
            //     onChange: () => changeAllCheckboxValues(!allCheckboxValue),
            //     // backgroundColor: 'white',
            //     // color: tokens.colors.brand.primary[80],
            //     color: 'white',
            //   },
            // }}
            width={1444}
            checkboxField={
              <div
                style={{
                  backgroundColor: tokens.colors.brand.primary[80],
                  width: '100%',
                  height: '100%',
                }}
              >
                <CheckboxField
                  checked={allCheckboxValue}
                  onChange={() => changeAllCheckboxValues(!allCheckboxValue)}
                  size='large'
                  marginLeft={2}
                  marginTop={2}
                  // backgroundColor: 'white',
                  // color: tokens.colors.brand.primary[80],
                  // color='white'
                />
              </div>
            }
          />
        </div>

        <Collection
          items={data.parts}
          type='grid'
          itemsPerPage={itemsPerPage}
          style={{
            paddingLeft: 12,
            paddingBottom: 12,
            paddingTop: 12,
            backgroundColor: tokens.colors.background.tertiary,
            width: 1444,
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          {(item, index) => (
            <div
              style={{
                display: 'flex',
                width: 1444,
              }}
            >
              <div
                style={{
                  width: 69,
                }}
              >
                <CheckboxField
                  checked={checkboxValues[index] || false}
                  onChange={() => handleCheckboxChange(index)}
                  size='large'
                  // marginLeft={2}
                  // marginTop={2}
                  // backgroundColor: 'white',
                  // color: tokens.colors.brand.primary[80],
                  // color='white'
                />
              </div>
              <InventoryPartsDetails
                key={item.id}
                item={item}
                width={1360}
                marginBottom={4}
              />
            </div>
          )}
        </Collection>
        <Pagination
          currentPage={currentPage}
          onChange={(newPageIndex) => setCurrentPage(newPageIndex)}
          totalPages={Math.ceil(totalItems / itemsPerPage)}
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
        <DeleteAllPartsPopUp
          deletePartsList={deletePartsList}
          setDeletePartsList={setDeletePartsList}
        />
      </Modal>
    </div>
  );
};

export default Inventory;
