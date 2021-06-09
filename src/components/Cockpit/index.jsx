import { Switch } from 'react-router-dom';
import Header from '../Header/index';
import Footer from '../Footer/index';
import Home from '../Home/index';
import MyApps from '../MyApps/index';
import MarketPlace from '../MarketPlace/index';
import Contact from '../Contact/index';
import StyledCockpit from './styles';

function Cockpit() {
  return (
    <StyledCockpit>
      <div className="Cockpit">
        <Header />
        <Switch>
          <Home />
          <MyApps />
          <MarketPlace />
          <Contact />
        </Switch>
        <Footer />
      </div>
    </StyledCockpit>
  );
}
export default Cockpit;
