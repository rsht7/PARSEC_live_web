import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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



    const [events, setEvents] = useState([]); // Initialize with empty array

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

                {/* <div className='event-wrapper'>
                    <p className='upc-event'>Upcoming Event</p>
                    <div className='home-event'>
                        {events && events.map((sevent) => (
                            <Singleevent key={sevent._id} event = {sevent} />
                        ))}

                    </div>
                </div> */}
                <div className="events-container">
                    <h1>Upcoming Events</h1>
                    <div className="events-list">
                        {events.map(event => (
                            <div key={event._id} className="event-item">
                                <img src={event.img} alt={event.title} className="event-image" />
                                <div className="event-details">
                                    <h3>{event.title}</h3>
                                    <p className="event-date">{event.date}</p>
                                    <div className="event-buttons">
                                        <button className="buy-now-btn">Buy Now</button>
                                        <Link to={`/event/${event._id}`} className="read-more-btn">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Newsletter/>


                
        </div>
     
        
        
    )
}

export default Home