import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
