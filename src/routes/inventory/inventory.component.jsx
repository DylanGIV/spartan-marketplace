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
import { Box, LinearProgress, Modal } from '@mui/material';
import { DataStore } from 'aws-amplify';
import { useContext, useEffect, useState } from 'react';
import AddPartPopUp from '../../components/addPartPopUp/addPartPopUp.component';
import DeleteAllPartsPopUp from '../../components/deleteAllPartsPopUp/deleteAllPartsPopUp.component';
import ImportDataPopUp from '../../components/importDataPopUp/importDataPopUp.component';
import { InventoryContext } from '../../context/inventory.context';
import { UserContext } from '../../context/user.context';
import { CompanyItemsImport, Item, UserDetails } from '../../models';
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
  // const [company, setCompany] = useState(null);
  const [allCheckboxValue, setAllCheckboxValue] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [deletePartsList, setDeletePartsList] = useState(null);
  const [allowDelete, setAllowDelete] = useState(false);
  const [importing, setImporting] = useState(false);
  const [importProgress, setImportProgress] = useState(0);
  const [unsubscribeImport, setUnsubscribeImport] = useState(false);
  const [importSubscription, setImportSubscription] = useState(null);

  const { user } = useAuthenticator();
  const { tokens } = useTheme();

  const { refreshPage, company, userDetails } = useContext(UserContext);

  console.log(userDetails);
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
  // useEffect(() => {
  //   const queryData = async () => {
  //     const userDetails = await DataStore.query(UserDetails, user.username);
  //     const companyID = userDetails.companyID;

  //     let company = null;
  //     try {
  //       company = await GetCompanyByID(companyID);
  //     } catch (error) {
  //       alert('There was an error retrieving Company.');
  //       console.log(error);
  //     }

  //     if (company) {
  //       setCompany(company);
  //     }
  //   };
  //   queryData();
  // }, [refreshPage]);

  useEffect(() => {
    const asyncGetData = async () => {
      // const count = await GetPartCountByCompany(company);
      const count = 1;
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

  useEffect(() => {
    const subscribeToImport = async () => {
      const subscription = DataStore.observeQuery(CompanyItemsImport, (p) =>
        p.and((p) => [
          p.companyID.eq(company.id),
          p.importStatus.eq('IMPORTING'),
        ])
      ).subscribe((snapshot) => {
        const { items, isSynced } = snapshot;
        if (items.length > 0) {
          if (!importing) setImporting(true);
          console.log('importing', items);
          setImportProgress(items[0].importProgress);
        } else if (items.length === 0) {
          setImporting(false);
        }
      });
      return subscription;
    };
    const subscription = subscribeToImport();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ padding: 10 }}>
        <InventoryHeader
          overrides={inventoryHeaderOverrides}
          width={1444}
          itemCount={
            importing ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'space-around',
                  }}
                >
                  <Text fontSize={14}>Import Progress</Text>
                  <LinearProgress
                    variant='determinate'
                    value={importProgress}
                    style={{ height: 5, borderRadius: 5, width: '85%' }}
                  />
                </div>
                <Text>{importProgress + '%'}</Text>
              </div>
            ) : null
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
              key={item.id}
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
          // totalPages={Math.ceil(totalItems / itemsPerPage)}
          totalPages={2}
          onNext={() => setCurrentPage(currentPage + 1)}
          onPrevious={() => setCurrentPage(currentPage - 1)}
        />
      </div>

      <Modal open={isAddPartOpen} onClose={() => setIsAddPartOpen(false)}>
        <AddPartPopUp />
      </Modal>
      <Modal
        open={isImportPartOpen}
        // onClose={() => setIsImportPartOpen(false)}
        disableEscapeKeyDown={true}
      >
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
