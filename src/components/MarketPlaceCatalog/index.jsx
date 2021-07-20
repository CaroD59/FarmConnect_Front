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
      <div className="CataPage">
        <h1 className="titre">Catalogue</h1>
        <div className="AppGallery">
          {generalCatalogue.map((catalogue) => {
            return (
              <div className="AppGallery">
                <Link
                  to={`/${catalogue.id}/${catalogue.name}`}
                  key={catalogue.id}
                >
                  <div className="card" aria-hidden="true">
                    <img
                      src={catalogue.logo}
                      alt="banner"
                      className="imageSize"
                    />
                    <p className="name">{catalogue.name}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </StyledMarketPlaceCatalog>
  );
}
