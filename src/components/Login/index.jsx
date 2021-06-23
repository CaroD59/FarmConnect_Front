import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LogForm } from './styles';

export default function LoginForm() {
  const adminUser = { email: 'dorchies.c@gmail.com', password: 'lol123' };
  const history = useHistory();
  const [error, setError] = useState('');
  const [details, setDetails] = useState({ email: '', password: '' });
  const signInHandler = (e) => {
    e.preventDefault();
    history.push('/registration');
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      history.push('/');
    } else {
      setError('Details do not match ....');
    }
  };
  return (
    <LogForm>
      <img src="./img/FC.png" alt="" className="FarmConnectLogo" />
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
              placeholder="Mot de passe"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
              className="LogInput"
            />
          </div>
          <div className="BlocLoginSignIn">
            <div>
              <p className="pForgottenPassword">Mot de passe oublié ?</p>
              <button type="button" className="pSignIn" onClick={signInHandler}>
                S&apos;inscrire
              </button>
            </div>
            <div>
              <input type="submit" value="Continuer" className="buttonLogin" />
            </div>
          </div>
        </div>
      </form>
    </LogForm>
  );
}
