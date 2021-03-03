import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

const RouterConfig = {
  main: () => (
      <Switch>
        <Redirect exact from="/" to="/signin" />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
  ),
  dashboard: () => {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch();
    return(
    <Switch>
      <Route exact path={path} />
      <Route path={`${path}/design`} component={Design} />
      <Route path={`${path}/content`} component={Content} />
      <Route path={`${path}/settings`} component={Settings} />
  </Switch>
  )}
};

export default RouterConfig;