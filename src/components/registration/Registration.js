import React, { useState } from 'react';
import './registration.scss';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './../../firebase';
import { useEffect } from 'react';

function Registration() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const register = (event) => {
    event.preventDefault();
    if (password === password2) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          if (auth) {
            history.push('/');
          }
        })
        .catch((error) => alert(error.message));
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="registration">
      <Link to="/">
        <img
          className="registration__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>
      <div className="registration__container">
        <h1 className="registration__title">Create account</h1>
        <form>
          <h5 className="registration__label">E-Mail</h5>
          <input
            className="registration__input"
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5 className="registration__label">Password</h5>
          <input
            className="registration__input"
            placeholder="At least six characters"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <h5 className="registration__label">Re-enter Password</h5>
          <input
            className="registration__input"
            type="password"
            value={password2}
            onChange={(event) => setPassword2(event.target.value)}
          />
          <button
            className="registration__button registration__button--signIn"
            type="submit"
            onClick={register}
          >
            Create your Amazon Account
          </button>
        </form>
        <p className="registration__conditionText">
          By creating account you agree to{' '}
          <span className="registration__conditionText--warrning">
            Amazon Fake Clone
          </span>{' '}
          Conditions of Use & Sale. Please see our Privacy Notice, our Cookies
          Notice and our Interest-Based Ads Notice.
        </p>
        <span className="registration__line">Already have an account?</span>
        <Link to="/login">
          <button className="registration__button registration__button--register">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Registration;
