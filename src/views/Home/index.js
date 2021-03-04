import { useState } from 'react';

import Signin from '../../components/Signin';
import Signout from '../../components/Signout';

const Home = () => {
  //for storing token
  const [token, setToken] = useState('');

  return (
    <div>
      <h2>Home</h2>
      <Signin
        token={token}
        getToken={token => {
          setToken(token);
        }}
      />
    </div>
  );
};

export default Home;
