import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

import '@aws-amplify/ui-react/styles.css';
import Parts from './routes/parts/parts.component';
import Inventory from './routes/inventory/inventory.component';
import { useEffect, useState } from 'react';
import { UserDetails } from './models';
import { Hub } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import CompanySelect from './routes/companySelect/companySelect.component';
import UserAuth from './routes/auth/userAuth.component';
import RFQ from './routes/rfq/rfq.component';
import Settings from './routes/settings/settings.component';

function App() {
  const [userDetailsExists, setUserDetailsExists] = useState(false);
  const { user } = useAuthenticator();

  Hub.listen('auth', async (data) => {
    if (data.payload.event === 'signOut') {
      await DataStore.clear();
      // await DataStore.start();
    }
  });
  // const navigate = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      DataStore.observeQuery(UserDetails).subscribe();
      const subscription = DataStore.observeQuery(UserDetails, (p) =>
        p.userID.eq(user.username)
      ).subscribe((snapshot) => {
        const { items, isSynced } = snapshot;
        console.log(items);
        if (items.length > 0) {
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
  }, []);

  if (user && userDetailsExists) {
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
    return <CompanySelect />;
  } else {
    // return (
    //   // <Routes>
    //   //   <Route path='/auth' element={<UserAuth />} />;
    //   // </Routes>
    //   // <UserAuth />
    // );
  }
}

export default App;
