import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import strapiAPI from './stripeConfig';
import Orders from './components/orders/Orders';

const strapiPromise = loadStripe(strapiAPI);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
        // the user is logged out
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={strapiPromise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
