/* import DashboardRouter from "../../navigation/DashboardRouter"; */
import {
  BrowserRouter as Router,
  Link,
  useRouteMatch,
  Switch,
  Route
} from "react-router-dom";

import Design from "./Design";
import Content from "./Content";
import Settings from "./Settings";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Dashboard</h2>
      <Router>
        <Link to={`${url}/`}>Dashboard</Link>
        <Link to={`${url}/design`}>Design</Link>
        <Link to={`${url}/content`}>Content</Link>
        <Link to={`${url}/settings`}>Settings</Link>

        {/* <DashboardRouter /> */}
        <Switch>
          <Route exact path={path} />
          <Route path={`${path}/design`} component={Design} />
          <Route path={`${path}/content`} component={Content} />
          <Route path={`${path}/settings`} component={Settings} />
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;