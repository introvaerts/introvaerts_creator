import { Switch, Route, Redirect } from 'react-router-dom';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Dashboard from '../views/Dashboard';
import PrivateRoute from './PrivateRoute.js';

const MainRouter = () => (
  <Switch>
    <Redirect exact from="/" to="/signin" />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
    <PrivateRoute path="/dashboard">
      <Dashboard />
    </PrivateRoute>
  </Switch>
);

export default MainRouter;
