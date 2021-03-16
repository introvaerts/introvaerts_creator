import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js';

import { ROOT, SIGNIN, SIGNUP, SIGNOUT, DASHBOARD } from './CONSTANTS';

import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Dashboard from '../views/Dashboard';

const MainRouter = ({ refreshApp }) => (
  <Switch>
    <Redirect exact from={ROOT} to={SIGNIN} />
    <Route exact path={SIGNIN} component={Signin} />
    <Route exact path={SIGNUP} component={Signup} />
    <Route exact path={SIGNOUT} component={SIGNOUT} />
    <PrivateRoute path={DASHBOARD}>
      <Dashboard />
    </PrivateRoute>
  </Switch>
);

export default MainRouter;
