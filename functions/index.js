const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request } = require('express');
const stripe = require('stripe')(
  'sk_test_51HQbJzLzmAaGAOaO1daqCX9reHtXkVWgfhYNYC6AjGr6gnAqHkR8Np1Or7Cli9ChzFZwY7BlpVpEgJENjnaNrH0H00TeVivSCd'
);

const app = express();

//STRIPE PAYMENT
app.use(cors({ origin: true }));
app.use(express.json());
app.post('/payment/create', async (request, response) => {
  const total = request.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
