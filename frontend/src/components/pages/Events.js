import { useEffect, useState, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Headname from '../Headname';
import Newsletter from '../Newsletter';
import eventspic from './events-page-pic.jpeg';


const Events = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [events, setEvents] = useState([]);
    const eventContainerRef = useRef(null);
    const timerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const eventItems = eventContainerRef.current.querySelectorAll('.up_event-item');
        eventItems.forEach((item) => {
            observer.observe(item);
        });

        return () => {
            observer.disconnect();
        };
    }, [events, currentSlide]);

    const slides = useMemo(() => {
        const generatedSlides = [];
        for (let i = 0; i < events.length; i += 4) {
            generatedSlides.push(events.slice(i, i + 4));
        }
        return generatedSlides;
    }, [events]);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            const nextSlideIndex = (currentSlide + 1) % slides.length;
            setCurrentSlide(nextSlideIndex);
        }, 10000);

        return () => clearInterval(timerRef.current);
    }, [currentSlide, slides]);

    const handleDotClick = (index) => {
        clearInterval(timerRef.current);
        setCurrentSlide(index);
    };

    return (
        <div className='total-event'>

            <Headname name='Events' pic={eventspic} />
                
            <div className="up_events-container" ref={eventContainerRef}>


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
            <div className='home-newsletter-div'><Newsletter /></div>
        </div>
    );
};

export default Events;
