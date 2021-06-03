import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';

export default function Login() {
  const Background = styled.div`
    background-image: url(./Images/welcomefont.png);
    background-size: cover;
    height: 100vh;
  `;
  const adminUser = {
    email: 'dorchies.c@gmail.com',
    password: 'lol123',
  };

  const [user, setUser] = useState({ email: '' });
  const [error, setError] = useState('');

  const Loggedin = (details) => {
    console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log('Logged in o/');
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
