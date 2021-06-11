import Header from '../Header/index';
import MainPage from '../MainPage/index';
import Footer from '../Footer/index';
import MarketPlaceReco from '../MarketPlaceReco/index';
import MarketPlaceCatalog from '../MarketPlaceCatalog/index';

function Cockpit() {
  return (
    <div className="Cockpit">
      <Header />
      <MainPage />
      <Footer />
      <MarketPlaceReco />
      <MarketPlaceCatalog />
    </div>
  );
}
export default Cockpit;
