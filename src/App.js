import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

import '@aws-amplify/ui-react/styles.css';
import Parts from './routes/parts/parts.component';
import Inventory from './routes/inventory/inventory.component';
import { useContext, useEffect, useState } from 'react';
import { Company, Item, RFQItem, UserDetails } from './models';
import { Amplify, Hub } from 'aws-amplify';
import { DataStore, Predicates } from '@aws-amplify/datastore';
import UserAuth from './routes/auth/userAuth.component';
import Settings from './routes/settings/settings.component';
import { UserContext } from './context/user.context';
import { GetCompanyByID } from './utils/utilsAmplify';
import RFQ from './routes/rfq/rfq.component';
import CompanyAndUserDetailsForm from './routes/companyUserDetails/companyAndUserDetailsForm.component';

function App() {
  const [userDetailsExists, setUserDetailsExists] = useState(false);
  const [retrievalComplete, setRetrievalComplete] = useState(false);
  const { user } = useAuthenticator();

  const { userDetails, company, setCompany, setUser, setUserDetails } =
    useContext(UserContext);

  Hub.listen('auth', async (data) => {
    if (data.payload.event === 'signOut') {
      await DataStore.clear();
    }
  });

  useEffect(() => {
    const startAmplifyDataStore = async () => {
      await DataStore.start();
      await waitForDataStoreLoad();
      setRetrievalComplete(true);
    };
    startAmplifyDataStore();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const response = await DataStore.query(Company);

      const subscription = DataStore.observeQuery(UserDetails, (p) =>
        p.userID.eq(user.username)
      ).subscribe((snapshot) => {
        const { items, isSynced } = snapshot;
        if (items.length > 0) {
          setUserDetails(items[0]);
          setUser(user);
          setUserDetailsExists(true);
        }
      });

      if (userDetailsExists) {
        subscription.unsubscribe();
      }

      // const companyID = userDetails[0].companyID;
      // console.log(userDetails);
    };
    getUser();
  }, [retrievalComplete]);

  const waitForDataStoreLoad = async () => {
    await new Promise((resolve) => {
      Hub.listen('datastore', (data) => {
        if (data.payload.event == 'ready') {
          console.log('ready');
          resolve();
        }
      });
    });
  };

  useEffect(() => {
    const getCompany = async () => {
      if (userDetails) {
        const tempCompany = await GetCompanyByID(userDetails.companyID);
        const items = await DataStore.query(Item);
        console.log(items);
        setCompany(tempCompany);
      }
    };
    getCompany();
  }, [userDetails, retrievalComplete]);

  if (!retrievalComplete) {
    return <div>loading...</div>;
  } else if (user && userDetailsExists && company && retrievalComplete) {
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
  } else if (user && retrievalComplete) {
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
