import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Login from './components/Login/index';
import Registration from './components/Registration/index';
import Cockpit from './components/Cockpit/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="registration" component={Registration} />
        <Route path="/cockpit" component={Cockpit} />
      </Switch>
    </div>
  );
}

export default App;
