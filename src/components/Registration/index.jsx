import React, { useState } from 'react';
import axios from 'axios';
import RegistrationForm from './styles';

function Registration() {
  const [users, setUsers] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    zipcode: '',
    country: '',
    mobile: '',
    city: '',
    isStaff: 0,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, users);
  };
  return (
    <RegistrationForm>
      <div className="registrationPage">
        <div className="form">
          <img src="./img/FC.png" alt="" className="FarmConnectLogo" />
          <form onSubmit={submitHandler}>
            <p className="title">Formulaire d&apos;inscription</p>
            <div className="form-inner">
              <div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  onChange={(e) =>
                    setUsers({ ...users, email: e.target.value })
                  }
                  value={users.email}
                  className="RegistrationInput"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="Password"
                  id="Password"
                  placeholder="Mot de passe"
                  onChange={(e) =>
                    setUsers({ ...users, password: e.target.value })
                  }
                  value={users.password}
                  className="RegistrationInput"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Prénom"
                  onChange={(e) =>
                    setUsers({ ...users, firstname: e.target.value })
                  }
                  value={users.firstname}
                  className="RegistrationInput"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Nom"
                  onChange={(e) =>
                    setUsers({ ...users, lastname: e.target.value })
                  }
                  value={users.lastname}
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

export default Registration;
