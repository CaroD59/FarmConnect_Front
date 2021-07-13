import dotenv from 'dotenv';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import User from './contexts/User';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Login from './components/Login/index';
import Registration from './components/Registration/index';
import MyProfile from './components/MyProfile/index';
import UpdateProfile from './components/UpdateProfile/index';
import Cockpit from './components/Cockpit/index';
import MyApps from './components/MyApps/index';
import MarketPlace from './components/MarketPlace';
import Contact from './components/Contact';
import ApplicationPage from './components/ApplicationPage';
import ConditionsOfUse from './components/ConditionsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutUs from './components/AboutUs';
import SpeakingAboutUs from './components/SpeakingAboutUs';
import LegalNotice from './components/LegalNotice';
import StyledApp from './styles';
import './reset.css';

dotenv.config();

function App() {
  const [user, setUser] = useState(null);

  return (
    <StyledApp>
      <div className="App">
        <User.Provider value={{ user, setUser }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/cockpit" component={Cockpit} />
            <Route path="/myprofile/:id" component={MyProfile} />
            <Route path="/myapps" component={MyApps} />
            <Route exact path="/apps" component={MarketPlace} />
            <Route path="/contact" component={Contact} />
            <Route path="/apps/:id" component={ApplicationPage} />
            <Route path="/conditionsofuse" component={ConditionsOfUse} />
            <Route path="/privacypolicy" component={PrivacyPolicy} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/speakingaboutus" component={SpeakingAboutUs} />
            <Route path="/legalnotice" component={LegalNotice} />
            <Route path="/updateprofile" component={UpdateProfile} />
          </Switch>
          <Footer />
        </User.Provider>
      </div>
    </StyledApp>
  );
}

export default App;
