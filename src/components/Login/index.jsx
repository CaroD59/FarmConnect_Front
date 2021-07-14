import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import LogForm from './styles';
import User from '../../contexts/User';

export default function LoginForm() {
  const { setUser } = useContext(User);
  const history = useHistory();
  const [details, setDetails] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const signInHandler = (e) => {
    e.preventDefault();
    history.push('/registration');
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, details)
      .then(({ data }) => {
        setUser(data);
        toast.info(`Vous êtes connecté ${details.email}`);
        history.push(`/cockpit`);
      })
      .catch(() => {
        toast.error(`E-mail ou mot de passe incorrect`);
        setError('Details do not match ....');
      });
  };
  return (
    <LogForm>
      <div className="loginPage">
        <div className="form">
          <img src="./img/FC.png" alt="" className="FarmConnectLogo" />
          <form onSubmit={submitHandler}>
            <div className="pLogin">
              <p>Connectez-vous pour accéder</p>
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
                  <button
                    type="button"
                    className="pSignIn"
                    onClick={signInHandler}
                  >
                    S&apos;inscrire
                  </button>
                </div>
                <div>
                  <input
                    type="submit"
                    value="Se Connecter"
                    className="buttonLogin"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </LogForm>
  );
}
