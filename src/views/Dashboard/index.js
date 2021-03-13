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
//global token
import { useTokenContext } from '../../shared/utils/context';

//components
import Design from './Design';
import Content from './Content';
import Settings from './Settings';
import Signout from '../../components/Signout';
import Logo from '../../components/Logo';
// import Menu from '../../components/Menu';

import {
  MenuContainer,
  MenuItem,
  Dropdown,
  SignOutBlock,
  LoggedInUser,
  MenuBox,
} from './Styles';

const Dashboard = () => {
  let { path, url } = useRouteMatch();

  const [userInfo, setUserInfo] = useState({
    userEmail: '',
    subdomains: [{ name: '', _id: '', theme: '' }],
  });

  // fetch user data (email, subdomains with all infos)
  useEffect(() => {
    const fetchData = async () => {
      let subdomains = [];
      const result = await Api.getUsersAccount();
      result.data.subdomains.forEach(subdomain => {
        subdomains.push({
          name: subdomain.name,
          _id: subdomain._id,
          theme: subdomain.theme,
        });
      });
      setUserInfo({
        ...userInfo,
        userEmail: result.data.userEmail,
        subdomains: subdomains,
      });
    };
    fetchData();
  }, []);

  if (userInfo) {
    userInfo.subdomains.forEach((subdomain, i) => {
      console.log('subdomain ' + i + ': ', subdomain._id);
    });
  }

  // fetch subdomain by its Id
  useEffect(() => {
    if (userInfo) {
      const fetchData = async () => {
        const result = await Api.getSubdomainById(userInfo.subdomains[0]._id);
        console.log('SubdomainById: ', result.data);
      };
      fetchData();
    }
  }, [userInfo]);

  //global logout
  const { token } = useTokenContext();
  const logOutButton = () => {
    if (token) {
      return <Signout />;
    }
  };

  return (
    <div>
      <Router>
        <MenuContainer>
          <MenuBox>
            <Logo />
            <MenuItem>
              <Link to={`${url}/design`}>
                <h3>Design</h3>
              </Link>
              {/* <Dropdown>
                <h3>Colours</h3>
                <h3>Typography</h3>
              </Dropdown> */}
            </MenuItem>
            <MenuItem>
              <Link to={`${url}/content`}>
                <h3>Content</h3>
              </Link>
              {/* <Dropdown>
                <h3>Header</h3>
                <h3>About</h3>
                <h3>Gallery</h3>
                <h3>Contact</h3>
              </Dropdown> */}
            </MenuItem>
            <MenuItem>
              <Link to={`${url}/settings`}>
                <h3>Settings</h3>
              </Link>
            </MenuItem>
          </MenuBox>
          <SignOutBlock>
            {logOutButton()}
            <LoggedInUser>Welcome [username] !</LoggedInUser>
          </SignOutBlock>
        </MenuContainer>

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
