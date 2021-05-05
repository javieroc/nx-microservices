import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks';

function PrivateRoute({ component: Component, ...rest }): JSX.Element {
  const { auth } = useAuth();
  return (
    <Route {...rest} render={props => (auth && auth.token ? <Component {...props} /> : <Redirect to="/login" />)} />
  );
}

export { PrivateRoute }
