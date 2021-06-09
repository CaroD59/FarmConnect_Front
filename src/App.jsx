import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/index';
import Home from './components/Cockpit/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
