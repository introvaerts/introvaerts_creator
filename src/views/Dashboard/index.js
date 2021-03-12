/* import DashboardRouter from "../../navigation/DashboardRouter"; */
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Link,
  useRouteMatch,
  Switch,
  Route,
} from 'react-router-dom';
// api
import Api from '../../shared/utils/api';

import Design from './Design';
import Content from './Content';
import Settings from './Settings';

const Dashboard = () => {
  let { path, url } = useRouteMatch();

  const [userInfo, setUserInfo] = useState();
  const [galleries, setGalleries] = useState([]);

  // fetch user data (email, subdomains with all infos)
  useEffect(() => {
    const fetchData = async () => {
      const result = await Api.getUsersAccount();
      setUserInfo(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (userInfo) {
      const galleryIds = userInfo.subdomains[0].galleries;
      // TODO: reduce instead of var and loop
      let promisContainer = [];
      galleryIds.forEach(galleryId => {
        promisContainer.push(Api.getGalleryById(galleryId));
      });
      Promise.all(promisContainer)
        .then(resolvedPromises => {
          setGalleries(
            resolvedPromises.reduce(
              (accum, val) => (accum.push(val.data.gallery.name), accum),
              []
            )
          );
        })
        .catch(error => console.error(error));
    }
  }, [userInfo]);

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
          <Route path={`${path}/content`}>
            {/* uses the only on subdomain of the user */}
            <Content subdomain={userInfo ? userInfo.subdomains[0] : null} />
          </Route>
          <Route path={`${path}/settings`} component={Settings} />
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;
