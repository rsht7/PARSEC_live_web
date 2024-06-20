// require('dotenv').config()
// const mongoose = require('mongoose')

// const express= require('express')
// const workoutRoutes = require('./routes/workouts')
// const contactusRoute = require('./routes/contactus')
// const eventRoutes = require('./routes/events')

// const app=express()

// app.use(express.json())

// app.use((req, res, next) => {
//     console.log(req.path, req.method)
//     next()
// })

// app.use('/api/contactus', contactusRoute)
// app.use('/api/workouts', workoutRoutes)
// app.use('/api/events', eventRoutes )

    
// mongoose.connect(process.env.MONGO_URI)
//     .then(()=>{
//         app.listen(process.env.PORT, ()=> {
//             console.log('listening on port 4000')
            
//         })
//     })
//     .catch((error)=>{
//         console.log(error)
//     })


        

// require('dotenv').config();
// const mongoose = require('mongoose');
// const express = require('express');

// const workoutRoutes = require('./routes/workouts');
// const contactusRoute = require('./routes/contactus');
// const eventRoutes = require('./routes/events');
// const paymentRoutes = require('./routes/payment'); // Import the payment routes

// const app = express();

// app.use(express.json());

// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// app.use('/api/contactus', contactusRoute);
// app.use('/api/workouts', workoutRoutes);
// app.use('/api/events', eventRoutes);
// app.use('/api/payment', paymentRoutes); // Add the payment routes

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log(`listening on port ${process.env.PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// require('dotenv').config();
// const mongoose = require('mongoose');
// const express = require('express');

// const workoutRoutes = require('./routes/workouts');
// const contactusRoute = require('./routes/contactus');
// const newslettersubsRoutes = require('./routes/newslettersubscription');

// const eventRoutes = require('./routes/events');
// const paymentRoutes = require('./routes/payment'); // Import the payment routes

// const app = express();
// const Port=process.env.PORT || 4000;

// const cors = require('cors');


// // Alternatively, configure CORS for specific origins
// const allowedOrigins = ['https://parsec-live-web.vercel.app/', 'http://localhost:3000'];

// const corsOptions = {
//   origin: allowedOrigins,
// };

// app.use(cors(corsOptions));


// app.use(express.json());

// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// app.use('/api/contactus', contactusRoute);
// app.use('/api/newslettersubs', newslettersubsRoutes);
// app.use('/api/workouts', workoutRoutes);
// app.use('/api/events', eventRoutes);
// app.use('/api/payment', paymentRoutes); // Add the payment routes

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(Port, () => {
//       console.log(`listening on port ${Port}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// require('dotenv').config();
// const mongoose = require('mongoose');
// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const workoutRoutes = require('./routes/workouts');
// const contactusRoute = require('./routes/contactus');
// const newslettersubsRoutes = require('./routes/newslettersubscription');
// const eventRoutes = require('./routes/events');
// const paymentRoutes = require('./routes/payment'); // Import the payment routes

// const app = express();
// const Port = process.env.PORT || 4000;

// // CORS configuration
// const allowedOrigins = ['https://parsec-live-web.vercel.app', 'http://localhost:3000'];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

// app.use(cors(corsOptions));
// app.use(express.json());

// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// // Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// // Define routes
// app.use('/api/contactus', contactusRoute);
// app.use('/api/newslettersubs', newslettersubsRoutes);
// app.use('/api/workouts', workoutRoutes);
// app.use('/api/events', eventRoutes);
// app.use('/api/payment', paymentRoutes);

// // Serve the index.html for any other routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
// });

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(Port, () => {
//       console.log(`Listening on port ${Port}`);
//     });
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });

// require('dotenv').config();
// const mongoose = require('mongoose');
// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const workoutRoutes = require('./routes/workouts');
// const contactusRoute = require('./routes/contactus');
// const newslettersubsRoutes = require('./routes/newslettersubscription');
// const eventRoutes = require('./routes/events');
// const paymentRoutes = require('./routes/payment'); // Import the payment routes

// const app = express();
// const Port = process.env.PORT || 4000;

// // CORS configuration
// const allowedOrigins = ['https://parsec-live-web.vercel.app', 'http://localhost:3000'];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

// app.use(cors(corsOptions));

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Middleware to log requests
// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// // Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// // Define routes
// app.use('/api/contactus', contactusRoute);
// app.use('/api/newslettersubs', newslettersubsRoutes);
// app.use('/api/workouts', workoutRoutes);
// app.use('/api/events', eventRoutes);
// app.use('/api/payment', paymentRoutes);

// // Serve the index.html for any other routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
// });

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(Port, () => {
//       console.log(`Listening on port ${Port}`);
//     });
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });


// require('dotenv').config();
// const mongoose = require('mongoose');
// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const workoutRoutes = require('./routes/workouts');
// const contactusRoute = require('./routes/contactus');
// const newslettersubsRoutes = require('./routes/newslettersubscription');
// const eventRoutes = require('./routes/events');
// const paymentRoutes = require('./routes/payment'); // Import the payment routes

// const app = express();
// const Port = process.env.PORT || 4000;

// // CORS configuration
// const allowedOrigins = ['https://parsec-live-web.vercel.app', 'http://localhost:3000'];

// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log(`Request Origin: ${origin}`);
//     if (!origin) {
//       // Allow requests with no origin (e.g., same-origin requests)
//       return callback(null, true);
//     }
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       return callback(null, true);
//     }
//     console.error(`Blocked by CORS: Origin - ${origin}`);
//     return callback(new Error('Not allowed by CORS'));
//   }
// };

// app.use(cors(corsOptions));

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Middleware to log requests
// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// // Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// // Define routes
// app.use('/api/contactus', contactusRoute);
// app.use('/api/newslettersubs', newslettersubsRoutes);
// app.use('/api/workouts', workoutRoutes);
// app.use('/api/events', eventRoutes);
// app.use('/api/payment', paymentRoutes);

// // Serve the index.html for any other routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
// });

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(Port, () => {
//       console.log(`Listening on port ${Port}`);
//     });
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });

// 18
// require('dotenv').config();
// const mongoose = require('mongoose');
// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const workoutRoutes = require('./routes/workouts');
// const contactusRoute = require('./routes/contactus');
// const newslettersubsRoutes = require('./routes/newslettersubscription');
// const eventRoutes = require('./routes/events');
// const paymentRoutes = require('./routes/payment'); 

// const app = express();
// const Port = process.env.PORT || 4000;


// const allowedOrigins = ['https://parsec-live-web.vercel.app','https://parsec-live-web.onrender.com', 'http://localhost:3000'];

// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log(`Request Origin: ${origin}`);
//     if (!origin) {
//       return callback(null, true);
//     }
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       return callback(null, true);
//     }
//     console.error(`Blocked by CORS: Origin - ${origin}`);
//     return callback(new Error('Not allowed by CORS'));
//   }
// };

// app.use(cors(corsOptions));

// app.use(express.json());

// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// app.use('/api/contactus', contactusRoute);
// app.use('/api/newslettersubs', newslettersubsRoutes);
// app.use('/api/workouts', workoutRoutes);
// app.use('/api/events', eventRoutes);
// app.use('/api/payment', paymentRoutes);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
// });

// app.post('/api/payment/webhook', express.raw({ type: 'application/json' }), (req, res) => {
//   const sig = req.headers['stripe-signature'];

//   let event;
//   try {
//     event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
//   } catch (err) {
//     console.error('Webhook signature verification failed.', err.message);
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   switch (event.type) {
//     case 'checkout.session.completed':
//       const session = event.data.object;
//       console.log(`Payment for session ${session.id} succeeded.`);
//       break;
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }

//   res.json({ received: true });
// });

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(Port, () => {
//       console.log(`Listening on port ${Port}`);
//     });
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path');

const workoutRoutes = require('./routes/workouts');
const contactusRoute = require('./routes/contactus');
const newslettersubsRoutes = require('./routes/newslettersubscription');
const eventRoutes = require('./routes/events');
const paymentRoutes = require('./routes/payment'); // Import the payment routes

const app = express();
const Port = process.env.PORT || 4000;

// CORS configuration
const allowedOrigins = ['https://parsec-live-web.vercel.app', 'https://parsec-live-web.onrender.com', 'http://localhost:3000', 'http://localhost:4000/'];

const corsOptions = {
  origin: function (origin, callback) {
    console.log(`Request Origin: ${origin}`);
    if (!origin) {
      // Allow requests with no origin (e.g., same-origin requests)
      return callback(null, true);
    }
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    console.error(`Blocked by CORS: Origin - ${origin}`);
    return callback(new Error('Not allowed by CORS'));
  }
};

app.use(cors(corsOptions));

// Middleware to log requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// Apply JSON parsing middleware to all routes except the webhook route
app.use((req, res, next) => {
  if (req.originalUrl === '/api/payment/webhook') {
    next();
  } else {
    express.json()(req, res, next);
  }
});

// Define routes
app.use('/api/contactus', contactusRoute);
app.use('/api/newslettersubs', newslettersubsRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/payment', paymentRoutes);

// Serve the index.html for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

// Set up Stripe Webhook
app.post('/api/payment/webhook', express.raw({ type: 'application/json' }), (req, res) => {
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

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(Port, () => {
      console.log(`Listening on port ${Port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
