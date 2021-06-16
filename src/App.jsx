import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Login from './components/Login/index';
import Registration from './components/Registration/index';
import Home from './components/Home/index';
import MyApps from './components/MyApps/index';
import MarketPlace from './components/MarketPlace';
import Contact from './components/Contact';
import './reset.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/myapps" component={MyApps} />
        <Route path="/marketplace" component={MarketPlace} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
