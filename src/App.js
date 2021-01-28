import './App.scss';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Landing} />
          <Route exact path="" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
