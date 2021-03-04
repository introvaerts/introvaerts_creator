import { BrowserRouter as Router, Link } from 'react-router-dom';

import MainRouter from './navigation/MainRouter';
import Signout from './components/Signout';

function App() {
  const logOutButton = () => {
    if (localStorage.getItem('accessToken')) {
      return <Signout />;
    }
  };
  return (
    <div className="App">
      <h1>introvÆrts</h1>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/dashboard">Dashboard</Link>

        {logOutButton()}

        <MainRouter />
      </Router>
    </div>
  );
}

export default App;
