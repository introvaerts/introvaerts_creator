import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { TokenContext } from './shared/utils/context.js';
import MainRouter from './navigation/MainRouter';
import Signout from './components/Signout';

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
      {/* making token available globally */}
      <TokenContext.Provider value={{ token: token, setToken: setToken }}>
        <h1>introvÆrts</h1>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/signin">Signin</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/dashboard">Dashboard</Link>
          {logOutButton()}
          <MainRouter />
        </Router>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
