import { DataStore } from '@aws-amplify/datastore';
import { useEffect, useState } from 'react';
import { Item } from '../../models';
import {
  PartKey,
  PartsListDetails,
  PartsListDetailsCollection,
} from '../../ui-components';

const Parts = () => {
  // const [models, setModels] = useState(null);

  // useEffect(() => {
  //   const queryData = async () => {
  //     const tempModels = await DataStore.query(Item);
  //     setModels(tempModels);
  //   };
  //   queryData();
  // }, []);
  // console.log(models);

  return (
    <div>
      <h1>Parts Page</h1>
      <PartKey />
      <PartsListDetailsCollection />
    </div>
  );
};

export default Parts;
