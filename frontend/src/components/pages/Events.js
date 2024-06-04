


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import Headname from '../Headname';
import Newsletter from '../Newsletter';
import contactpic from './contactcover.jpg'; // Ensure this path is correct

const Events = () => {
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
            <div className="events-container">
            <h1 style={{ marginTop: '2.5%' }}>Upcoming Events</h1>
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
            <Newsletter />
        </div>
    );
};

export default Events;

