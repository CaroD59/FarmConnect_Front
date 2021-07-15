import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import StyledCockpit from './styles';
import User from '../../contexts/User';

function Cockpit() {
  const [completed, setCompleted] = useState(true);
  const { user } = useContext(User);
  const [myApps, setMyApps] = useState([]);
  console.log(myApps);
  useEffect(() => {
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
  }, []);

  return (
    <StyledCockpit>
      <div className="cockpit">
        <div className="beta">
          <p>Farm Connect est actuellement en version &quot;BETA&quot;.</p>
          <p>
            N’hésitez pas à nous contacter pour nous dire ce que vous pensez de
            l’application ou si vous avez des idées d&apos;amélioration.
          </p>
          <Link to="/contact" className="contactButton">
            Donner mon avis
          </Link>
        </div>
        <div className="container">
          <div className="profil">
            <h2 className="titleProfile">PROFIL</h2>
            {completed && (
              <p className="completed">Votre profil est complété !</p>
            )}
            {!completed && (
              <p className="notCompleted">Votre profil est incomplet !</p>
            )}
            <Link to="/myprofile" className="contactButtonProfil">
              Cliquer ici pour accéder à mon profil
            </Link>
          </div>
          <div className="myapps">
            <h2 className="titleMyApps">Applications</h2>
            {myApps.length !== 0 && (
              <p className="completed">
                Vous avez {myApps.length} applications
              </p>
            )}
            {myApps.length === 0 && (
              <p className="notCompleted">
                Vous n&apos;avez pas encore d&apos;applications
              </p>
            )}
            <Link to="/myapps" className="contactButtonApp">
              Cliquer ici pour accéder à vos applications
            </Link>
            <Link to="/apps" className="contactButtonApp">
              Cliquer ici pour accéder au catalogue d&apos;applications
            </Link>
          </div>
          <div className="soon">
            <h2 className="titleProfile">PROFIL</h2>

            <Link to="/myprofile" className="contactButtonProfil">
              Cliquer ici pour accéder à mon profil
            </Link>
          </div>
        </div>
      </div>
    </StyledCockpit>
  );
}

export default Cockpit;
