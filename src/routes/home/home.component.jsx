import { Button, SearchField, SelectField } from '@aws-amplify/ui-react';
import { populateCountries } from '../../utils/utilsAmplify';

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Welcome to Spartan Marketplace</h1>
      <p>Find the parts you need for your next project</p>
      <div
        style={{
          display: 'flex',
          width: '100vh',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          height: '15vh',
        }}
      >
        <SearchField type='text' placeholder='Search for parts by keyword' />
        <SelectField>
          <option value='partNumber'>Part Number</option>
          <option value='partName'>Part Name</option>
        </SelectField>
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default Home;
