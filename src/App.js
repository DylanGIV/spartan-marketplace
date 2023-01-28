import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

import '@aws-amplify/ui-react/styles.css';
import Parts from './routes/parts/parts.component';
import Inventory from './routes/inventory/inventory.component';
import { useEffect, useState } from 'react';
import { UserDetails } from './models';
import { DataStore, Hub } from 'aws-amplify';
import CompanySelect from './routes/companySelect/companySelect.component';
import UserAuth from './routes/auth/userAuth.component';

function App() {
  Hub.listen('auth', async (data) => {
    if (data.payload.event === 'signOut') {
      await DataStore.clear();
    }
  });

  const [userDetailsExists, setUserDetailsExists] = useState(false);
  const { user } = useAuthenticator();
  const navigate = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      const userDetails = await DataStore.query(UserDetails);
      // const companyID = userDetails[0].companyID;
      console.log(userDetails);
      if (userDetails.length > 0) {
        setUserDetailsExists(true);
      } else {
        setUserDetailsExists(false);
      }
    };
    getUser();
  }, [user]);
  if (user && userDetailsExists) {
    return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='parts' element={<Parts />} />
          <Route path='inventory' element={<Inventory />} />
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
