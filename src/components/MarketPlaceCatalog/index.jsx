import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StyledMarketPlaceCatalog from './styles';

export default function GeneralCatalogue() {
  const [generalCatalogue, setGeneralCatalogue] = useState([]);
  const id = useParams();
  const history = useHistory();
  const appHandler = (e) => {
    e.preventDefault();
    history.push(`/apps/${id}`);
  };
  useEffect(() => {
    axios.get('http://localhost:5050/apps').then(({ data }) => {
      setGeneralCatalogue(data);
    });
  }, []);
  return (
    <div>
      <StyledMarketPlaceCatalog>
        <h1 className="titre">Catalogue</h1>
        <div className="AppGallery">
          {generalCatalogue.map((catalogue) => {
            return (
              <div
                className="card"
                onClick={appHandler}
                onKeyDown={appHandler}
                aria-hidden="true"
                key={catalogue.id}
              >
                <div className="image">
                  <img
                    src={catalogue.banner}
                    alt="banner"
                    className="imageSize"
                  />
                </div>
                <div className="infos">
                  <div className="societe">
                    <p className="name">{catalogue.name}</p>
                    <p className="activite">{catalogue.provider_app}</p>
                  </div>
                  <div className="button">Infos</div>
                </div>
              </div>
            );
          })}
        </div>
      </StyledMarketPlaceCatalog>
    </div>
  );
}
