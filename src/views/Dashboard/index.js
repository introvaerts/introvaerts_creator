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
  //FIXME: fetch gallery names and put into state to show in form
  useEffect(() => {
    if (userInfo) {
      const fetchData = async () => {
        const galleryIds = userInfo.subdomains[0].galleries;
        console.log(galleryIds);
        for (let index = 0; index < galleryIds.length; index++) {
          const galleryId = galleryIds[index];
          console.log(index);
          const result = await Api.getGalleryById(galleryId);
          setGalleries([...galleries, result.data.gallery.name]);
        }
      };
      fetchData();
    }
  }, [userInfo]);

  console.log('galleries: ', galleries);

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
            <Content subdomain={userInfo ? userInfo.subdomains[0] : []} />
          </Route>
          <Route path={`${path}/settings`} component={Settings} />
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;
