import { Redirect, Route } from 'react-router-dom';
import { useTokenContext } from '../shared/utils/context.js';

function PrivateRoute({ children, ...rest }) {
  //getting token from context
  const { token } = useTokenContext();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem('accessToken') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
