import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components';
import { Consumer, Forbidden, Login, Provider, Register } from './pages';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path={['/login', '/']} component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/provider" component={Provider} />
        <PrivateRoute exact path="/consumer" component={Consumer} />
        <Route exact path="/forbidden" component={Forbidden} />
      </Switch>
    </Router>
  );
}

export { App };
