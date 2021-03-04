// Router
import { BrowserRouter, Link } from 'react-router-dom';
import {
  ROOT,
  SIGNIN,
  SIGNUP,
  SIGNOUT,
  DASHBOARD,
} from './navigation/CONSTANTS';
import MainRouter from './navigation/MainRouter';

function App() {
  return (
    <div className="App">
      <h1>introvÆrts</h1>
      <BrowserRouter>
        <Link to={ROOT}>Home</Link>
        <Link to={SIGNIN}>Signin</Link>
        <Link to={SIGNUP}>Signup</Link>
        <Link to={SIGNOUT}>Signout</Link>
        <Link to={DASHBOARD}>Dashboard</Link>

        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
