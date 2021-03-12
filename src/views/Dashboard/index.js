/* import DashboardRouter from "../../navigation/DashboardRouter"; */
import {
  BrowserRouter as Router,
  Link,
  useRouteMatch,
  Switch,
  Route,
} from 'react-router-dom';
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
          <Route path={`${path}/content`} component={Content} />
          <Route path={`${path}/settings`} component={Settings} />
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;
