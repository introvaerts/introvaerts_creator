import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Design from '../views/Dashboard/Design/';
import Content from '../views/Dashboard/Content/';
import Settings from '../views/Dashboard/Settings/';
import Gallery from '../views/Dashboard/Gallery/';
import Image from '../views/Dashboard/Image/';

const DashboardRouter = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/design`} component={Design} />
      <Route path={`${path}/content`} component={Content} />
      <Route path={`${path}/settings`} component={Settings} />
      <Route path={`${path}/galleries/:name`} component={Gallery} />
      <Route path={`${path}/galleries/:name/image-upload`} component={Image} />
      <Route exact path={path} />
    </Switch>
  );
};

export default DashboardRouter;
