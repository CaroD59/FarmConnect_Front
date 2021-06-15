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
  });

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5050/users', users);
  };
  return (
    <RegistrationForm>
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <div className="form-group">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="E-mail"
              onChange={(e) => setUsers({ ...users, email: e.target.value })}
              value={users.email}
              className="LogInput"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="Password"
              id="Password"
              placeholder="Mot de passe"
              onChange={(e) => setUsers({ ...users, password: e.target.value })}
              value={users.password}
              className="LogInput"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Prénom"
              onChange={(e) =>
                setUsers({ ...users, firstname: e.target.value })
              }
              value={users.firstname}
              className="LogInput"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Nom"
              onChange={(e) => setUsers({ ...users, lastname: e.target.value })}
              value={users.lastname}
              className="LogInput"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="zipcode"
              id="zipcode"
              placeholder="Code Postal"
              onChange={(e) => setUsers({ ...users, zipcode: e.target.value })}
              value={users.zipcode}
              className="LogInput"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Pays"
              onChange={(e) => setUsers({ ...users, country: e.target.value })}
              value={users.country}
              className="LogInput"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Ville"
              onChange={(e) => setUsers({ ...users, city: e.target.value })}
              value={users.city}
              className="LogInput"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Téléphone"
              onChange={(e) => setUsers({ ...users, mobile: e.target.value })}
              value={users.mobile}
              className="LogInput"
            />
          </div>
          <div>
            <input type="submit" value="Continuer" className="buttonLogin" />
          </div>
        </div>
      </form>
    </RegistrationForm>
  );
}

export default Registration;
