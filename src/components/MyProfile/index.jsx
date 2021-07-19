import { useContext, useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import User from '../../contexts/User';
import StyledMyProfile from './styles';

function MyProfile() {
  const [infos, setInfos] = useState([]);
  const { user } = useContext(User);
  const history = useHistory();

  useEffect(() => {
    if (user !== null) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/${user.id}`)
        .then(({ data }) => {
          setInfos(data);
        });
    }
  }, []);
  const submitHandler = () => {
    history.push(`/updateprofile`);
  };
  return (
    <StyledMyProfile>
      {user ? (
        <div className="myProfile">
          <h1 className="welcomeProfil">
            Bienvenue {infos.firstname} {infos.lastname} !
          </h1>
          <div className="profil">
            <div className="infos">
              <div className="containers">
                <div className="title">
                  <h3 className="cardName">Mes coordonnées</h3>
                </div>
                <ul className="card">
                  <li>
                    <h4>Nom : </h4> <p> {infos.firstname} </p>
                  </li>
                  <li>
                    <h4>Prenom : </h4> <p> {infos.lastname} </p>
                  </li>
                  <li>
                    <h4>Telephone : </h4> <p> {infos.mobile} </p>
                  </li>
                  <li>
                    <h4>Mail : </h4> <p> {infos.email} </p>
                  </li>
                  <li>
                    <h4>Ville : </h4> <p> {infos.city} </p>
                  </li>
                  <li>
                    <h4>Code Postal : </h4> <p> {infos.zipcode} </p>
                  </li>
                  <li>
                    <h4>Pays : </h4> <p> {infos.country} </p>
                  </li>
                </ul>
                {(!infos.country ||
                  !infos.zipcode ||
                  !infos.city ||
                  !infos.mobile) && (
                  <form onSubmit={submitHandler}>
                    <input
                      type="submit"
                      value="Compléter mon profil"
                      className="buttonLogin"
                    />
                  </form>
                )}
              </div>
              <div className="containers">
                <div className="title">
                  <h3 className="cardName">Mon exploitation</h3>
                </div>
                <p className="cardExploitation">Bientôt disponible</p>
              </div>
              <div className="containers">
                <div className="title">
                  <h3 className="cardName">Mes activités</h3>
                </div>
                <div className="picto">
                  <div className="pic">
                    <img
                      src="https://img.icons8.com/cotton/452/grape.png"
                      alt=""
                    />
                  </div>
                  <div className="pic">
                    <img
                      src="https://static.vecteezy.com/ti/vecteur-libre/p1/2136060-feuille-logo-bio-label-eco-icon-vector-isolated-background-gratuit-vectoriel.jpg"
                      alt=""
                    />
                  </div>
                  <div className="pic">
                    <img
                      src="https://us.123rf.com/450wm/dstarky/dstarky1702/dstarky170200652/71441287-icône-de-vache-ou-d-un-logo-dans-le-style-de-ligne-moderne-haute-qualité-contour-noir-pictogramme-pour.jpg?ver=6"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </StyledMyProfile>
  );
}

export default MyProfile;
