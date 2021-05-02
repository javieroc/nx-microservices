import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Register } from './pages';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export { App };
