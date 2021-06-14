import StyledFooter from './styles';

function Footer() {
  return (
    <StyledFooter>
      <div className="Footer">
        <div className="Footer_informations">
          <ul className="LegalMentions">
            <li>Politique de Confidientalité</li>
            <li>Mentions Légales</li>
            <li>CGU</li>
          </ul>
        </div>
        <div className="Footer_informations">
          <ul className="Informations">
            <li>Qui sommes-nous ?</li>
            <li>On parle de nous</li>
            <li>Contactez-nous</li>
          </ul>
        </div>
      </div>
    </StyledFooter>
  );
}
export default Footer;
