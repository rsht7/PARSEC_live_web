require('dotenv').config()
const mongoose = require('mongoose')

const express= require('express')
const workoutRoutes = require('./routes/workouts')
const contactusRoute = require('./routes/contactus')
const eventRoutes = require('./routes/events')

const app=express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/contactus', contactusRoute)
app.use('/api/workouts', workoutRoutes)
app.use('/api/events', eventRoutes )

    
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=> {
            console.log('listening on port 4000')
            
        })
    })
    .catch((error)=>{
        console.log(error)
    })


        