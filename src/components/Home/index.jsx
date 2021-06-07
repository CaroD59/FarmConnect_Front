import StyledHome from './styles';

function Home() {
  return (
    <StyledHome>
      <div className="profil">
        <h1> Bonjour Utilisateur </h1>
        <div className="infos">
          <div className="containers">
            <h3>Mes coordonnées</h3>
            <ul className="coordonnées">
              <li className="coordonnées">
                <img
                  className="coordonnées"
                  src="http://simpleicon.com/wp-content/uploads/pencil.png"
                  alt="pen"
                />
                06 89 67 45 67
              </li>
              <li className="coordonnées">
                <img
                  className="coordonnées"
                  src="http://simpleicon.com/wp-content/uploads/pencil.png"
                  alt="pen"
                />
                contact@champagne-toto.fr
              </li>
              <li className="coordonnées">
                <img
                  className="coordonnées"
                  src="http://simpleicon.com/wp-content/uploads/pencil.png"
                  alt="pen"
                />
                212 rue du bourg 57890 Roubaix
              </li>
            </ul>
          </div>
          <div className="containers">
            <h3>Mon explotation</h3>
            <ul className="content">
              <li>
                Forme juridique <p> Loredum lupson </p>
              </li>
              <li>
                Numero sirene <p> Loredum lupson</p>
              </li>
              <li>
                Numero Siret <p> Loredum lupson </p>
              </li>
              <li>
                Numero TVA <p> Loredum lupson </p>
              </li>
              <li>
                Numero RCS <p> Loredum lupson </p>
              </li>
            </ul>
          </div>
          <div className="containers">
            <h3>Mes activités </h3>
            <p> O O O</p>
          </div>
        </div>
      </div>
      <div className="parcelle">
        <div className="infos-parcelle">
          <h3> Parcelle </h3>
          <ul className="parcelle">
            <li>
              Qte <em> 12 </em>
            </li>
            <li>
              Are <em> 100 ha </em>
            </li>
            <li>
              Periode <em> Ebourgeonnade </em>
            </li>
          </ul>
        </div>
        <div className="map" style={{ width: '700px', height: '300px' }}>
          p
        </div>
      </div>
    </StyledHome>
  );
}

export default Home;
