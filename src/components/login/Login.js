import React, { useState } from 'react';
import './login.scss';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './../../firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>
      <div className="login__container">
        <h1 className="login__title">Sign in</h1>
        <form>
          <h5 className="login__label">E-Mail</h5>
          <input
            className="login__input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5 className="login__label">Password</h5>
          <input
            className="login__input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="login__button login__button--signIn"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p className="login__conditionText">
          By signing-in you agree to{' '}
          <span className="login__conditionText--warrning">
            Amazon Fake Clone
          </span>{' '}
          Conditions of Use & Sale. Please see our Privacy Notice, our Cookies
          Notice and our Interest-Based Ads Notice.
        </p>
        <button
          className="login__button login__button--register"
          type="submit"
          onClick={register}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
