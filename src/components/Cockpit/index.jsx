import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import StyledCockpit from './styles';
import User from '../../contexts/User';

function Cockpit() {
  const history = useHistory();
  const handleClickContact = () => {
    history.push(`/contact`);
  };

  const handleClickProfile = () => {
    history.push(`/myprofile`);
  };

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
            l’application ou si vous avez trouvé des améliorations à effectuer.
          </p>
          <button
            className="contactButton"
            onClick={handleClickContact}
            type="button"
          >
            Donner mon avis
          </button>
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
            <button
              className="contactButtonProfil"
              onClick={handleClickProfile}
              type="button"
            >
              Cliquer ici pour accéder à mon profil
            </button>
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
