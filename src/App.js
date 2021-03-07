// Router
import { useState } from 'react';
import { TokenContext } from './shared/utils/context.js';
import { BrowserRouter, Link } from 'react-router-dom';
import {
  ROOT,
  SIGNIN,
  SIGNUP,
  SIGNOUT,
  DASHBOARD,
} from './navigation/CONSTANTS';
import MainRouter from './navigation/MainRouter';
import Signout from './components/Signout';

import NormaliseStyles from './shared/styles/NormaliseStyles';
import BaseStyles from './shared/styles/BaseStyles.js';

function App() {
  //for storing token globally
  const [token, setToken] = useState(null);

  //global logout button for testing
  const logOutButton = () => {
    if (token) {
      return <Signout />;
    }
  };

  return (
    <div className="App">
      {/* global styles */}
      <NormaliseStyles />
      <BaseStyles />

      {/* making token available globally */}
      <TokenContext.Provider value={{ token: token, setToken: setToken }}>
        <h1>introvÆrts</h1>
        <BrowserRouter>
          <Link to={ROOT}>Home</Link>
          <Link to={SIGNIN}>Signin</Link>
          <Link to={SIGNUP}>Signup</Link>
          <Link to={DASHBOARD}>Dashboard</Link>
          {logOutButton()}
          <MainRouter />
        </BrowserRouter>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
