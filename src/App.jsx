import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Login from './components/Login/index';
import Registration from './components/Registration/index';
import Cockpit from './components/Cockpit/index';
import Home from './components/Home/index';
import MarketPlace from './components/MarketPlace';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="registration" component={Registration} />
        <Route path="/cockpit" component={Cockpit} />
        <Route path="/home" component={Home} />
        <Route path="/makert-place" component={MarketPlace} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
