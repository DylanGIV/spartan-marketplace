import { DataStore } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Item } from '../../models';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemquery = async () => {
      const items = await DataStore.query(Item);
      setItems(items);
    };
    itemquery();
  }, []);
  console.log(items.data);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
