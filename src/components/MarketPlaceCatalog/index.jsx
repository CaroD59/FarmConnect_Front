import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StyledMarketPlaceCatalog from './styles';

export default function GeneralCatalogue() {
  const [generalCatalogue, setGeneralCatalogue] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/apps`).then(({ data }) => {
      setGeneralCatalogue(data);
    });
  }, []);
  return (
    <StyledMarketPlaceCatalog>
      <h1 className="titre">Catalogue</h1>
      <div className="AppGallery">
        {generalCatalogue.map((catalogue) => {
          return (
            <Link to={`/${catalogue.id}/${catalogue.name}`}>
              <div className="card" aria-hidden="true" key={catalogue.id}>
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
            </Link>
          );
        })}
      </div>
    </StyledMarketPlaceCatalog>
  );
}
