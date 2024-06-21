import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Singleevent from '../Singleevent';
import logo from './logo.png';
import playcircle from './playbtn-circle.png'
import playtriangle from './playbtn.png' 
// import homepic2 from './homepic2.jpeg';
import Newsletter from '../Newsletter';
// import parsecvid from './parsecvid.mp4'


const Home = () => {
    const [events, setEvents] = useState([]);
    // const eventContainerRef = useRef(null);

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

    // useEffect(() => {
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

    //     const eventItems = eventContainerRef.current.querySelectorAll('.event-item');
    //     eventItems.forEach((item) => {
    //         observer.observe(item);
    //     });

    //     return () => {
    //         observer.disconnect();
    //     };
    // }, [events]);

    // const displayedEvents = events.slice(0, 3);

    const displayedEvents = events.slice(1, 2);

    const videoRef = useRef(null);
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

    const eventWrapper = document.querySelector('.event-wrapper');
    if (eventWrapper) {
        observer.observe(eventWrapper);
    }

    return () => {
        observer.disconnect();
    };
}, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    if (videoElement) {
      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);
      videoElement.addEventListener('ended', handleEnded);

      // Cleanup event listeners on component unmount
      return () => {
        videoElement.removeEventListener('play', handlePlay);
        videoElement.removeEventListener('pause', handlePause);
        videoElement.removeEventListener('ended', handleEnded);
      };
    };
  }, []);

  const videoUrl = "https://res.cloudinary.com/dytwtr49x/video/upload/v1718987668/landscape_Groove_Edit_Parsec_Teaser_hgtqtn.mp4";

  

    return (
        <div className="home">
            <div className="bglogo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="main" >
                <video  ref={videoRef}  id='homevideo' src={videoUrl}  alt="Home" className='main-img' />
                {/* <img className='main-img' alt='Home' src={homepic2}></img> */}
                {!isPlaying && ( 
                <>
                    <h1>Welcome To Parsec Live</h1>
                </>)}
                {!isPlaying && ( 
                <> 
                    <div className='icondiv'  >
                        <img src={playcircle} className='circle-icon' onClick={toggleVideo}></img>
                        <div className='triangle-div' onClick={toggleVideo} ><img src={playtriangle} className='triangle-icon'></img>
                        </div>
                    </div>
                </>)}    
                {!isPlaying && ( 
                <>    <div        className="herovid-see-more-container">
                    <Link to="/event" className="herovid-see-more-btn">SEE MORE</Link>
                    </div>
                    
                    
                </>)}
                
            </div>

            <div className='event-wrapper'>
                    <p className='upc-event'>Upcoming Events</p>
                    <div className='home-event'>
                        {displayedEvents && displayedEvents.map((event) => (
                            <Singleevent key={event._id} event = {event} />
                        ))}

                    </div>
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
                                    <button className="buy-now-btn">GET TICKETS</button>
                                    <Link to={`/event/${event._id}`} className="read-more-btn">READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="see-more-container">
                    <Link to="/event" className="see-more-btn">SEE MORE</Link>
                </div>
            </div> */}
            <div className='home-newsletter-div'><Newsletter /></div>
        </div>
    );
}

export default Home;


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


