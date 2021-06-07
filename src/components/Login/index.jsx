import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Background from './stylesIndex';

export default function Login() {
  const adminUser = {
    email: 'dorchies.c@gmail.com',
    password: 'lol123',
  };

  const [user, setUser] = useState({ email: '' });
  const [error, setError] = useState('');

  const Loggedin = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        email: details.email,
      });
    } else {
      setError('Details do not match ....');
    }
  };
  const Loggedout = () => {
    setUser({ email: '' });
  };

  return (
    <Background>
      <div>
        {user.email !== '' ? (
          <div>
            <h2>Welcome</h2>
            <button type="button" onClick={Loggedout}>
              Logout
            </button>
          </div>
        ) : (
          <LoginForm Loggedin={Loggedin} error={error} />
        )}
      </div>
    </Background>
  );
}
