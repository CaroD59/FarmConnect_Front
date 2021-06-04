// import { useState, useEffect } from 'react';
import StyledMarketPlaceCatalog from './styles';

function MarketPlaceCatalog() {
  return (
    <div>
      <StyledMarketPlaceCatalog>
        <h1 className="titre">Catalogue</h1>
        <div className="AppGallery">
          <div className="card">
            <div className="image">
              <img src="decitrait.png" alt="decitrait" className="imageSize" />
            </div>
            <div className="infos">
              <div className="societe">
                <p className="name">DeciTrait IFV</p>
                <p className="activite">OAD</p>
              </div>
              <div className="button">Infos</div>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src="chouette.png" alt="chouette" className="imageSize" />
            </div>
            <div className="infos">
              <div className="societe">
                <p className="name">Chouette</p>
                <p className="activite">Suivi des cultures</p>
              </div>
              <div className="button">Infos</div>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src="epicure.png" alt="epicure" className="imageSize" />
            </div>
            <div className="infos">
              <div className="societe">
                <p className="name">Epicure IFV</p>
                <p className="activite">OAD</p>
              </div>
              <div className="button">Infos</div>
            </div>
          </div>
        </div>
      </StyledMarketPlaceCatalog>
    </div>
  );
}

export default MarketPlaceCatalog;
