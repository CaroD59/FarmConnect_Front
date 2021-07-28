import { NavLink } from 'react-router-dom';
import StyledFooter from './styles';

function Footer() {
  return (
    <StyledFooter>
      <div className="Footer">
        <div className="Footer_informations">
          <ul className="LegalMentions">
            <li>
              <NavLink to="/privacypolicy">
                Politique de Confidentialité
              </NavLink>
            </li>
            <li>
              <NavLink to="/legalnotice">Mentions Légales</NavLink>
            </li>
            <li>
              <NavLink to="/conditionsofuse">
                Conditions Générales d&apos;Utilisation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="Footer_informations">
          <ul className="Informations">
            <li>
              <NavLink to="/aboutus">Qui sommes-nous ?</NavLink>
            </li>
            <li>
              <NavLink to="/speakingaboutus">On parle de nous !</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contactez-nous</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </StyledFooter>
  );
}
export default Footer;
