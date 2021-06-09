import { Switch } from 'react-router-dom';
import Home from '../Home/index';
import MyApps from '../MyApps/index';
import MarketPlace from '../MarketPlace/index';
import Contact from '../Contact/index';
import StyledCockpit from './styles';

function Cockpit() {
  return (
    <StyledCockpit>
      <Switch>
        <Home />
        <MyApps />
        <MarketPlace />
        <Contact />
      </Switch>
    </StyledCockpit>
  );
}
export default Cockpit;
