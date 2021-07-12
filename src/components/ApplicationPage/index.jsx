import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StyledApplicationPage from './styles';

function ApplicationPage() {
  const { id } = useParams();
  const [application, setApplication] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/apps/${id}`)
      .then(({ data }) => {
        setApplication(data);
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
                <button type="button" className="button">
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
