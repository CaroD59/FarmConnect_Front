import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import StyledMarketPlaceReco from './styles';

function MarketPlaceReco() {
  const [appli, setAppli] = useState([]);
  const id = useParams();
  const history = useHistory();
  const appHandler = (e) => {
    e.preventDefault();
    history.push(`/app/${id}`);
  };

  useEffect(() => {
    axios.get('http://localhost:5050/apps').then(({ data }) => {
      setAppli(data);
    });
  }, []);

  return (
    <div onClick={appHandler} onKeyDown={appHandler} aria-hidden="true">
      <StyledMarketPlaceReco>
        <h1 className="titre">Recommandations</h1>
        <div className="AppGallery">
          {appli.slice(0, 3).map((app) => {
            return (
              <div className="card" key={app.id}>
                <div className="image">
                  <img src={app.banner} alt="banner" className="imageSize" />
                </div>
                <div className="infos">
                  <div className="societe">
                    <p className="name">{app.name}</p>
                    <p className="activite">{app.provider_app}</p>
                  </div>
                  <div className="button">Infos</div>
                </div>
              </div>
            );
          })}
        </div>
      </StyledMarketPlaceReco>
    </div>
  );
}

export default MarketPlaceReco;
