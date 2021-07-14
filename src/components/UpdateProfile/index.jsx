import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import RegistrationForm from '../Registration/styles';
import User from '../../contexts/User';

function UpdateProfile() {
  const { user } = useContext(User);
  const history = useHistory();
  const [users, setUsers] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${user.id}`)
      .then(({ data }) => {
        setUsers(data);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/users/${user.id}`, users)
      .then(() => {
        toast.info(`Profil complété !`);
        history.push(`/cockpit`);
      })
      .catch(() => {
        toast.error(`Erreur dans les informations renseignées`);
      });
  };
  return (
    <RegistrationForm>
      <div className="registrationPage">
        <div className="form">
          <img src="./img/FC.png" alt="" className="FarmConnectLogo" />
          <form onSubmit={submitHandler}>
            <p className="title">Mise à jour des informations</p>
            <div className="form-inner">
              <div>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Ville"
                  onChange={(e) => setUsers({ ...users, city: e.target.value })}
                  value={users.city}
                  className="RegistrationInput"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  placeholder="Code postal"
                  onChange={(e) =>
                    setUsers({ ...users, zipcode: e.target.value })
                  }
                  value={users.zipcode}
                  className="RegistrationInput"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Pays"
                  onChange={(e) =>
                    setUsers({ ...users, country: e.target.value })
                  }
                  value={users.country}
                  className="RegistrationInput"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Téléphone"
                  onChange={(e) =>
                    setUsers({ ...users, mobile: e.target.value })
                  }
                  value={users.mobile}
                  className="RegistrationInput"
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Continuer"
                  className="buttonRegistration"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </RegistrationForm>
  );
}

export default UpdateProfile;
