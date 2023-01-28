import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Amplify } from 'aws-amplify';
import {
  AmplifyProvider,
  Authenticator,
  ThemeProvider,
} from '@aws-amplify/ui-react';
import { studioTheme } from './ui-components';
import awsconfig from './aws-exports';

import '@aws-amplify/ui-react/styles.css';
import './index.css';
import { InventoryProvider } from './context/inventory.context';

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AmplifyProvider>
        <Authenticator.Provider>
          <InventoryProvider>
            <ThemeProvider theme={studioTheme}>
              <Authenticator>
                <App />
              </Authenticator>
            </ThemeProvider>
          </InventoryProvider>
        </Authenticator.Provider>
      </AmplifyProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
