import { Switch, Route, Redirect } from 'react-router-dom';
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Dashboard from "../views/Dashboard";

const MainRouter = () => (
    <Switch>
      <Redirect exact from="/" to="/signin" />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
);

export default MainRouter;