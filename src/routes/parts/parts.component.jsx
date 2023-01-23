import { DataStore } from '@aws-amplify/datastore';
import { Fragment, useEffect, useState } from 'react';
import { Item, UserDetails } from '../../models';
import {
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
import { API } from 'aws-amplify';

import './parts.styles.scss';
import { Button, TextField } from '@mui/material';
import { SearchField } from '@aws-amplify/ui-react';

const Parts = () => {
  const [data, setData] = useState([]);
  const [partSearchTextField, setPartSearchTextField] = useState('');
  const [partSearch, setPartSearch] = useState('');

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
              parts = await GetPartsByCompanyAndSearch(
                companies[i].id,
                partSearch
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

  console.log(data);
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
                    company={d.company}
                    style={{ margin: 5 }}
                  />
                  <PartsListDetailsCollection
                    key={d.parts.id}
                    items={d.parts}
                    style={{ marginLeft: 5 }}
                  />
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
    </div>
  );
};

export default Parts;
