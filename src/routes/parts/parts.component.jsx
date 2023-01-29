import { Fragment, useEffect, useState } from 'react';
import { Item, UserDetails } from '../../models';
import {
  CustomerRFQForm,
  PartKey,
  PartsListCompanyDetails,
  PartsListDetails,
  PartsListDetailsCollection,
} from '../../ui-components';
import {
  GetAllCompanies,
  GetPartsByCompany,
  GetPartsByCompanyAndSearch,
} from '../../utils/amplifyUtils';
import * as queries from '../../graphql/queries.ts';
import * as mutations from '../../graphql/mutations.ts';
import { API, Auth, DataStore } from 'aws-amplify';

import './parts.styles.scss';
import { Button, Modal, TextField } from '@mui/material';
import { Collection, SearchField } from '@aws-amplify/ui-react';
import CustomerRFQFormPopUp from '../../components/customerRFQFormPopUp/customerRFQFormPopUp.component';

const Parts = () => {
  const [data, setData] = useState([]);
  const [partSearchTextField, setPartSearchTextField] = useState('');
  const [partSearch, setPartSearch] = useState('');
  const [dataRFQ, setDataRFQ] = useState({
    isOpen: false,
    company: {},
    item: {},
  });
  const [userDetails, setUserDetails] = useState(false);

  const handleCreateRFQClick = (company, item) => {
    setDataRFQ({ isOpen: true, company: company, item: item });
  };

  useEffect(() => {
    const getUserDetails = async () => {
      const userDetails = await DataStore.query(UserDetails);
      const user = await Auth.currentAuthenticatedUser();
      setUserDetails({
        user: user,
        companyID: userDetails[0].companyID,
        isCompanyOwner: userDetails[0].isCompanyOwner,
        id: userDetails[0].id,
      });
    };
    getUserDetails();
  }, []);

  useEffect(() => {
    const queryData = async () => {
      let companies = null;
      try {
        companies = await GetAllCompanies();
      } catch (error) {
        alert('There was an error retrieving companies list.');
        console.log(error);
      }
      const tempData = new Array();
      if (companies) {
        for (let i = 0; i < companies.length; i++) {
          let parts = null;
          try {
            if (partSearch) {
              const searchUpper = partSearch.toUpperCase();
              const searchLower = partSearch.toLowerCase();
              parts = await GetPartsByCompanyAndSearch(
                companies[i].id,
                partSearch,
                searchUpper,
                searchLower
              );
            } else {
              parts = await GetPartsByCompany(companies[i].id);
            }
          } catch (error) {
            alert('There was an error retrieving parts');
            console.log(error);
          }
          if (parts && parts.length > 0) {
            tempData.push({
              company: companies[i],
              parts: parts,
            });
          }
        }
        setData(tempData);
      }
    };
    queryData();
  }, [partSearch]);

  return (
    <div>
      <div className='search-bar-container'>
        <SearchField
          label='Search'
          value={partSearchTextField}
          onChange={(event) => setPartSearchTextField(event.target.value)}
          onSubmit={(value) => setPartSearch(value)}
          onClear={() => setPartSearchTextField('')}
        />
      </div>
      {partSearch ? (
        <div className='parts-list-container'>
          <PartKey />
          {data.length ? (
            data.map((d) => {
              return (
                <div key={d.id} style={{ backgroundColor: '#f6f6f6' }}>
                  <PartsListCompanyDetails
                    key={d.id}
                    company={d.company}
                    style={{ margin: 5 }}
                  />
                  {/* <PartsListDetailsCollection
                    key={d.parts.id}
                    items={d.parts}
                    overrides={partsListOverrides}
                    style={{ marginLeft: 5 }}
                    /> */}
                  <Collection
                    type='grid'
                    items={d.parts}
                    style={{ marginLeft: 5 }}
                    isPaginated
                    itemsPerPage={5}
                  >
                    {(item, index) => (
                      <PartsListDetails
                        item={item}
                        overrides={{
                          'CREATE RFQ': {
                            onClick: () => {
                              handleCreateRFQClick(d.company, item);
                            },
                            style: { cursor: 'pointer' },
                          },
                        }}
                        style={{ marginBottom: 5 }}
                      />
                    )}
                  </Collection>
                </div>
              );
            })
          ) : (
            <h2>No parts</h2>
          )}
        </div>
      ) : (
        <div>
          <h1>Make a search</h1>
        </div>
      )}
      <Modal
        open={dataRFQ.isOpen}
        onClose={() => setDataRFQ({ isOpen: false, company: {}, item: {} })}
      >
        <CustomerRFQFormPopUp userDetails={userDetails} dataRFQ={dataRFQ} />
      </Modal>
    </div>
  );
};

export default Parts;
