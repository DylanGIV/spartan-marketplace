import { withAuthenticator } from '@aws-amplify/ui-react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

import '@aws-amplify/ui-react/styles.css';
import Parts from './routes/parts/parts.component';
import Inventory from './routes/inventory/inventory.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='parts' element={<Parts />} />
        <Route path='inventory' element={<Inventory />} />
      </Route>
    </Routes>
  );
}

export default withAuthenticator(App);
