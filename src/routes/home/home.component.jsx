import { DataStore } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Item } from '../../models';
import { DeleteAllParts } from '../../utils/amplifyUtils';

const Home = () => {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const itemquery = async () => {
  //     // DeleteAllParts();
  //     // const items = await DataStore.query(Item);
  //     // setItems(items);
  //   };
  //   itemquery();
  // }, []);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
