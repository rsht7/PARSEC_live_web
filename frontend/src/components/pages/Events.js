import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Headname from '../Headname';
import Newsletter from '../Newsletter';
import contactpic from './contactcover.jpg';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

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

    const slides = [];
    for (let i = 0; i < events.length; i += 4) {
        slides.push(events.slice(i, i + 4));
    }

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className='total-event'>
            <Headname name='Events' pic={contactpic} />
            <div className="up_events-container">
                <h1>Upcoming Events</h1>
                <div className="up_events-slider">
                    {slides[currentSlide] && slides[currentSlide].map(event => (
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
                <div className="dots-container">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>
            <Newsletter />
        </div>
    );
};

export default Events;
