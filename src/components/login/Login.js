import React from 'react';
import './login.scss';
import { Link } from 'react-router-dom';

function Login() {
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
          <input className="login__input" type="email" />
          <h5 className="login__label">Password</h5>
          <input className="login__input" type="password" />
          <button className="login__button login__button--signIn">
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
        <button className="login__button login__button--register">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;