/* import DashboardRouter from "../../navigation/DashboardRouter"; */
import { useState, useEffect } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
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
} from './Styles';

const Dashboard = () => {
  let { path, url } = useRouteMatch();

  const [userInfo, setUserInfo] = useState({
    userEmail: '',
    subdomains: [{ name: '', _id: '', theme: '' }],
  });
  const [subdomainInfo, setSubdomainInfo] = useState();

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

  return (
    <Offset>
      {/* <Router> */}
      <MenuContainer>
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
                <h3></h3>
                <Link>
                  {' '}
                  <h3>Colours</h3>
                </Link>
                <Link>
                  <h3>Typography</h3>
                </Link>
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
                <h3></h3>
                <Link>
                  <h3>Header</h3>
                </Link>
                <Link>
                  <h3>About</h3>
                </Link>
                <Link>
                  <h3>Gallery</h3>
                </Link>
                <Link>
                  <h3>Contact</h3>
                </Link>
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
                <h3></h3>
                <Link>
                  <h3>User Profile</h3>
                </Link>
                <Link>
                  <h3>Security</h3>
                </Link>
              </Dropdown>
            </Route>
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
        <Route path={`${path}/preview`}>
          <Preview
            previewId={userInfo ? userInfo.subdomains[1]._id : null}
            previewName={userInfo ? userInfo.subdomains[1].name : null}
          />
        </Route>
        <Route path={`${path}/design`} component={Design} />
        <Route path={`${path}/content`}>
          {/* uses the only on subdomain of the user */}
          <Content subdomain={subdomainInfo ? subdomainInfo : {}} />
        </Route>
        <Route path={`${path}/galleries/:id/image-upload`} component={Image} />
        <Route path={`${path}/galleries/:id`}>
          <Gallery />
        </Route>
        <Route path={`${path}/settings`} component={Settings} />
      </Switch>
      {/* </Router> */}
    </Offset>
  );
};

export default Dashboard;
