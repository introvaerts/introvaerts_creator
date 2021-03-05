import { Switch, Route, Redirect } from 'react-router-dom';

import { ROOT, SIGNIN, SIGNUP, SIGNOUT, DASHBOARD } from "./CONSTANTS";

import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Dashboard from "../views/Dashboard";

const MainRouter = () => (
    <Switch>
      <Redirect exact from={ROOT} to={SIGNIN} />
      <Route exact path={SIGNIN} component={Signin} />
      <Route exact path={SIGNUP} component={Signup} />
      <Route exact path={SIGNOUT} component={SIGNOUT} />
      <Route path={DASHBOARD} component={Dashboard} />
    </Switch>
);

export default MainRouter;