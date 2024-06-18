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
const allowedOrigins = ['https://parsec-live-web.vercel.app', 'http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

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

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(Port, () => {
      console.log(`Listening on port ${Port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
