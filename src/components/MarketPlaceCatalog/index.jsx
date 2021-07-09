import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StyledMarketPlaceCatalog from './styles';

export default function GeneralCatalogue() {
  const [generalCatalogue, setGeneralCatalogue] = useState([]);
  const history = useHistory();
  const appHandler = (id) => {
    history.push(`/apps/${id}`);
  };
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/apps`).then(({ data }) => {
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
                onClick={() => {
                  appHandler(catalogue.id);
                }}
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
