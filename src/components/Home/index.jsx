import StyledHome from './styles';

function Home() {
  return (
    <StyledHome>
      <div className="home">
        <h1 className="helloUser"> Bonjour Jean Claude ! </h1>
        <h2 className="welcomeProfil">Bienvenue sur votre profil.</h2>
        <div className="profil">
          <div className="infos">
            <div className="containers">
              <h3 className="cardName">Mes coordonnées</h3>
              <ul className="card">
                <li>
                  Nom : <p> Claude </p>
                </li>
                <li>
                  Prénom : <p> Jean </p>
                </li>
                <li>
                  Téléphone : <p> 06 89 67 45 67 </p>
                </li>
                <li>
                  Mail : <p> contact@champagne-toto.fr </p>
                </li>
                <li>
                  Adresse : <p> 212 rue du bourg </p>
                </li>
                <li>
                  Code Postal : <p> 57890 </p>
                </li>
                <li>
                  Ville : <p> Roubaix </p>
                </li>
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
              <div className="picto">
                <div className="pic">
                  <img
                    src="https://img.icons8.com/cotton/452/grape.png"
                    alt=""
                    style={{
                      width: '60px',
                      height: '60px',
                    }}
                  />
                </div>
                <div className="pic">
                  <img
                    src="https://static.vecteezy.com/ti/vecteur-libre/p1/2136060-feuille-logo-bio-label-eco-icon-vector-isolated-background-gratuit-vectoriel.jpg"
                    alt=""
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '100%',
                    }}
                  />
                </div>
                <div className="pic">
                  <img
                    src="https://us.123rf.com/450wm/dstarky/dstarky1702/dstarky170200652/71441287-icône-de-vache-ou-d-un-logo-dans-le-style-de-ligne-moderne-haute-qualité-contour-noir-pictogramme-pour.jpg?ver=6"
                    alt=""
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '100%',
                    }}
                  />
                </div>
              </div>
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
