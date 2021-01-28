import './App.scss';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { getCurrentUser } from './services/userService';

function App() {
  const user = getCurrentUser();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" render={
            props => {
              if (user) return <Redirect to="/" />;
              return <Landing />
            }
          } />
          <Route exact path="/" render={
            props => {
              if (!user) return <Redirect to="/login" />;
              return <Home />
            }
          } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
