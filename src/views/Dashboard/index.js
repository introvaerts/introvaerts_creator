/* import DashboardRouter from "../../navigation/DashboardRouter"; */
import { useState, useEffect } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// api
import Api from '../../shared/utils/api';
//global token
import { useTokenContext } from '../../shared/utils/context';

//components
import Preview from './Preview';
import Design from './Design';
import Content from './Content';
import Settings from './Settings';
import Signout from '../../components/Signout';
import Logo from '../../components/Logo';
import Gallery from './Gallery';
import Image from './Image/index';
// import Menu from '../../components/Menu';

import {
  MenuContainer,
  MenuItem,
  SignOutBlock,
  LoggedInUser,
  LinkBox,
  MenuBox,
  Dropdown,
  StyledLink,
  Offset,
  Visit,
} from './Styles';

const Dashboard = () => {
  let { path, url } = useRouteMatch();

  const [userInfo, setUserInfo] = useState({
    userEmail: '',
    subdomains: [{ name: '', _id: '', theme: '' }],
  });
  const [subdomainInfo, setSubdomainInfo] = useState();
  const [appRefresh, setAppRefresh] = useState(Date.now());

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
  }, [appRefresh]);

  // fetch PREVIEW subdomain by its Id
  useEffect(() => {
    if (userInfo && userInfo.subdomains[1]) {
      const fetchData = async () => {
        // NOTE: uses first subdomain of the Array
        const result = await Api.getSubdomainById(userInfo.subdomains[1]._id);
        setSubdomainInfo(result.data);
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

  const refreshApp = time => {
    setAppRefresh(time);
  };

  return (
    <Offset>
      {/* <Router> */}

      <MenuContainer>
        {/* <Headroom> */}
        <MenuBox>
          <Logo />
          <MenuItem>
            <LinkBox>
              <StyledLink to={`${url}/preview`}>
                <h3>Preview</h3>
              </StyledLink>
            </LinkBox>
          </MenuItem>
          <MenuItem>
            <LinkBox>
              <StyledLink to={`${url}/design`}>
                <h3>Design</h3>
              </StyledLink>
            </LinkBox>
            <Route path={`${url}/design`}>
              <Dropdown>
                <h3> </h3>
                <HashLink smooth to="/dashboard/design#colours">
                  {' '}
                  <h3>Colours</h3>
                </HashLink>
                <HashLink smooth to="/dashboard/design#typography">
                  <h3>Typography</h3>
                </HashLink>
              </Dropdown>
            </Route>
          </MenuItem>
          <MenuItem>
            <LinkBox>
              <StyledLink to={`${url}/content`}>
                <h3>Content</h3>
              </StyledLink>
            </LinkBox>
            <Route path={`${url}/content`}>
              <Dropdown>
                <h3> </h3>
                {/* <HashLink smooth to="/dashboard/content#header">
                  <h3>Header</h3>
                </HashLink> */}
                <HashLink smooth to="/dashboard/content#header">
                  <h3>About</h3>
                </HashLink>
                <HashLink smooth to="/dashboard/content#about">
                  <h3>Gallery</h3>
                </HashLink>
                <HashLink smooth to="/dashboard/content#gallery">
                  <h3>Contact</h3>
                </HashLink>
              </Dropdown>
            </Route>
          </MenuItem>
          <MenuItem>
            <LinkBox>
              <StyledLink to={`${url}/settings`}>
                <h3>Settings</h3>
              </StyledLink>
            </LinkBox>
            <Route path={`${url}/settings`}>
              <Dropdown>
                <h3> </h3>
                <HashLink smooth to="/dashboard/settings#userEmail">
                  <h3>User Profile</h3>
                </HashLink>
                <HashLink smooth to="/dashboard/settings#userPassword">
                  <h3>Security</h3>
                </HashLink>
              </Dropdown>
            </Route>
          </MenuItem>
        </MenuBox>
        <SignOutBlock>
          {logOutButton()}
          <LoggedInUser>
            <Visit
              href={`https://${userInfo.subdomains[0].name}.introvaerts.com`}
              target="_blank"
            >
              Visit your site
            </Visit>
          </LoggedInUser>
        </SignOutBlock>
        {/* </Headroom> */}
      </MenuContainer>

      {/* <DashboardRouter /> */}
      <Switch>
        <Route exact path={path} />
        <Route path={`${path}/preview`}>
          <Preview
            previewId={subdomainInfo ? subdomainInfo.subdomain._id : null}
            publishedId={
              userInfo.subdomains ? userInfo.subdomains[0]._id : null
            }
            refreshApp={refreshApp}
          />
        </Route>
        <Route path={`${path}/design`} component={Design} />
        <Route path={`${path}/content`}>
          {/* uses the only on subdomain of the user */}
          <Content
            subdomain={subdomainInfo ? subdomainInfo : {}}
            publishedSubdomainName={
              userInfo.subdomains ? userInfo.subdomains[0].name : null
            }
          />
        </Route>
        <Route path={`${path}/settings`}>
          <Settings userEmail={userInfo ? userInfo.userEmail : null} />
        </Route>
        <Route path={`${path}/galleries/:id/image-upload`} component={Image} />
        <Route path={`${path}/galleries/:id`}>
          <Gallery />
        </Route>
      </Switch>
      {/* </Router> */}
    </Offset>
  );
};

export default Dashboard;
