import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Headname from '../Headname';
import Newsletter from '../Newsletter';
import eventspic from './events-page-pic.jpeg';

const Events = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [events, setEvents] = useState([]);
    const timerRef = useRef(null);
    const sliderRef = useRef(null);

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

    const slides = useMemo(() => {
        const generatedSlides = [];
        for (let i = 0; i < events.length; i += 4) {
            generatedSlides.push(events.slice(i, i + 4));
        }
        return generatedSlides;
    }, [events]);

    const startSlider = useCallback(() => {
        timerRef.current = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 5000);
    }, [slides.length]);

    useEffect(() => {
        startSlider();
        return () => clearInterval(timerRef.current);
    }, [startSlider]);

    const handleDotClick = (index) => {
        clearInterval(timerRef.current);
        setCurrentSlide(index);
        startSlider();
    };

    const handleMouseOver = () => {
        clearInterval(timerRef.current);
    };

    const handleMouseOut = () => {
        startSlider();
    };

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
        };
    
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible'); // Ensure it can animate again when out of view and in view again
                }
            });
        };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const items = document.querySelectorAll('.up_event-item');
    
        items.forEach(item => observer.observe(item));
    
        return () => {
            items.forEach(item => observer.unobserve(item));
        };
    }, []); // No dependencies, runs once on mount
    
    

    return (
        <div className='total-event'>
            <Headname name='Events' pic={eventspic} />
                
            <div className="up_events-container">
                <h1>Upcoming Events</h1>
                <div 
                    className="up_events-slider-wrapper"
                    ref={sliderRef}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <div className="up_events-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} className="up_events-slide">
                                {slide.map(event => (
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
                        ))}
                    </div>
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
