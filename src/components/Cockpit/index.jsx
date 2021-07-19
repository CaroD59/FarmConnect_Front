import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import StyledCockpit from './styles';
import User from '../../contexts/User';

function Cockpit() {
  const [completed, setCompleted] = useState(true);
  const { user } = useContext(User);
  const [myApps, setMyApps] = useState([]);

  useEffect(() => {
    if (user !== null) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/${user.id}`)
        .then(({ data }) => {
          if (!data.country || !data.zipcode || !data.city || !data.mobile)
            setCompleted(false);
        });
      axios
        .get(`${process.env.REACT_APP_API_URL}/appfav/${user.id}`)
        .then(({ data }) => {
          setMyApps(data);
        });
    }
  }, []);

  return (
    <StyledCockpit>
      {user ? (
        <>
          <div className="cockpit">
            <div className="container">
              <div className="profil">
                <div>
                  <h2 className="titleProfile center">PROFIL</h2>
                  {completed && (
                    <p className="completed center">
                      Votre profil est complété
                    </p>
                  )}
                  {!completed && (
                    <p className="notCompleted center">
                      Votre profil est incomplet
                    </p>
                  )}
                </div>
                <div className="center">
                  <Link to="/myprofile" className="contactButtonProfil">
                    Accéder à mon profil
                  </Link>
                </div>
              </div>
              <div className="myapps">
                <div>
                  <h2 className="titleMyApps center">APPLICATIONS</h2>
                  {myApps.length !== 0 && (
                    <p className="completed center">
                      Vous avez {myApps.length} applications enregistrées
                    </p>
                  )}
                  {myApps.length === 0 && (
                    <p className="notCompleted center">
                      Vous n&apos;avez pas encore d&apos;applications
                    </p>
                  )}
                </div>
                <div className="center">
                  {myApps.length !== 0 && (
                    <Link to="/myapps" className="contactButtonApp">
                      Accéder à mes applications
                    </Link>
                  )}
                  <Link to="/apps" className="contactButtonApp">
                    Accéder à la Martketplace
                  </Link>
                </div>
              </div>
              <div className="news">
                <div>
                  <h2 className="titleNews center">NEWS</h2>
                  <p className="newsText center">
                    Futures news autour de Farm Connect
                  </p>
                </div>
              </div>
            </div>
            <div className="beta">
              <p>Farm Connect est actuellement en version &quot;BETA&quot;.</p>
              <p>
                N’hésitez pas à nous contacter pour nous dire ce que vous pensez
                de l’application ou si vous avez des idées d&apos;amélioration.
              </p>
              <Link to="/contact" className="contactButton">
                Donner mon avis
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="userOff">
          <div className="withoutUser">
            <h2 className="titleProfile">Vous n&apos;êtes pas connecté(e).</h2>
            <Link to="/" className="buttonProfil">
              Me connecter
            </Link>
          </div>
        </div>
      )}
    </StyledCockpit>
  );
}

export default Cockpit;
