import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StyledApplicationPage from './styles';
import User from '../../contexts/User';

function ApplicationPage() {
  const [application, setApplication] = useState({});
  const [isFav, setFav] = useState(false);
  const { applicationsId } = useParams();
  const { user } = useContext(User);
  const usersId = user.id;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/apps/${applicationsId}`)
      .then(({ data }) => {
        setApplication(data);
      });
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/appfav/${applicationsId}/${usersId}`
      )
      .then(({ data }) => {
        setFav(data.length !== 0);
      });
  }, []);

  const appHandlerAddApp = () => {
    const appFav = { applicationsId, usersId };
    if (isFav) {
      axios
        .delete(
          `${process.env.REACT_APP_API_URL}/appfav/${applicationsId}/${usersId}`
        )
        .then(() => {
          setFav(!isFav);
        });
    } else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/appfav/`, appFav)
        .then(() => {
          setFav(!isFav);
        });
    }
  };

  return (
    <StyledApplicationPage>
      <div className="appPage">
        <div className="banner">
          <img src={application.banner} alt="" className="banner" />
        </div>
        <div className="nameDesc">
          <div className="nameButton">
            <h2 className="name">{application.name}</h2>
            <button
              type="button"
              className={isFav ? 'buttonIsFav' : 'button'}
              onClick={appHandlerAddApp}
            >
              {isFav ? 'Supprimer' : 'Ajouter'}
            </button>
          </div>
          <p className="description">{application.description}</p>
        </div>
        <div className="buttonlink">
          <button type="button" className="linktoapp">
            <a href={application.appWeb} target="_blank" rel="noreferrer">
              En savoir plus
            </a>
          </button>
        </div>
      </div>
    </StyledApplicationPage>
  );
}

export default ApplicationPage;
