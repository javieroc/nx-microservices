import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Provider, Register } from './pages';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path={['/login', '/']} component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/provider" component={Provider} />
      </Switch>
    </Router>
  );
}

export { App };
