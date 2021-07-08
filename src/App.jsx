import dotenv from 'dotenv';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import User from './contexts/User';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Login from './components/Login/index';
import Registration from './components/Registration/index';
import MyProfile from './components/MyProfile/index';
import Cockpit from './components/Cockpit/index';
import MyApps from './components/MyApps/index';
import MarketPlace from './components/MarketPlace';
import Contact from './components/Contact';
import ApplicationPage from './components/ApplicationPage';
import './reset.css';

dotenv.config();

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <User.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/cockpit" component={Cockpit} />
          <Route path="/myprofile" component={MyProfile} />
          <Route path="/myapps" component={MyApps} />
          <Route exact path="/apps" component={MarketPlace} />
          <Route path="/contact" component={Contact} />
          <Route path="/apps/:id" component={ApplicationPage} />
        </Switch>
        <Footer />
      </User.Provider>
    </div>
  );
}

export default App;
