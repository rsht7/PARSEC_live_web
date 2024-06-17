// const express = require('express');
// const router = express.Router();
// const Stripe = require('stripe');
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// router.post('/create-payment-intent', async (req, res) => {
//   const { items } = req.body;
  
//   // Calculate the total amount
//   const amount = items.reduce((total, item) => total + 25.00 * item.quantity, 0) * 100; // in cents

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd',
//     });

//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const Client = process.env.CLIENT_URL || 'http://localhost:3000';

router.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;

  const lineItems = items.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.event.title,
        images: [item.event.img],
      },
      unit_amount: item.event.price*100, // $25.00 in cents
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${Client}/success`,
      cancel_url: `${Client}/cart`,
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

