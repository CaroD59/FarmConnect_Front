import StyledAboutUs from './styles';

function AboutUs() {
  return (
    <StyledAboutUs>
      <div className="aboutUsPage">
        <div className="aboutUsContent">
          <h1 className="aboutUsTitle">Qui Sommes-Nous ?</h1>
          <p className="aboutUsText">
            Cette page expliquera ce que représente la plateforme Farm Connect.
          </p>
        </div>
      </div>
    </StyledAboutUs>
  );
}

export default AboutUs;
