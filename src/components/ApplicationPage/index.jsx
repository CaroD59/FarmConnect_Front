import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StyledApplicationPage from './styles';
import User from '../../contexts/User';

function ApplicationPage() {
  const [application, setApplication] = useState([]);
  const [isFav, setIsFav] = useState({});
  const { id } = useParams();
  const applicationsId = id;

  const user = useContext(User);
  console.log(user);
  console.log(`Is fav ?${isFav}`);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/apps/${id}`)
      .then(({ data }) => {
        setApplication(data);
      });
  }, []);

  const usersId = '28';
  const appFav = { applicationsId, usersId };
  const appHandler = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/appfav/`, appFav);
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/appfav/${usersId}/${applicationsId}`
      )
      .then(({ data }) => {
        console.log(`DATA : ${data}`);
        setIsFav(data ? 'true' : 'false');
      });
  }, []);

  return (
    <StyledApplicationPage>
      {application && (
        <>
          <div className="appPage">
            <div className="banner">
              <img src={application.banner} alt="" className="banner" />
            </div>
            <div className="nameDesc">
              <div className="nameButton">
                <h2 className="name">{application.name}</h2>
                <button
                  type="button"
                  className={isFav ? 'button' : 'buttonIsFav'}
                  onClick={() => {
                    appHandler();
                  }}
                >
                  Ajouter
                </button>
              </div>
              <p className="description">{application.description}</p>
            </div>
          </div>
        </>
      )}
    </StyledApplicationPage>
  );
}

export default ApplicationPage;
