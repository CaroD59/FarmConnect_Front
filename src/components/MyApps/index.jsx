import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import StyledMarketPlaceCatalog from '../MarketPlaceCatalog/styles';
import User from '../../contexts/User';

function MyApps() {
  const [myApps, setMyApps] = useState([]);
  const { user } = useContext(User);
  const history = useHistory();
  console.log(user);

  useEffect(() => {
    axios.get(`http://localhost:5051/appfav/${user.id}`).then(({ data }) => {
      setMyApps(data);
    });
  }, []);

  console.log(myApps);
  return (
    <StyledMarketPlaceCatalog>
      <h1 className="titre">Mes applications</h1>
      <div className="AppGallery">
        {myApps.map((catalogue) => {
          return (
            <>
              <div
                className="card"
                onClick={(e) => {
                  e.preventDefault();
                  history.push(`/apps/${catalogue.id}`);
                }}
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
            </>
          );
        })}
      </div>
    </StyledMarketPlaceCatalog>
  );
}

export default MyApps;
