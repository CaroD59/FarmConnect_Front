import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import StyledCockpit from './styles';
import User from '../../contexts/User';

function Cockpit() {
  const [completed, setCompleted] = useState(true);
  const { user } = useContext(User);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${user.id}`)
      .then(({ data }) => {
        if (!data.country || !data.zipcode || !data.city || !data.mobile)
          setCompleted(false);
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
            <p>Mes Apps</p>
          </div>
          <div className="soon">
            <p>Bientôt disponible</p>
          </div>
        </div>
      </div>
    </StyledCockpit>
  );
}

export default Cockpit;
