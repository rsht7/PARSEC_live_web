import {useEffect, useState} from 'react'

//components
// import WorkoutDetails from '../WorkoutDetails'

import Singleevent from '../Singleevent'

// import parsec_bg from './parsec_bg.mp4'
import logo from './logo.png'
import homepic2 from './homepic2.jpeg'
import Newsletter from '../Newsletter'


const Home = ()=> {
    // const [workouts, setWorkouts] = useState(null)

    // useEffect(() => {
    //     const fetchWorkouts = async () => {
    //         const response = await fetch('/api/workouts')
    //         const json = await response.json()

    //         if (response.ok) {
    //             setWorkouts(json)
    //         }
    //     }
    //     fetchWorkouts()
    // }, [])



    const [events, setEvents] = useState(null)

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('/api/events')
            const json = await response.json()

            if (response.ok) {
                setEvents(json)
            }
        }
        fetchEvents()
    }, [])


    return (
        <div className='home'>
            
                <div className='bglogo'>
                    <img src={logo}></img>
                </div>
                <div className='main'>
                    {/* <video src={parsec_bg} autoPlay loop muted /> */}
                    <img src={homepic2}></img>
                    <h1>Lorem Ipsum Dolor sit Amet</h1>
                </div>
                {/* <div className='workouts-wrapper'>
                    <h2>UPCOMING EVENTS</h2>
                    <div className='workouts'>
                        {workouts && workouts.map((workout) => (
                            <WorkoutDetails key={workout._id} workout = {workout} />
                        ))}
                    </div>

                </div> */}

                <div className='event-wrapper'>
                    <p className='upc-event'>Upcoming Event</p>
                    <div className='home-event'>
                        {events && events.map((sevent) => (
                            <Singleevent key={sevent._id} event = {sevent} />
                        ))}

                    </div>
                </div>
                <Newsletter/>


                
        </div>
     
        
        
    )
}

export default Home