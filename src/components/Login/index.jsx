import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';
import { Background } from './styles';

export default function Login() {
  const adminUsers = { email: 'dorchies.c@gmail.com', password: 'lol123' };
  const history = useHistory();
  const [user, setUser] = useState({ email: '' });
  const [error, setError] = useState('');

  const Loggedin = (details) => {
    if (
      details.email === adminUsers.email &&
      details.password === adminUsers.password
    ) {
      setUser({
        email: details.email,
      });
    } else {
      setError('Details do not match ....');
    }
  };
  return (
    <div>
      {user.email !== '' ? (
        history.push('/home')
      ) : (
        <Background>
          <LoginForm Loggedin={Loggedin} error={error} />{' '}
        </Background>
      )}
    </div>
  );
}
