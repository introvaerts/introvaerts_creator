// Router
import { useState } from 'react';
import { TokenContext } from './shared/utils/context.js';
import { BrowserRouter, Link } from 'react-router-dom';
import { ROOT, SIGNIN, SIGNUP, DASHBOARD } from './navigation/CONSTANTS';
import MainRouter from './navigation/MainRouter';
import Signout from './components/Signout';
import { getToken } from './shared/utils/helpers';

import NormaliseStyles from './shared/styles/NormaliseStyles';
import BaseStyles from './shared/styles/BaseStyles.js';

function App() {
  //for storing token globally
  const [token, setToken] = useState(getToken() ? true : false);

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
          {logOutButton()}
          <MainRouter />
        </BrowserRouter>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
