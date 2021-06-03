import StyledHome from './styles';

function Home() {
  return (
    <StyledHome>
      <div className="profil">
        <h1> Bonjour Utilisateur </h1>
        <ul className="infos">
          <li> Mes coordonnées </li>
          <li> Mon exploitation </li>
          <li> Mes activités </li>
        </ul>
      </div>
      <div className="parcelle">
        <div className="infos-parcelle">
          <h3> Parcelle </h3>
          <p> Qte, ARe, Periode </p>
        </div>
      </div>
    </StyledHome>
  );
}

export default Home;
