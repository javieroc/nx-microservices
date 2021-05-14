import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './components';
import { Consumer, Forbidden, Login, Provider, Register } from './pages';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path={['/login', '/']} component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/provider/:adminPage" component={Provider} />
        <Route exact path="/provider">
          <Redirect to="/provider/categories" />
        </Route>
        <PrivateRoute exact path="/consumer" component={Consumer} />
        <Route exact path="/forbidden" component={Forbidden} />
      </Switch>
    </Router>
  );
}

export { App };
