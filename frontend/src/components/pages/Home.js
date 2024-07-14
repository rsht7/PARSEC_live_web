// import { useEffect, useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import Singleevent from '../Singleevent';
// import logo from './logo.png';
// import playcircle from './playbtn-circle.png'
// import playtriangle from './playbtn.png' 
// import homepic2 from './homepic2.jpeg';
// import Newsletter from '../Newsletter';
// // import parsecvid from './parsecvid.mp4'


// const Home = () => {
//     const [events, setEvents] = useState([]);
//     // const eventContainerRef = useRef(null);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     useEffect(() => {
//         const fetchEvents = async () => {
//             const response = await fetch('/api/events');
//             const json = await response.json();

//             if (response.ok) {
//                 setEvents(json);
//             }
//         };
//         fetchEvents();
//     }, []);

//     // useEffect(() => {
//     //     const observer = new IntersectionObserver(
//     //         (entries) => {
//     //             entries.forEach((entry) => {
//     //                 if (entry.isIntersecting) {
//     //                     entry.target.classList.add('animate');
//     //                 } else {
//     //                     entry.target.classList.remove('animate');
//     //                 }
//     //             });
//     //         },
//     //         { threshold: 0.1 }
//     //     );

//     //     const eventItems = eventContainerRef.current.querySelectorAll('.event-item');
//     //     eventItems.forEach((item) => {
//     //         observer.observe(item);
//     //     });

//     //     return () => {
//     //         observer.disconnect();
//     //     };
//     // }, [events]);

//     // const displayedEvents = events.slice(0, 3);

//     const displayedEvents = events.slice(1, 2);

//     const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const toggleVideo = () => {
//     if (videoRef.current) {
//       if (videoRef.current.paused) {
//         videoRef.current.play();
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   };

  

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('animate');
//                 } else {
//                     entry.target.classList.remove('animate');
//                 }
//             });
//         },
//         { threshold: 0.1 }
//     );

//     const eventWrapper = document.querySelector('.event-wrapper');
//     if (eventWrapper) {
//         observer.observe(eventWrapper);
//     }

//     return () => {
//         observer.disconnect();
//     };
// }, []);

//   useEffect(() => {
//     const videoElement = videoRef.current;

//     const handlePlay = () => setIsPlaying(true);
//     const handlePause = () => setIsPlaying(false);
//     const handleEnded = () => setIsPlaying(false);

//     if (videoElement) {
//       videoElement.addEventListener('play', handlePlay);
//       videoElement.addEventListener('pause', handlePause);
//       videoElement.addEventListener('ended', handleEnded);

//       // Cleanup event listeners on component unmount
//       return () => {
//         videoElement.removeEventListener('play', handlePlay);
//         videoElement.removeEventListener('pause', handlePause);
//         videoElement.removeEventListener('ended', handleEnded);
//       };
//     };
//   }, []);

//   const videoUrl = "https://res.cloudinary.com/dytwtr49x/video/upload/v1718987668/landscape_Groove_Edit_Parsec_Teaser_hgtqtn.mp4";

  

//     return (
//         <div className="home">
//             <div className="bglogo">
//                 <img src={logo} alt="Logo" />
//             </div>
//             <div className="main" >
//                 <video  ref={videoRef}  id='homevideo' src={videoUrl}  alt="Home" className='main-img' />
//                 {/* <img className='main-img' alt='Home' src={homepic2}></img>  */}
//                 {!isPlaying && ( 
//                 <>
//                     <h1>Welcome To Parsec Live</h1>
//                 </>)}
//                 {!isPlaying && ( 
//                 <> 
//                     <div className='icondiv'  >
//                         <img src={playcircle} className='circle-icon' onClick={toggleVideo}></img>
//                         <div className='triangle-div' onClick={toggleVideo} ><img src={playtriangle} className='triangle-icon'></img>
//                         </div>
//                     </div>
//                 </>)}    
//                 {!isPlaying && ( 
//                 <>    <div        className="herovid-see-more-container">
//                     <Link to="/event" className="herovid-see-more-btn">SEE MORE</Link>
//                     </div>
                    
                    
//                 </>)}
                
//             </div>

//             <div className='event-wrapper'>
//                     <p className='upc-event'>Upcoming Events</p>
//                     <div className='home-event'>
//                         {displayedEvents && displayedEvents.map((event) => (
//                             <Singleevent key={event._id} event = {event} />
//                         ))}

//                     </div>
//             </div>
            // {/* <div className="events-container" ref={eventContainerRef}>
            //     <h1>Upcoming Events</h1>
            //     <div className="events-list">
            //         {displayedEvents.map((event, index) => (
            //             <div 
            //                 key={event._id} 
            //                 className={`event-item ${index === 1 ? 'middle-event' : 'corner-event'}`}
            //             >
            //                 <img src={event.img} alt={event.title} className="event-image" />
            //                 <div className="event-details">
            //                     <h3>{event.title}</h3>
            //                     <p className="event-date">{event.date}</p>
            //                     <div className="event-buttons">
            //                         <button className="buy-now-btn">GET TICKETS</button>
            //                         <Link to={`/event/${event._id}`} className="read-more-btn">READ MORE</Link>
            //                     </div>
            //                 </div>
            //             </div>
            //         ))}
            //     </div>
            //     <div className="see-more-container">
            //         <Link to="/event" className="see-more-btn">SEE MORE</Link>
            //     </div>
            // </div> */}
//             <div className='home-newsletter-div'><Newsletter /></div>
//         </div>
//     );
// }

// export default Home;


// import { useEffect, useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import Singleevent from '../Singleevent';
// import logo from './logo.png';
// import playcircle from './playbtn-circle.png';
// import playtriangle from './playbtn.png';
// import Newsletter from '../Newsletter';

// const Home = () => {
//   const [events, setEvents] = useState([]);
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const toggleVideo = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//         setIsPlaying(false); // Update state to show controls
//       } else {
//         videoRef.current.play();
//         setIsPlaying(true); // Update state to hide controls
//       }
//     }
//   };

//   const handleVideoClick = () => {
//     toggleVideo();
//   };

//   useEffect(() => {
//     const videoElement = videoRef.current;

//     const handlePlay = () => setIsPlaying(true);
//     const handlePause = () => setIsPlaying(false);
//     const handleEnded = () => setIsPlaying(false);

//     if (videoElement) {
//       videoElement.addEventListener('play', handlePlay);
//       videoElement.addEventListener('pause', handlePause);
//       videoElement.addEventListener('ended', handleEnded);
//       videoElement.addEventListener('click', handleVideoClick); // Add event listener for click within video

//       return () => {
//         videoElement.removeEventListener('play', handlePlay);
//         videoElement.removeEventListener('pause', handlePause);
//         videoElement.removeEventListener('ended', handleEnded);
//         videoElement.removeEventListener('click', handleVideoClick); // Remove event listener on unmount
//       };
//     }
//   }, []);

//   const videoUrl = "https://res.cloudinary.com/dytwtr49x/video/upload/v1718987668/landscape_Groove_Edit_Parsec_Teaser_hgtqtn.mp4";

//   return (
//     <div className="home">
//       <div className="bglogo">
//         <img src={logo} alt="Logo" />
//       </div>
//       <div className="main">
//         <video ref={videoRef} id="homevideo" src={videoUrl} alt="Home" className="main-img" />
//         {!isPlaying && (
//           <>
//             <h1>Welcome To Parsec Live</h1>
//             <div className="icondiv">
//               <img src={playcircle} className="circle-icon" onClick={toggleVideo} />
//               <div className="triangle-div">
//                 <img src={playtriangle} className="triangle-icon" />
//               </div>
//             </div>
//             <div className="herovid-see-more-container">
//               <Link to="/event" className="herovid-see-more-btn">SEE MORE</Link>
//             </div>
//           </>
//         )}
//       </div>

//       <div className="event-wrapper">
//         <p className="upc-event">Upcoming Events</p>
//         <div className="home-event">
//           {events.slice(1, 2).map((event) => (
//             <Singleevent key={event._id} event={event} />
//           ))}
//         </div>
//       </div>

//       <div className="home-newsletter-div">
//         <Newsletter />
//       </div>
//     </div>
//   );
// };

// export default Home;


// import { useEffect, useState, useRef, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import Singleevent from '../Singleevent';
// import logo from './logo.png';
// import playcircle from './playbtn-circle.png'
// import playtriangle from './playbtn.png' 
// // import homepic2 from './homepic2.jpeg';
// import Newsletter from '../Newsletter';
// // import { CartContext } from '../../contexts/CartContext';
// // import CartModal from '../CartModal';

// const Home = () => {
//     const [events, setEvents] = useState([]);
//     const eventContainerRef = useRef(null);

//     // const { addToCart } = useContext(CartContext);

//     // const [isCartModalOpen, setIsCartModalOpen] = useState(false);
//     // const [selectedEvent, setSelectedEvent] = useState(null);


//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     useEffect(() => {
//         const fetchEvents = async () => {
//             const response = await fetch('/api/events');
//             const json = await response.json();

//             if (response.ok) {
//                 setEvents(json);
//             }
//         };
//         fetchEvents();
//     }, []);

//     // useEffect(() => {
//     //             const observer = new IntersectionObserver(
//     //                 (entries) => {
//     //                     entries.forEach((entry) => {
//     //                         if (entry.isIntersecting) {
//     //                             entry.target.classList.add('animate');
//     //                         } else {
//     //                             entry.target.classList.remove('animate');
//     //                         }
//     //                     });
//     //                 },
//     //                 { threshold: 0.1 }
//     //             );
        
//     //             const eventItems = eventContainerRef.current.querySelectorAll('.event-item');
//     //             eventItems.forEach((item) => {
//     //                 observer.observe(item);
//     //             });
        
//     //             return () => {
//     //                 observer.disconnect();
//     //             };
//     //         }, [events]);

//     // const displayedEvents = events.slice(0, 3);

//     // useEffect(() => {
//     //     let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
//     //     const handleScroll = () => {
//     //       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     //       if (scrollTop > lastScrollTop) {
//     //         // Scrolling down
//     //         document.body.classList.remove('scroll-up');
//     //       } else {
//     //         // Scrolling up
//     //         document.body.classList.add('scroll-up');
//     //       }
//     //       lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
//     //     };
      
//     //     window.addEventListener('scroll', handleScroll);
      
//     //     return () => {
//     //       window.removeEventListener('scroll', handleScroll);
//     //     };
//     //   }, []);

//     // const handleBookNow = (event) => {
//     //     setSelectedEvent(event);
//     //     addToCart(event, 1);
//     //     setIsCartModalOpen(true);
//     // };

//     const displayedEvents = events.slice(1, 2);

//     const videoRef = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(false);

//     const toggleVideo = () => {
//         if (videoRef.current) {
//             if (videoRef.current.paused) {
//                 videoRef.current.play();
//             } else {
//                 videoRef.current.pause();
//             }
//         }
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             if (videoRef.current && !videoRef.current.paused) {
//                 videoRef.current.pause();
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add('animate');
//                     } else {
//                         entry.target.classList.remove('animate');
//                     }
//                 });
//             },
//             { threshold: 0.1 }
//         );

        

//         const eventWrapper = document.querySelector('.event-wrapper');
//         if (eventWrapper) {
//             observer.observe(eventWrapper);
//         }

//         return () => {
//             observer.disconnect();
//         };
//     }, []);

//     // useEffect(() => {
//     //     const observerOptions = {
//     //         threshold: 0.1,
//     //     };

//     //     const observerCallback = (entries) => {
//     //         entries.forEach(entry => {
//     //             if (entry.isIntersecting) {
//     //                 entry.target.classList.add('visible');
//     //             } else {
//     //                 entry.target.classList.remove('visible');
//     //             }
//     //         });
//     //     };

//     //     const observer = new IntersectionObserver(observerCallback, observerOptions);
//     //     const items = document.querySelectorAll('.event-wrapper, .home-event');

//     //     items.forEach(item => observer.observe(item));

//     //     return () => {
//     //         items.forEach(item => observer.unobserve(item));
//     //     };
//     // }, [events]);

//     // useEffect(() => {
//     //     let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
//     //     const handleScroll = () => {
//     //       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     //       if (scrollTop > lastScrollTop) {
//     //         // Scrolling down
//     //         document.body.classList.remove('scroll-up');
//     //       } else {
//     //         // Scrolling up
//     //         document.body.classList.add('scroll-up');
//     //       }
//     //       lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
//     //     };
      
//     //     window.addEventListener('scroll', handleScroll);
      
//     //     return () => {
//     //       window.removeEventListener('scroll', handleScroll);
//     //     };
//     //   }, []);


//     useEffect(() => {
//         const videoElement = videoRef.current;

//         const handlePlay = () => setIsPlaying(true);
//         const handlePause = () => setIsPlaying(false);
//         const handleEnded = () => setIsPlaying(false);

//         if (videoElement) {
//             videoElement.addEventListener('play', handlePlay);
//             videoElement.addEventListener('pause', handlePause);
//             videoElement.addEventListener('ended', handleEnded);

//             // Cleanup event listeners on component unmount
//             return () => {
//                 videoElement.removeEventListener('play', handlePlay);
//                 videoElement.removeEventListener('pause', handlePause);
//                 videoElement.removeEventListener('ended', handleEnded);
//             };
//         };
//     }, []);

//     const videoUrl = "https://res.cloudinary.com/dytwtr49x/video/upload/v1718987668/landscape_Groove_Edit_Parsec_Teaser_hgtqtn.mp4";

//     return (
//         <div className="home">
//             <div className="bglogo">
//                 <img src={logo} alt="Logo" />
//             </div>
//             <div className="main">
//                 <video ref={videoRef} id='homevideo' src={videoUrl} alt="Home" className='main-img' />
//                 {!isPlaying && (
//                     <>
//                         <h1>Welcome To Parsec Live</h1>
//                     </>
//                 )}
//                 {!isPlaying && (
//                     <>
//                         <div className='icondiv'>
//                             <img src={playcircle} className='circle-icon' onClick={toggleVideo} />
//                             <div className='triangle-div' onClick={toggleVideo}>
//                                 <img src={playtriangle} className='triangle-icon' />
//                             </div>
//                         </div>
//                     </>
//                 )}
//                 {!isPlaying && (
//                     <>
//                         <div className="herovid-see-more-container">
//                             <Link to="/event" className="herovid-see-more-btn">SEE MORE</Link>
//                         </div>
//                     </>
//                 )}
//             </div>

//              <div className='event-wrapper'>
//                 <p className='upc-event'>Upcoming Events</p>
//                 <div className='home-event'>
//                     {displayedEvents && displayedEvents.map((event) => (
//                         <Singleevent key={event._id} event={event} />
//                     ))}
//                 </div>
//             </div> 

//             {/* <div className="events-container" ref={eventContainerRef}>
//                 <h1>Upcoming Events</h1>
//                 <div className="events-list">
//                     {displayedEvents.map((event, index) => (
//                         <div 
//                             key={event._id} 
//                             className={`event-item ${index === 1 ? 'middle-event' : 'corner-event'}`}
//                         >
//                             <img src={event.img} alt={event.title} className="event-image" />
//                             <div className="event-details">
//                                 <h3>{event.title}</h3>
//                                 <p className="event-date">{event.date}</p>
//                                 <div className="event-buttons">
//                                 <button className="buy-now-btn" onClick={() => handleBookNow(event)}>BOOK NOW</button>
                                    
//                                     <Link to={`/event/${event._id}`} className="read-more-btn">READ MORE</Link>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="see-more-container">
//                     <Link to="/event" className="see-more-btn">SEE MORE</Link>
//                 </div>
//                 {isCartModalOpen && <CartModal onClose={() => setIsCartModalOpen(false)} />} 
//             </div> */}

//             <div className='home-newsletter-div'><Newsletter /></div>
//         </div>
//     );
// }

// export default Home;


// import { useEffect, useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import Singleevent from '../Singleevent';
// import logo from './logo.png';
// import playcircle from './playbtn-circle.png';
// import playtriangle from './playbtn.png';
// import Newsletter from '../Newsletter';

// const Home = () => {
//     const [events, setEvents] = useState([]);
//     // const eventContainerRef = useRef(null);

//     const [video, setVideo] = useState([]);

//     const [isVisible, setIsVisible] = useState(false);
//   const eventWrapperRef = useRef(null);
// //   const debounceTimeoutRef = useRef(null);



//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     useEffect(() => {
//         const fetchEvents = async () => {
//             const response = await fetch('/api/events');
//             const json = await response.json();

//             if (response.ok) {
//                 setEvents(json);
//             }
//         };
//         fetchEvents();
//     }, []);

//     useEffect(() => {
//         const fetchVideo = async () => {
//             const response = await fetch('/api/videourl');
//             const json = await response.json();

//             if (response.ok) {
//                 setVideo(json);
//             }
//         };
//         fetchVideo();
//     }, []);

//     const displayedEvents = events.slice(1, 2);

//     const displayedVideo = video.slice(0,1);

//     const videoRef = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(false);

//     const toggleVideo = () => {
//         if (videoRef.current) {
//             if (videoRef.current.paused) {
//                 videoRef.current.play();
//             } else {
//                 videoRef.current.pause();
//             }
//         }
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             if (videoRef.current && !videoRef.current.paused) {
//                 videoRef.current.pause();
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

    

    

//     // useEffect(() => {
//     //     const handleScroll = () => {
//     //         const eventWrapper = document.querySelector('.event-wrapper');
//     //         if (eventWrapper) {
//     //             const rect = eventWrapper.getBoundingClientRect();
//     //             const isPartiallyVisible = rect.top < window.innerHeight && rect.bottom >= 0;
//     //             const isResetCondition = rect.bottom <= -2;

//     //             if (isPartiallyVisible) {
//     //                 eventWrapper.classList.add('animate');
//     //             } else if (isResetCondition) {
//     //                 eventWrapper.classList.remove('animate');
//     //             }
//     //         }
//     //     };

//     //     window.addEventListener('scroll', handleScroll);

//     //     handleScroll(); // Run on mount to check initial position

//     //     return () => {
//     //         window.removeEventListener('scroll', handleScroll);
//     //     };
//     // }, []);

//     useEffect(() => {



//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add('animate');
//                     } 
//                     else {
//                         entry.target.classList.remove('animate');
//                     }
//                 });
//             },
//             {
//                 threshold: [0,1] // Adjusted to handle complete visibility and out of visibility
//             }
//         );

//         const eventWrapper = document.querySelector('.event-wrapper');
//         if (eventWrapper) {
//             observer.observe(eventWrapper);
//         }

//         return () => {
//             observer.disconnect();
//         };
//     }, []);

//     // useEffect(() => {
//     //     const handleScroll = () => {
//     //         const eventWrapper = document.querySelector('.event-wrapper');
//     //         if (eventWrapper) {
//     //             const rect = eventWrapper.getBoundingClientRect();
//     //             // const isPartiallyVisible = rect.top < window.innerHeight && rect.bottom >= 0;
//     //             const isResetCondition = rect.bottom <= -2;

                
//     //              if (isResetCondition) {
//     //                 eventWrapper.classList.remove('animate');
//     //             }
//     //         }
//     //     };

//     //     window.addEventListener('scroll', handleScroll);

//     //     handleScroll(); // Run on mount to check initial position

//     //     return () => {
//     //         window.removeEventListener('scroll', handleScroll);
//     //     };
//     // }, []);

    
//     useEffect(() => {
//         const videoElement = videoRef.current;

//         const handlePlay = () => setIsPlaying(true);
//         const handlePause = () => setIsPlaying(false);
//         const handleEnded = () => setIsPlaying(false);

//         if (videoElement) {
//             videoElement.addEventListener('play', handlePlay);
//             videoElement.addEventListener('pause', handlePause);
//             videoElement.addEventListener('ended', handleEnded);

//             return () => {
//                 videoElement.removeEventListener('play', handlePlay);
//                 videoElement.removeEventListener('pause', handlePause);
//                 videoElement.removeEventListener('ended', handleEnded);
//             };
//         }
//     }, []);

//     // const videoUrl = "https://res.cloudinary.com/dytwtr49x/video/upload/v1718987668/landscape_Groove_Edit_Parsec_Teaser_hgtqtn.mp4";

//     const videoUrl = `${displayedVideo.url}`
//     return (
//         <div className="home">
//             <div className="bglogo">
//                 <img src={logo} alt="Logo" />
//             </div>
//             <div className="main">
//                 <video ref={videoRef} id='homevideo' src={videoUrl} alt="Home" className='main-img' />
//                 {!isPlaying && (
//                     <>
//                         <h1>Welcome To Parsec Live</h1>
//                     </>
//                 )}
//                 {!isPlaying && (
//                     <>
//                         <div className='icondiv'>
//                             <img src={playcircle} className='circle-icon' onClick={toggleVideo} />
//                             <div className='triangle-div' onClick={toggleVideo}>
//                                 <img src={playtriangle} className='triangle-icon' />
//                             </div>
//                         </div>
//                     </>
//                 )}
//                 {!isPlaying && (
//                     <>
//                         <div className="herovid-see-more-container">
//                             <Link to="/event" className="herovid-see-more-btn">SEE MORE</Link>
//                         </div>
//                     </>
//                 )}
//             </div>

//             <div className='event-wrapper' ref={eventWrapperRef}>
//                 <p className='upc-event'>Upcoming Events</p>
//                 {/* <div className='home-event'> */}
//                 <div className={`home-event ${isVisible ? 'slide-up' : ''}`}>
//                     {displayedEvents && displayedEvents.map((event) => (
//                         <Singleevent key={event._id} event={event} />
//                     ))}
//                 </div>
//             </div>

//             <div className='home-newsletter-div'><Newsletter /></div>
//         </div>
//     );
// }

// export default Home;





import { useEffect, useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import Singleevent from '../Singleevent';
import logo from './logo.png';
// import playcircle from './playbtn-circle.png';
// import playtriangle from './playbtn.png';

import sound from './sound4.png';
import mute from'./mute2.png';
import Newsletter from '../Newsletter';
import { CartContext } from '../../contexts/CartContext';
import CartModal from '../CartModal';
// import useDissolve from './Dissolve'

const Home = () => {
    const API = process.env.REACT_APP_API_URL;

    const [events, setEvents] = useState([]);
    const [video, setVideo] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const eventWrapperRef = useRef(null);
    // const eventContainerRef = useRef(null)

    const [dissolveState, setDissolveState] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDissolveState(true), 5000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, []);


       
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch(`${API}/api/events`);
            const json = await response.json();

            if (response.ok) {
                setEvents(json);
            }
        };
        fetchEvents();
    }, []);







    // 3 EVENTS CODE


    // const { addToCart } = useContext(CartContext);
    // const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    // const [selectedEvent, setSelectedEvent] = useState(null);




    // useEffect(() => {
    //             const observer = new IntersectionObserver(
    //                 (entries) => {
    //                     entries.forEach((entry) => {
    //                         if (entry.isIntersecting) {
    //                             entry.target.classList.add('animate');
    //                         } else {
    //                             entry.target.classList.remove('animate');
    //                         }
    //                     });
    //                 },
    //                 { threshold: 0.1 }
    //             );
        
    //             const eventItems = eventContainerRef.current.querySelectorAll('.event-item');
    //             eventItems.forEach((item) => {
    //                 observer.observe(item);
    //             });
        
    //             return () => {
    //                 observer.disconnect();
    //             };
    //         }, [events]);

    // const displayedEvents = events.slice(0, 3);



    // const handleBookNow = (event) => {
    //     setSelectedEvent(event);
    //     addToCart(event, 1);
    //     setIsCartModalOpen(true);
    // };


// END OF 3 EVENTS CODE REQUIREMENTS




    useEffect(() => {
        const fetchVideo = async () => {
            const response = await fetch(`${API}/api/videourl`);
            const json = await response.json();

            if (response.ok) {
                setVideo(json);
            }
        };
        fetchVideo();
    }, []);

    const displayedEvents = events.slice(1, 2);
    const displayedVideo = video ? video[1] : null;

    const videoRef = useRef(null);
    const textRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleVideo = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (videoRef.current && !videoRef.current.paused) {
    //             videoRef.current.pause();
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } 
                    else {
                        entry.target.classList.remove('animate');
                    }
                });
            },
            {
                threshold: [0,1] // Adjusted to handle complete visibility and out of visibility
            }
        );

        const eventWrapper = document.querySelector('.event-wrapper');
        if (eventWrapper) {
            observer.observe(eventWrapper);
        }

        return () => {
            observer.disconnect();
        };
    }, []);



   
    

    

    // useEffect(()=>{

    //     const textOverlay = textRef.current;

    //     // Text fade in and fade out effect
    //     // setTimeout(() => {
    //     //     textOverlay.classList.add('fade-in');
    //     // }, 3000);

    //     setTimeout(() => {
    //         // textOverlay.classList.remove('fade-in');
    //         textOverlay.classList.add('fade-out');
    //     }, 3000); // 5 seconds display + 1 second fade in

    //     setTimeout(() => {
    //         textOverlay.style.display = 'none';
    //     }, 5000); // Total 8 seconds (5 seconds display + 1 second fade in + 2 seconds fade out)
    // }, []);


    const toggleMute = () => {
        const video = videoRef.current;
        video.muted = !video.muted;
        const muteButton = document.getElementById('muteButton');
        if (video.muted) {
            muteButton.src = mute; // Change to your mute icon
        } else {
            muteButton.src = sound; // Change to your unmute icon
        }
    };

    // const text = "Parsec Live";

    const words = ["Parsec", "Live"];



    const videoUrl = displayedVideo ? displayedVideo.url : '';

    return (
        <div className="home">
            <div className="bglogo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="main">
                <video autoPlay loop muted ref={videoRef} id='homevideo' src={videoUrl} alt="Home" className='main-img' />
                
                {/* <h1 id='textOverlay' ref={textRef}>Parsec Live</h1> */}
                {/* <h1 id="textOverlay">
                    {text.split('').map((char, index) => (
                    <span
                     key={index}
                     className={dissolveState ? 'dissolve' : ''}
                     style={{ '--delay': `${index * 0.2}s` }}
                     >
                     {char}
                    </span>
                    ))}
                </h1> */}

            <h1 id="textOverlay">
                    {words.map((word, wordIndex) => (
                    <span key={wordIndex} style={{ marginRight: '0.5em' }}>
                    {word.split('').map((char, charIndex) => (
                    <span
                        key={charIndex}
                        className={dissolveState ? 'dissolve' : ''}
                        style={{ '--delay': `${(wordIndex * word.length + charIndex) * 0.2}s` }}
                    >
                        {char}
                    </span>
                    ))}
                </span>
                ))}
            </h1>
                
                    
                {/* <div className='icondiv'>
                    <img src={playcircle} className='circle-icon' id='muteButton' onClick={toggleMute}/>
                    <div className='triangle-div' >
                        <img src={playtriangle} className='triangle-icon' />
                    </div>
                </div> */}

                <div className='mute-icon-div'>
                    <img src={mute} id='muteButton' onClick={toggleMute}/>
                </div>
                    
            
                
            </div>

            <div className='event-wrapper' ref={eventWrapperRef}>
                <p className='upc-event'>Upcoming Events</p>
                <div className={`home-event ${isVisible ? 'slide-up' : ''}`}>
                    {displayedEvents && displayedEvents.map((event) => (
                        <Singleevent key={event._id} event={event} />
                    ))}
                </div>
            </div>

            <div className="herovid-see-more-container">
                <Link to="/event" className="herovid-see-more-btn">OTHER EVENTS</Link>
            </div>

            {/* <div className="events-container" ref={eventContainerRef}>
                <h1>Upcoming Events</h1>
                <div className="events-list">
                   {displayedEvents.map((event, index) => (
                        <div 
                            key={event._id} 
                            className={`event-item ${index === 1 ? 'middle-event' : 'corner-event'}`}
                        >
                            <img src={event.img} alt={event.title} className="event-image" />
                            <div className="event-details">
                                <h3>{event.title}</h3>
                                <p className="event-date">{event.date}</p>
                                <div className="event-buttons">
                                <button className="buy-now-btn" onClick={() => handleBookNow(event)}>BOOK NOW</button>
                                    
                                    <Link to={`/event/${event._id}`} className="read-more-btn">READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="see-more-container">
                   <Link to="/event" className="see-more-btn">SEE MORE</Link>
                </div>
                {isCartModalOpen && <CartModal onClose={() => setIsCartModalOpen(false)} />} 
            </div>  */}


            <div className='home-newsletter-div'><Newsletter /></div>
        </div>
    );
}

export default Home;
