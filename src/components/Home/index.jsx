import StyledHome from './styles';

function Home() {
  return (
    <StyledHome>
      <div className="home">
        <div className="profil">
          <h1 className="helloUser"> Bonjour Jean Claude ! </h1>
          <h2 className="welcomeProfil">Bienvenue sur votre profil.</h2>
          <div className="infos">
            <div className="containers">
              <h3 className="cardName">Mes coordonnées</h3>
              <ul className="card">
                <li>Nom : Claude</li>
                <li>Prénom : Jean</li>
                <li>Téléphone : 06 89 67 45 67</li>
                <li>Mail : contact@champagne-toto.fr</li>
                <li>Adresse : 212 rue du bourg</li>
                <li>Code Postal : 57890</li>
                <li>Ville : Roubaix</li>
              </ul>
            </div>
            <div className="containers">
              <h3 className="cardName">Mon exploitation</h3>
              <ul className="card">
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
              <h3 className="cardName">Mes activités </h3>
              <p> O O O</p>
            </div>
          </div>
        </div>
        <div className="parcelle">
          <div className="infos-parcelle">
            <h3> Parcelle </h3>
            <ul>
              <li>
                Qté <em> 12 </em>
              </li>
              <li>
                Are <em> 100 ha </em>
              </li>
              <li>
                Periode <em> Ebourgeonnade </em>
              </li>
            </ul>
          </div>
          <div className="parcelleMap">
            <p>Ici arrivera la carte de la parcelle de l&apos;exploitant.</p>
          </div>
        </div>
      </div>
    </StyledHome>
  );
}

export default Home;
