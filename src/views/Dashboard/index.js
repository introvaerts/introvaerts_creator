import DashboardRouter from "../../navigation/DashboardRouter";
import {
  BrowserRouter as Router,
  Link,
  useRouteMatch,
  Switch,
  Route
} from "react-router-dom";

import Design from "./Design/";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Dashboard</h2>
      <Router>
        <DashboardRouter />
        <Link to={`${url}/`}>Dashboard</Link>
        <Link to={`${url}/design`}>Design</Link>
        <Link to={`${url}/content`}>Content</Link>
        <Link to={`${url}/settings`}>Settings</Link>

      </Router>
    </div>
  );
};

export default Dashboard;