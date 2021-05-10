import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks';
import { setAuthHeader } from '../utils';

function PrivateRoute({ component: Component, ...rest }): JSX.Element {
  const { auth } = useAuth();
  if (auth.token) {
    setAuthHeader(auth.token);
  }
  return (
    <Route {...rest} render={props => (auth && auth.token ? <Component {...props} /> : <Redirect to="/login" />)} />
  );
}

export { PrivateRoute }
