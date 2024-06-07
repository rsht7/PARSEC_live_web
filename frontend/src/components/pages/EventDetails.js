import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Headname from '../Headname';
import homepic2 from './homepic2.jpeg';
import facebook3 from '../compassets/facebook3.png';
import instagram from '../compassets/instagram.png';
import shareicon from './shareicon.png'
import Newsletter from '../Newsletter';
import{Link} from 'react-router-dom'

function EventDetails() {

  useEffect(()=>{
    window.scrollTo(0,0);
},[]);

  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event details using the ID from the URL
    fetch(`/api/events/${id}`)
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error('Error fetching event details:', error));
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className="total">
      <Headname name={<Link to='/event' style={{textDecoration:'none',color:'white',}}>Events</Link>} eventname={`> ${event.title}`} pic={homepic2} />
      <div className='back-link'>  <Link to='/event'>&#10094; ALL EVENTS </Link></div>
      <div className="eventDet-container">
        <div className="page-body">
          <div className="page-container">
            <div className="left-side">
              <div className="event-info">
                <h4 className="event-date" style={{ }}>{event.date}</h4>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-text">{event.text}</p>
                <p className="event-text">{event.text}</p>
              </div>
              <img src={event.img} alt="Event-Image" className="event-image-phone" />
              <div className="time-location">
                <h4>Time & Location</h4>
                <p className="event-date-time">{event.date}, {event.time}</p>
                <p className="event-location">{event.location}</p>
                <p className="event-terms">Terms and Conditions</p>
              </div>
              <div className="share">
                <p>Share this event</p>
                <div className="icons">
                  {/* Add your share icons here */}
                  <span><img src={facebook3} alt="Facebook Icon" /></span>
                  <span><img src={instagram} alt="Instagram Icon" /></span>
                  <span><img src={shareicon} alt="share Icon" /></span>
                </div>
              </div>
            </div>
            <div className="right-side">
              <img src={event.img} alt="Event-Image" className="event-image" />
              <div className='ticket-booking'>
                <h3>Book Tickets</h3>
                <div className='form-labels'>
                  <p className='f-l1'>Quantity</p>
                  <p>Ticket price</p>
                </div>
                <form className='ticket-form'>
                  <input
                    type='number'
                    id='quantity'
                    name='quantity'
                    min='1'
                    defaultValue='1'
                  
                  />
                  <p>$25.00</p>
                  <button>ADD TO CART</button>
                </form>

              </div>
              <div className="share-phone">
                <p>Share this event</p>
                <div className="icons-phone">
                  {/* Add your share icons here */}
                  <span><img src={facebook3} alt="Facebook Icon" /></span>
                  <span><img src={instagram} alt="Instagram Icon" /></span>
                  <span><img src={shareicon} alt="share Icon" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      
    </div>
  );
}

export default EventDetails;
