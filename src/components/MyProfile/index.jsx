import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import User from '../../contexts/User';
import StyledMyProfile from './styles';

function MyProfile() {
  const [infos, setInfos] = useState([]);
  const { user } = useContext(User);
  const [isEdit, setIsEdit] = useState(false);
  // const [setExloitUser] = useState([]);

  useEffect(() => {
    if (user !== null) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/${user.id}`)
        .then(({ data }) => {
          setInfos(data);
        });
    }
  }, []);

  const editMyprofil = () => {
    if (isEdit) {
      axios.put(`${process.env.REACT_APP_API_URL}/users/${user.id}`, infos);
    }
    setIsEdit(!isEdit);
  };
  /*
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/apps`).then(({ data }) => {
      setExloitUser(data);
    });
  }, []);
*/
  return (
    <StyledMyProfile>
      {user ? (
        <>
          <h1 className="welcomeProfil">
            Bienvenue {infos.firstname} {infos.lastname} !
          </h1>
          <div className="myProfile">
            <div className="containers">
              <div className="title">
                <h3 className="cardName">Mes coordonnées</h3>
                <button
                  className="btn-edit"
                  type="button"
                  onClick={editMyprofil}
                >
                  <img
                    src={!isEdit ? '/img/pencilLogo.png' : '/img/saveLogo.png'}
                    alt=""
                    className="img"
                  />
                </button>
              </div>

              <fieldset className="form" disabled={isEdit ? '' : 'disabled'}>
                <ul className="card">
                  <li>
                    <h4>Identifiant / Mail :</h4> <p>{infos.email} </p>
                  </li>

                  <li>
                    <h4>Nom : </h4>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Prénom"
                      onChange={(e) =>
                        setInfos({ ...infos, firstname: e.target.value })
                      }
                      value={infos.firstname}
                      className="RegistrationInput"
                    />
                  </li>
                  <li>
                    <h4>Prenom : </h4>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Nom"
                      onChange={(e) =>
                        setInfos({ ...infos, lastname: e.target.value })
                      }
                      value={infos.lastname}
                      className="RegistrationInput"
                    />
                  </li>
                  <li>
                    <h4>Telephone : </h4>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      placeholder="Téléphone"
                      onChange={(e) =>
                        setInfos({ ...infos, mobile: e.target.value })
                      }
                      value={infos.mobile}
                      className="RegistrationInput"
                    />
                  </li>
                  <li>
                    <h4>Ville : </h4>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Ville"
                      onChange={(e) =>
                        setInfos({ ...infos, city: e.target.value })
                      }
                      value={infos.city}
                      className="RegistrationInput"
                    />
                  </li>
                  <li>
                    <h4>Code Postal : </h4>
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      placeholder="Code postal"
                      onChange={(e) =>
                        setInfos({ ...infos, zipcode: e.target.value })
                      }
                      value={infos.zipcode}
                      className="RegistrationInput"
                    />
                  </li>
                  <li>
                    <h4>Pays : </h4>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Pays"
                      onChange={(e) =>
                        setInfos({ ...infos, country: e.target.value })
                      }
                      value={infos.country}
                      className="RegistrationInput"
                    />
                  </li>
                </ul>
              </fieldset>
            </div>
            <div className="containers">
              <div className="title">
                <h3 className="cardName">MES EXPLOITATIONS</h3>
              </div>
              <div className="addExploit">
                <Link to="/addExploitation" className="buttonaddExploit">
                  ajouter exploitation
                </Link>
              </div>
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
                    className="img"
                  />
                </div>
                <div className="pic">
                  <img
                    src="https://static.vecteezy.com/ti/vecteur-libre/p1/2136060-feuille-logo-bio-label-eco-icon-vector-isolated-background-gratuit-vectoriel.jpg"
                    alt=""
                    className="img"
                  />
                </div>
                <div className="pic">
                  <img
                    src="https://us.123rf.com/450wm/dstarky/dstarky1702/dstarky170200652/71441287-icône-de-vache-ou-d-un-logo-dans-le-style-de-ligne-moderne-haute-qualité-contour-noir-pictogramme-pour.jpg?ver=6"
                    alt=""
                    className="img"
                  />
                </div>
              </div>
            </div>
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
    </StyledMyProfile>
  );
}

export default MyProfile;
