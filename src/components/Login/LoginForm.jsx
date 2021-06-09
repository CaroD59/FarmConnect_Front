import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { LogForm } from './styles';

export default function LoginForm({ Loggedin, error }) {
  const [details, setDetails] = useState({ email: '', password: '' });
  const submitHandler = (e) => {
    e.preventDefault();
    Loggedin(details);
  };

  return (
    <LogForm>
      <img src="./Images/FC.png" alt="" className="FarmConnectLogo" />
      <form onSubmit={submitHandler}>
        <div className="pLogin">
          <p>Connectez-vous pour accéder</p>
          <p>...</p>
        </div>
        <div className="form-inner">
          {error !== '' ? <div className="error">{error}</div> : ''}
          <div className="form-group">
            <input
              type="text"
              name="E-mail"
              id="E-mail"
              placeholder="E-mail"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
              className="LogInput"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              password="Password"
              id="Password"
              placeholder="Mot de passe"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
              className="LogInput"
            />
          </div>
          <div className="divLog">
            <p className="pForgottenPassword">Mot de passe oublié ?</p>
            <input type="submit" value="Continuer" className="buttonLogin" />
          </div>
        </div>
      </form>
    </LogForm>
  );
}

LoginForm.propTypes = {
  Loggedin: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};
