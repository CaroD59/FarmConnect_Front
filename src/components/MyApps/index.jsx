import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import StyledMarketPlaceCatalog from '../MarketPlaceCatalog/styles';
import User from '../../contexts/User';

function MyApps() {
  const [myApps, setMyApps] = useState([]);
  const { user } = useContext(User);
  if (user !== null) {
    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/appfav/${user.id}`)
        .then(({ data }) => {
          setMyApps(data);
        });
    }, []);
  }

  return (
    <StyledMarketPlaceCatalog>
      {user ? (
        <>
          <h1 className="titre">Mes applications</h1>
          <div className="AppGallery">
            {myApps.map((catalogue) => {
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
        </>
      ) : (
        <div className="userOff">
          <div className="withoutUser">
            <h2 className="titleProfile">Vous n&apos;êtes pas connecté</h2>
            <Link to="/" className="buttonProfil">
              se connecter
            </Link>
          </div>
        </div>
      )}
    </StyledMarketPlaceCatalog>
  );
}

export default MyApps;
