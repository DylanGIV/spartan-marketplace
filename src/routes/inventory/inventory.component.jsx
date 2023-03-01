import {
  Button,
  CheckboxField,
  Collection,
  Pagination,
  Placeholder,
  Text,
  useAuthenticator,
  useTheme,
} from '@aws-amplify/ui-react';
import { LinearProgress, Modal } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import AddPartPopUp from '../../components/addPartPopUp/addPartPopUp.component';
import DeleteAllPartsPopUp from '../../components/deleteAllPartsPopUp/deleteAllPartsPopUp.component';
import ImportDataPopUp from '../../components/importDataPopUp/importDataPopUp.component';
import { InventoryContext } from '../../context/inventory.context';
import { UserContext } from '../../context/user.context';
import { CompanyItemsImport } from '../../models';
import {
  InventoryHeader,
  InventoryKey,
  InventoryPartsDetails,
} from '../../ui-components';
import {
  GetCompanyItemsImport,
  GetPartsByCompanySubscribe,
  SubscribeToCompanyItemsImport,
  UpdateCompanyItemsImport,
} from '../../utils/utilsAmplify';

const Inventory = () => {
  const [data, setData] = useState({
    company: null,
    parts: null,
    nextToken: null,
  });
  // const [company, setCompany] = useState(null);
  const [allCheckboxValue, setAllCheckboxValue] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [deletePartsList, setDeletePartsList] = useState(null);
  const [allowDelete, setAllowDelete] = useState(false);
  const [importing, setImporting] = useState(true);
  const [importProgress, setImportProgress] = useState(0);
  const [unsubscribeImport, setUnsubscribeImport] = useState(false);
  const [importSubscription, setImportSubscription] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [pendingImport, setPendingImport] = useState(true);
  const [partSearch, setPartSearch] = useState('');
  const [normalizedSearch, setNormalizedSearch] = useState('');
  const [beginSearch, setBeginSearch] = useState(false);

  const { user } = useAuthenticator();
  const { tokens } = useTheme();

  const { refreshPage, company, userDetails } = useContext(UserContext);

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
      isDisabled: pendingImport,
    },
    ItemSelect: {
      onChange: (e) => {
        const value = parseInt(e.target.value);
        setData({ ...data, parts: null, nextToken: null });
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
    PartSearch: {
      onChange: (e) => {
        const value = e.target.value;
        if (value === '') {
          setPartSearch('');
        } else {
          setPartSearch(value);
        }
      },
      value: partSearch,
      onSubmit: (e) => {
        setNormalizedSearch(partSearch.toUpperCase());
        setCurrentPage(1);
        setBeginSearch(!beginSearch);
        setData({ ...data, parts: null, nextToken: null });
      },
      onClear: () => {
        setPartSearch('');
        setNormalizedSearch('');
        setCurrentPage(1);
        setBeginSearch(!beginSearch);
        setData({ ...data, parts: null, nextToken: null });
      },
    },
  };

  useEffect(() => {
    const asyncGetData = async () => {
      // const count = await GetPartCountByCompany(company);
      await GetPartsByCompanySubscribe(
        company,
        setData,
        currentPage,
        itemsPerPage,
        data.nextToken,
        normalizedSearch ? normalizedSearch : null
      );
    };
    if (company) {
      asyncGetData();
    }
  }, [company, currentPage, itemsPerPage, beginSearch]);

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
      // const subscription = .observeQuery(CompanyItemsImport, (p) =>
      //   p.and((p) => [
      //     p.companyID.eq(company.id),
      //     p.importStatus.eq('IMPORTING'),
      //   ])
      // ).subscribe((snapshot) => {
      //   const { items, isSynced } = snapshot;
      //   if (items.length > 0) {
      //     if (!importing) setImporting(true);
      //     console.log('importing', items);
      //     setImportProgress(items[0].importProgress);
      //   } else if (items.length === 0) {
      //     setImporting(false);
      //   }
      // });
      // return subscription;
      const response = await SubscribeToCompanyItemsImport(
        company.id,
        setImporting,
        setImportProgress,
        importing
      );
      console.log(response);
      return response;
    };
    const subscription = subscribeToImport();
  }, []);

  useEffect(() => {
    const asyncGetCompanyItemsImport = async () => {
      const response = await GetCompanyItemsImport(company.id);
      if (response.length > 0) {
        setPendingImport(true);
      } else {
        setPendingImport(false);
      }
    };
    asyncGetCompanyItemsImport();
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
            ) : pendingImport ? (
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
                  <Text fontSize={18}>Import Pending...</Text>
                </div>
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

        {!data.parts ? (
          new Array(itemsPerPage).fill(0).map((_, index) => (
            <div key={index} style={{ marginBottom: 4 }}>
              <Placeholder style={{ height: 30 }} />
            </div>
          ))
        ) : (
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
        )}
        <Pagination
          currentPage={currentPage}
          onChange={(newPageIndex) => setCurrentPage(newPageIndex)}
          // totalPages={Math.ceil(totalItems / itemsPerPage)}
          totalPages={1}
          onNext={() => setCurrentPage(currentPage + 1)}
          onPrevious={() => setCurrentPage(currentPage - 1)}
          hasMorePages={data ? (data.nextToken ? true : false) : false}
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
        <ImportDataPopUp setPendingImport={setPendingImport} />
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
