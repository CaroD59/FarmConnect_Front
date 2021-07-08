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
    history.push(`/home/${user.id}`);
  };
  return (
    <StyledMyProfile>
      <div className="home">
        <h1 className="helloUser"> Bonjour {infos.firstname} ! </h1>
        <h2 className="welcomeProfil">Bienvenue sur votre profil.</h2>
        <div className="profil">
          <div className="infos">
            <div className="containers">
              <div className="title">
                <h3 className="cardName">Mes coordonnées</h3>
                <img
                  className="editor"
                  src="http://www.rhodo.ch/storage/app/media/inscription_picto.png"
                  alt="editor"
                />
              </div>
              <ul className="card">
                <li>
                  <h4>Nom :</h4> <p> {infos.firstname} </p>
                </li>
                <li>
                  <h4>Prenom :</h4> <p> {infos.lastname} </p>
                </li>
                <li>
                  <h4>Telephone :</h4> <p> {infos.mobile} </p>
                </li>
                <li>
                  <h4>Mail :</h4> <p> {infos.email} </p>
                </li>
                <li>
                  <h4>Ville :</h4> <p> {infos.city} </p>
                </li>
                <li>
                  <h4>Code Postal :</h4> <p> {infos.zipcode} </p>
                </li>
                <li>
                  <h4>Pays :</h4> <p> {infos.country} </p>
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
                <img
                  className="editor"
                  src="http://www.rhodo.ch/storage/app/media/inscription_picto.png"
                  alt="editor"
                />
              </div>
              <ul className="card">
                <li>
                  <h4>Forme juridique :</h4>
                  <p>Lorem Ipsum is simply dummy text</p>
                </li>
                <li>
                  <h4>Forme juridique :</h4>
                  <p>Lorem Ipsum is simply dummy text</p>
                </li>
                <li>
                  <h4>Forme juridique :</h4>
                  <p>Lorem Ipsum is simply dummy text</p>
                </li>
                <li>
                  <h4>Forme juridique :</h4>
                  <p>Lorem Ipsum is simply dummy text</p>
                </li>
                <li>
                  <h4>Forme juridique :</h4>
                  <p>Lorem Ipsum is simply dummy text</p>
                </li>
              </ul>
            </div>
            <div className="containers">
              <div className="title">
                <h3 className="cardName">Mes activités</h3>
                <img
                  className="editor"
                  src="http://www.rhodo.ch/storage/app/media/inscription_picto.png"
                  alt="editor"
                />
              </div>
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
                <h4>Qté :</h4> <em> 12 </em>
              </li>
              <li>
                <h4>Are :</h4> <em> 100 ha </em>
              </li>
              <li>
                <h4>Periode :</h4> <em> Ebourgeonnade </em>
              </li>
            </ul>
          </div>
          <div className="parcelleMap">
            <p>Ici arrivera la carte de la parcelle de l&apos;exploitant.</p>
          </div>
        </div>
      </div>
    </StyledMyProfile>
  );
}

export default MyProfile;
