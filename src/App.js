import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

import '@aws-amplify/ui-react/styles.css';
import Parts from './routes/parts/parts.component';
import Inventory from './routes/inventory/inventory.component';
import { useContext, useEffect, useState } from 'react';
import UserAuth from './routes/auth/userAuth.component';
import Settings from './routes/settings/settings.component';
import { UserContext } from './context/user.context';
import {
  GetCompanyByID,
  GetCountries,
  GetUserDetails,
  SubscribeToUserDetails,
} from './utils/utilsAmplify';
import RFQ from './routes/rfq/rfq.component';
import CompanyAndUserDetailsForm from './routes/companyUserDetails/companyAndUserDetailsForm.component';
// import { csv } from 'fast-csv';

function App() {
  const [userDetailsExists, setUserDetailsExists] = useState(false);
  const [retrievalComplete, setRetrievalComplete] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const { user } = useAuthenticator();

  const {
    userDetails,
    company,
    setCompany,
    setUser,
    setUserDetails,
    setCountries,
  } = useContext(UserContext);

  // Hub.listen('auth', async (data) => {
  //   if (data.payload.event === 'signOut') {
  //     await DataStore.clear();
  //   }
  // });

  // useEffect(() => {
  //   const startAmplifyDataStore = async () => {
  //     await DataStore.start();
  //     await waitForDataStoreLoad();
  //     setRetrievalComplete(true);
  //   };
  //   startAmplifyDataStore();
  // }, []);

  useEffect(() => {
    const getUser = async () => {
      const userDetails = await GetUserDetails(user.username);

      if (userDetails) {
        setUserDetails(userDetails);
        setUser(user);
        setUserDetailsExists(true);
      } else {
        const subscriptionResponse = await SubscribeToUserDetails(
          user.username,
          setUser,
          setUserDetails,
          setUserDetailsExists
        );
        console.log(subscriptionResponse);

        setSubscription(subscriptionResponse);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    if (userDetailsExists && subscription) {
      setUser(user);
      subscription.unsubscribe();
    }
  }, [subscription]);

  // const waitForDataStoreLoad = async () => {
  //   await new Promise((resolve) => {
  //     Hub.listen('datastore', (data) => {
  //       if (data.payload.event == 'ready') {
  //         console.log('ready');
  //         resolve();
  //       }
  //     });
  //   });
  // };

  // test get storage
  // useEffect(() => {
  // const testGetStorage = async () => {
  //   const response = await Storage.get(
  //     'csv/1d3182fa-e515-40c9-a30b-b85ed590ac18',
  //     {
  //       level: 'public',
  //       download: true,
  //     }
  //   );
  //   console.log(response);
  //   const stream = response.Body.createReadStream();
  //   csv
  //     .parseStream(stream, { headers: true, strict: true })
  //     .on('data', (data) => records.push(data))
  //     .on('error', (error) => console.error(error))
  //     .on('end', (rowCount) => {
  //       console.log(`Parsed ${rowCount} rows`);
  //       console.log(records);
  //     });
  // };
  // testGetStorage();
  // }, []);

  useEffect(() => {
    const getCompany = async () => {
      if (userDetails) {
        const tempCompany = await GetCompanyByID(userDetails.companyID);
        setCompany(tempCompany);
        setRetrievalComplete(true);
      }
    };
    getCompany();
  }, [userDetails]);

  useEffect(() => {
    const getCountries = async () => {
      const countries = await GetCountries();
      setCountries(countries);
    };
    getCountries();
  }, []);

  if (!retrievalComplete) {
    return <div>loading...</div>;
  } else if (user && userDetailsExists && company) {
    return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='parts' element={<Parts />} />
          <Route path='inventory' element={<Inventory />} />
          <Route path='rfq' element={<RFQ />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    );
  } else if (user) {
    return <CompanyAndUserDetailsForm />;
    // return (
    //   // <Routes>
    //   //   <Route path='/auth' element={<UserAuth />} />;
    //   // </Routes>
    //   // <UserAuth />
    // );
  }
}

export default App;
