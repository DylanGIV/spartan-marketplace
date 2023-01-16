import logo from './logo.svg';
import './App.css';

import { Auth } from 'aws-amplify';

import { CompanyCreateForm } from './ui-components';
import { useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signUpHandler = async () => {
    try {
      const { user } = await Auth.signUp({ username, password });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  return (
    <div className='App'>
      <CompanyCreateForm />
    </div>
  );
}

export default withAuthenticator(App);
