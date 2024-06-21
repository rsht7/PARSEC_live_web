// // const express = require('express');
// // const router = express.Router();
// // const Stripe = require('stripe');
// // const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// // router.post('/create-payment-intent', async (req, res) => {
// //   const { items } = req.body;
  
// //   // Calculate the total amount
// //   const amount = items.reduce((total, item) => total + 25.00 * item.quantity, 0) * 100; // in cents

// //   try {
// //     const paymentIntent = await stripe.paymentIntents.create({
// //       amount,
// //       currency: 'usd',
// //     });

// //     res.send({
// //       clientSecret: paymentIntent.client_secret,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // });

// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Stripe = require('stripe');
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// const Client = process.env.CLIENT_URL || 'http://localhost:3000';

// router.post('/create-checkout-session', async (req, res) => {
//   const { items } = req.body;

//   const lineItems = items.map(item => ({
//     price_data: {
//       currency: 'usd',
//       product_data: {
//         name: item.event.title,
//         images: [item.event.img],
//       },
//       unit_amount: item.event.price*100, // $25.00 in cents
//     },
//     quantity: item.quantity,
//   }));

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: lineItems,
//       mode: 'payment',
//       success_url: `${Client}/success`,
//       cancel_url: `${Client}/cart`,
//     });

//     res.json({ id: session.id });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Stripe = require('stripe');
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// const Client = process.env.CLIENT_URL || 'http://localhost:3000';

// // Create checkout session
// router.post('/create-checkout-session', async (req, res) => {
//   const { items } = req.body;

//   const lineItems = items.map(item => ({
//     price_data: {
//       currency: 'usd',
//       product_data: {
//         name: item.event.title,
//         images: [item.event.img],
//       },
//       unit_amount: item.event.price * 100, // Amount in cents
//     },
//     quantity: item.quantity,
//   }));

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: lineItems,
//       mode: 'payment',
//       success_url: `${Client}/success`,
//       cancel_url: `${Client}/cart`,
//     });

//     res.json({ id: session.id });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Webhook endpoint to handle Stripe events
// router.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
//   const sig = req.headers['stripe-signature'];

//   let event;
//   try {
//     event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
//   } catch (err) {
//     console.error('Webhook signature verification failed.', err.message);
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   // Handle the event
//   switch (event.type) {
//     case 'checkout.session.completed':
//       const session = event.data.object;
//       // Handle the successful checkout session (e.g., fulfill the order)
//       console.log(`Payment for session ${session.id} succeeded.`);
//       // Implement your business logic here
//       break;
//     // Add other event types as needed
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }

//   res.json({ received: true });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const Client = process.env.CLIENT_URL || 'http://localhost:3000';

// Create checkout session
router.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;

  const lineItems = items.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.event.title,
        images: [item.event.img],
      },
      unit_amount: item.event.price * 100, // Amount in cents
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url:'https://parsec-live-web.onrender.com/success',
      cancel_url:'https://parsec-live-web.onrender.com/cart',
      // success_url: `${Client}/success`,
      // cancel_url: `${Client}/cart`,
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Webhook endpoint to handle Stripe events
router.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      // Handle the successful checkout session (e.g., fulfill the order)
      console.log(`Payment for session ${session.id} succeeded.`);
      // Implement your business logic here
      break;
    // Add other event types as needed
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});

module.exports = router;