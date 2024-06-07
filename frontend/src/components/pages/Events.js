


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import Headname from '../Headname';
import Newsletter from '../Newsletter';
import contactpic from './contactcover.jpg'; // Ensure this path is correct

const Events = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

    
    const [events, setEvents] = useState([]); // Initialize with empty array

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('/api/events');
            const json = await response.json();

            if (response.ok) {
                setEvents(json);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div className='total-event'>
            <Headname name='Events' pic={contactpic} />
            <div className="up_events-container">
                <h1 style={{ marginTop: '2.5%'
}}>Upcoming Events</h1>
                <div className="up_events-slider">
                {events.map(event => (
                    <div key={event._id} className="up_event-item">
                    <img src={event.img} alt={event.title} className="up_event-image" />
                    <div className="up_event-details">
                        <h3>{event.title}</h3>
                        <p className="up_event-date">{event.date}</p>
                        <div className="up_event-buttons">
                        <button className="up_buy-now-btn">BOOK NOW</button>
                        <Link to={`/event/${event._id}`} className="up_read-more-btn">READ MORE</Link>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            <Newsletter />
        </div>

    );
};

export default Events;

