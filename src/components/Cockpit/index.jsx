import { useHistory } from 'react-router-dom';
import StyledCockpit from './styles';

function Cockpit() {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/contact`);
  };
  return (
    <StyledCockpit>
      <div className="cockpit">
        <div className="beta">
          <p>Farm Connect est actuellement en version &quot;BETA&quot;.</p>
          <p>
            N’hésitez pas à nous contacter pour nous dire ce que vous pensez de
            l’application ou si vous avez trouvé des améliorations à effectuer.
          </p>
          <button className="contactButton" onClick={handleClick} type="button">
            Nous contacter
          </button>
        </div>
        <div className="container">
          <div className="profil">
            <p>Profil</p>
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
