import { DataStore } from '@aws-amplify/datastore';
import { Fragment, useEffect, useState } from 'react';
import { Item, UserDetails } from '../../models';
import {
  PartKey,
  PartsListCompanyDetails,
  PartsListDetails,
  PartsListDetailsCollection,
} from '../../ui-components';
import { GetAllCompanies, GetPartsByCompany } from '../../utils/amplifyUtils';

const Parts = () => {
  const [data, setData] = useState([]);

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
            parts = await GetPartsByCompany(companies[i].id);
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
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Parts Page</h1>
      <PartKey />
      {data ? (
        data.map((d) => {
          return (
            <div key={d.id}>
              <PartsListCompanyDetails company={d.company} />
              <PartsListDetailsCollection items={d.parts} />
            </div>
          );
        })
      ) : (
        <h1>No parts</h1>
      )}
    </div>
  );
};

export default Parts;
