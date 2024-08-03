// import React, { useEffect, useState, useRef, useMemo, useCallback, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Headname from '../Headname';
// import Newsletter from '../Newsletter';
// import eventspic from './events-page-pic.jpeg';
// import { CartContext } from '../../contexts/CartContext';
// import CartModal from '../CartModal'; // Import the CartModal component

// const Events = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [events, setEvents] = useState([]);
//     const timerRef = useRef(null);
//     const sliderRef = useRef(null);
//     const { addToCart } = useContext(CartContext); // Access addToCart function from context

//     const [isCartModalOpen, setIsCartModalOpen] = useState(false); // State to control modal visibility
//     const [selectedEvent, setSelectedEvent] = useState(null); // State to store selected event

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     useEffect(() => {
//         const fetchEvents = async () => {
//             try {
//                 const response = await fetch('/api/events');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch events');
//                 }
//                 const json = await response.json();
//                 setEvents(json);
//                 console.log("Events fetched:", json);
//             } catch (error) {
//                 console.error('Error fetching events:', error);
//             }
//         };
//         fetchEvents();
//     }, []);

//     const slides = useMemo(() => {
//         const generatedSlides = [];
//         for (let i = 0; i < events.length; i += 4) {
//             generatedSlides.push(events.slice(i, i + 4));
//         }
//         return generatedSlides;
//     }, [events]);

//     const startSlider = useCallback(() => {
//         if (window.innerWidth <= 550) {
//             return; // Do not start slider if screen size is below 550px
//         }
//         timerRef.current = setInterval(() => {
//             setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
//         }, 7000);
//     }, [slides.length]);

//     const stopSlider = useCallback(() => {
//         if (timerRef.current) {
//             clearInterval(timerRef.current);
//         }
//     }, []);

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth > 550) {
//                 startSlider();
//             } else {
//                 stopSlider();
//             }
//         };

//         handleResize(); // Initial setup

//         window.addEventListener('resize', handleResize);

//         return () => {
//             stopSlider();
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [startSlider, stopSlider]);

//     const handleDotClick = (index) => {
//         stopSlider();
//         setCurrentSlide(index);
//         if (window.innerWidth > 550) {
//             startSlider();
//         }
//     };

//     const handleMouseOver = () => {
//         stopSlider();
//     };

//     const handleMouseOut = () => {
//         if (window.innerWidth > 550) {
//             startSlider();
//         }
//     };

//     useEffect(() => {
//         const observerOptions = {
//             threshold: 0.1,
//         };

//         const observerCallback = (entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('visible');
//                 } else {
//                     entry.target.classList.remove('visible');
//                 }
//             });
//         };

//         const observer = new IntersectionObserver(observerCallback, observerOptions);
//         const items = document.querySelectorAll('.up_events-container, .up_event-item');

//         items.forEach(item => observer.observe(item));

//         return () => {
//             items.forEach(item => observer.unobserve(item));
//         };
//     }, [events]);

//     // Function to handle "BOOK NOW" button click
//     const handleBookNow = (event) => {
//         setSelectedEvent(event); // Store the selected event
//         addToCart(event, 1); // Add the event to the cart
//         setIsCartModalOpen(true); // Open the cart modal
//     };

//     return (
//         <div className='total-event'>
//             <Headname name='Events' pic={eventspic} />

//             <div className="up_events-container">
//                 <h1>Upcoming Events</h1>
//                 <div
//                     className="up_events-slider-wrapper"
//                     ref={sliderRef}
//                     onMouseOver={handleMouseOver}
//                     onMouseOut={handleMouseOut}
//                 >
//                     <div className="up_events-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//                         {slides.map((slide, slideIndex) => (
//                             <div key={slideIndex} className="up_events-slide">
//                                 {slide.map(event => (
//                                     <div key={event._id} className="up_event-item">
//                                         <img src={event.img} alt={event.title} className="up_event-image" />
//                                         <div className="up_event-details">
//                                             <h3>{event.title}</h3>
//                                             <p className="up_event-date">{event.date}</p>
//                                             <div className="up_event-buttons">
//                                                 <button className="up_buy-now-btn" onClick={() => handleBookNow(event)}>BOOK NOW</button>
//                                                 <Link to={`/event/${event._id}`} className="up_read-more-btn">READ MORE</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="dots-container">
//                     {slides.map((_, index) => (
//                         <span
//                             key={index}
//                             className={`dot ${currentSlide === index ? 'active' : ''}`}
//                             onClick={() => handleDotClick(index)}
//                         ></span>
//                     ))}
//                 </div>
//             </div>
//             <div className='home-newsletter-div'><Newsletter /></div>

//             {isCartModalOpen && <CartModal onClose={() => setIsCartModalOpen(false)} />} {/* Render the modal */}
//         </div>
//     );
// };

// export default Events;



import React, { useEffect, useState, useRef, useMemo, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import Headname from '../Headname';
import Newsletter from '../Newsletter';
import eventspic from './Events_webp_comp.webp';
import { CartContext } from '../../contexts/CartContext';
import CartModal from '../CartModal';
// import './Events.css';

const Events = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [events, setEvents] = useState([]);
    const timerRef = useRef(null);
    const sliderRef = useRef(null);
    const { addToCart } = useContext(CartContext);

    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const API = process.env.REACT_APP_API_URL;


    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`${API}/api/events`);
                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }
                const json = await response.json();
                setEvents(json);
                console.log("Events fetched:", json);
            } catch (error) {
                console.error('Error fetching events:', error);
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
        if (window.innerWidth <= 550) {
            return;
        }
        stopSlider(); // Clear any existing interval before starting a new one
        timerRef.current = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 7000);
    }, [slides.length]);

    const stopSlider = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 550) {
                startSlider();
            } else {
                stopSlider();
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            stopSlider();
            window.removeEventListener('resize', handleResize);
        };
    }, [startSlider, stopSlider]);

    const handleDotClick = (index) => {
        stopSlider();
        setCurrentSlide(index);
        if (window.innerWidth > 550) {
            startSlider();
        }
    };

    const handleMouseOver = () => {
        stopSlider();
    };

    const handleMouseOut = () => {
        if (window.innerWidth > 550) {
            startSlider();
        }
    };

    useEffect(() => {
        const observerOptions = {
            threshold: [0, 1],
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    setTimeout(() => {
                        entry.target.classList.add('reset-top');
                    }, 30); // Duration of the first animation
                } else {
                    entry.target.classList.remove('visible', 'reset-top');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const items = document.querySelectorAll('.up_events-container, .up_event-item');

        items.forEach(item => observer.observe(item));

        return () => {
            items.forEach(item => observer.unobserve(item));
        };
    }, [events]);

    const handleBookNow = (event) => {
        setSelectedEvent(event);
        addToCart(event, 1);
        setIsCartModalOpen(true);
    };

    useEffect(() => {
        let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        const handleScroll = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop) {
            // Scrolling down
            document.body.classList.remove('scroll-up');
          } else {
            // Scrolling up
            document.body.classList.add('scroll-up');
          }
          lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

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
                                                <button className="up_buy-now-btn" onClick={() => handleBookNow(event)}>BOOK NOW</button>
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
            <div className='home-newsletter-div'><Newsletter /></div>

            {isCartModalOpen && <CartModal onClose={() => setIsCartModalOpen(false)} />} 
        </div>
    );
};

export default Events;


