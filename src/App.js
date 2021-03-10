// Router
import { useState } from 'react';
import { TokenContext } from './shared/utils/context.js';
import { BrowserRouter, Link } from 'react-router-dom';

import MainRouter from './navigation/MainRouter';
import Signout from './components/Signout';
import Wrapper from './shared/components/Wrapper';
import { getToken } from './shared/utils/helpers';

import NormaliseStyles from './shared/styles/NormaliseStyles';
import BaseStyles from './shared/styles/BaseStyles.js';

function App() {
  //for storing token globally
  const [token, setToken] = useState(getToken() ? true : false);

  return (
    <Wrapper>
      {/* global styles */}
      <NormaliseStyles />
      <BaseStyles />

      {/* making token available globally */}
      <TokenContext.Provider value={{ token: token, setToken: setToken }}>
        <BrowserRouter>
          {/* {logOutButton()} */}
          <MainRouter />
        </BrowserRouter>
      </TokenContext.Provider>
    </Wrapper>
  );
}

export default App;
