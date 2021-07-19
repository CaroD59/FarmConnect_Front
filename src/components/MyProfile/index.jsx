import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import User from '../../contexts/User';
import StyledMyProfile from './styles';

function MyProfile() {
  const [infos, setInfos] = useState([]);
  const { user } = useContext(User);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${user.id}`)
      .then(({ data }) => {
        setInfos(data);
      });
  }, []);
  const submitHandler = () => {
    history.push(`/updateprofile`);
  };
  return (
    <StyledMyProfile>
      <div className="myProfile">
        <h1 className="welcomeProfil">
          Bienvenue {infos.firstname} {infos.lastname} !
        </h1>
        <div className="infos">
          <div className="containers">
            <h3 className="cardName">Mon exploitation</h3>
            <p className="cardExploitation">Bientôt disponible</p>
          </div>
          <div className="containers">
            <h3 className="cardName">Mes coordonnées</h3>
            <form className="card">
              <label htmlFor="firstname">
                <span className="content-name"> Nom : </span>
                <input type="text" name="firstname" id="Name" required />
              </label>
              <label htmlFor="lastname">
                <span className="content-name"> Prenom : </span>
                <input type="text" name="lastname" id="Name" required />
              </label>
              <label htmlFor="phone">
                <span className="content-name"> Telephone :</span>
                <input type="text" name="phone" id="Name" required />
              </label>
              <label htmlFor="mail">
                <span className="content-name"> Mail :</span>
                <input type="text" name="mail" id="Name" required />
              </label>
              <label htmlFor="city">
                <span className="content-name"> Ville :</span>
                <input type="text" name="city" id="Name" required />
              </label>
              <label htmlFor="code">
                <span className="content-name"> Code Postal :</span>
                <input type="text" name="code" id="Name" required />
              </label>
              <label htmlFor="country">
                <span className="content-name"> Pays :</span>
                <input type="text" name="country" id="Name" required />
              </label>
            </form>
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
            <h3 className="cardName">Mes activités</h3>
            <div className="picto">
              <img src="https://img.icons8.com/cotton/452/grape.png" alt="" />

              <img
                src="https://static.vecteezy.com/ti/vecteur-libre/p1/2136060-feuille-logo-bio-label-eco-icon-vector-isolated-background-gratuit-vectoriel.jpg"
                alt=""
              />

              <img
                src="https://us.123rf.com/450wm/dstarky/dstarky1702/dstarky170200652/71441287-icône-de-vache-ou-d-un-logo-dans-le-style-de-ligne-moderne-haute-qualité-contour-noir-pictogramme-pour.jpg?ver=6"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </StyledMyProfile>
  );
}

export default MyProfile;
