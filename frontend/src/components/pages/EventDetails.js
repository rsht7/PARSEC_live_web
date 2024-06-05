import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Headname from '../Headname';
import homepic2 from './homepic2.jpeg';
import facebook3 from '../compassets/facebook3.png';
import instagram from '../compassets/instagram.png';
import Newsletter from '../Newsletter';
import{Link} from 'react-router-dom'

function EventDetails() {
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
      <Headname name={`Events > ${event.title}`} pic={homepic2} />
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
                </div>
              </div>
            </div>
            <div className="right-side">
              <img src={event.img} alt="Event-Image" className="event-image" />
              <div className="booking">
                <h4>Book Tickets</h4>
                <div className="ticket-info">
                  <div className="info-line">
                    <label htmlFor="quantity">Quantity</label>
                    <span>Ticket Price</span>
                  </div>
                  <div className="input-line">
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      defaultValue="1"
                      style={{
                        fontFamily: 'Caudex',
                        fontSize: '1.5625vw',
                        fontWeight: '700',
                        lineHeight: '1.302083',
                        letterSpacing: '0.01em',
                        textAlign: 'left',
                        border:'none',
                      }}
                    />
                    <span className="price">$ 25.00</span>
                    <button type="button" className="cart-button">ADD TO CART</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caudex:wght@400;700&display=swap');
          


          .back-link{
            margin:4vmin 6vw;
            font-family: "Inter", sans-serif;
            font-weight:600;
            letter-spacing:1px;
          }
          .back-link a{
            font-family: "Inter", sans-serif;
            font-weight:700;
            letter-spacing:1px;
            text-decoration:none;
            color:white;
          }
          
          .back-link a:hover{
            text-decoration: underline 2px;
            text-decoration-color: rgb(179, 3, 3);
            text-decoration-style: solid ;
            color: rgba(194, 194, 194, 1);
            text-underline-offset: 0.68vh;
          }
          .eventDet-container {
            display: flex;
            justify-content: center;
            align-items: center;
            
            // height: 100vh;
            position: relative;
            margin-top:0;
          }

          .page-body {
            font-family: Arial, sans-serif;
            
            height:max-content;
        
            backdrop-filter: blur(2px);
            display: flex;
            flex-direction: column;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width:100%
            box-sizing: border-box;
            margin: 0 6vw;
            background: rgba(27, 27, 27, 0.4);

          }

          .page-container {
            display: flex;
            width: 100%;
            height: 100%;
            flex-direction: row;
            justify-content:space-between;
          }

          .left-side, .right-side {
            padding: 1.5vw 1.302vw ;
            box-sizing: border-box;
            
          }

          .left-side {
            display: flex;
            flex-direction: column;
            gap: 1.041vw;
            width:55%;
          }

          .right-side {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width:40%;
          }

          .event-title,
          .event-text, .time-location h4 {
            margin: 1rem 0;
          }

          .event-info {
            width: 100%;
            gap: 0px;
          }

          .event-date {
            font-family: 'Caudex', serif;
            font-size: 1.041vw;
            font-weight: 400;
            line-height: 1.4322916vw;
            letter-spacing: 0.01em;
            text-align: left;
            margin-left:0;
            margin-top:0;
            margin-bottom:0;
          }

          .event-title {
            font-family: 'Caudex', serif;
            font-size: 3.125vw;
            font-weight: 700;
            line-height: 3.90625vw;
            text-align: left;
            margin-top:0.5rem;
            margin-bottom:1.5rem;
          }

          .event-text {
            font-family: 'Caudex', serif;
            font-size: 1.041vw;
            font-weight: 400;
            line-height: 1.302083vw;
            letter-spacing: 0.01em;
            text-align: left;
            color: rgba(194, 194, 194, 1);
          }

          .time-location {
            width: 100%;
            gap: 0px;
            margin: 0.5rem 0;
          }

          .time-location h4 {
            font-family: Caudex;
            font-size: 1.953125vw;
            font-weight: 700;
            line-height: 1.822916vw;
            text-align: left;
            margin: 0.5rem 0;
          }

          .time-location .event-date, 
          .time-location .event-location {
            font-family: Caudex;
            font-size: 1.041vw;
            font-weight: 400;
            text-align: left;
          }

          .event-location {
            font-family: 'Caudex', serif;
            font-size: 1.041vw;
            font-weight: 400;
            line-height: 1.302083vw;
            letter-spacing: 0.01em;
            text-align: left;
            color: rgba(194, 194, 194, 1);
            margin-top:0;
          }

          .event-date-time{
            font-family: 'Caudex', serif;
            font-size: 1.041vw;
            font-weight: 400;
            line-height: 1.302083vw;
            letter-spacing: 0.01em;
            text-align: left;
            color: rgba(194, 194, 194, 1);
            margin-bottom:1vmin;
            margin-top:4vmin;
          }
          .event-terms{
            font-family: 'Caudex', serif;
            font-size: 1.041vw;
            font-weight: 400;
            line-height: 1.302083vw;
            letter-spacing: 0.01em;
            text-align: left;
            color: rgba(194, 194, 194, 1);
            margin-top:4vmin;
          }

          .event-image {
            width: 100%;
            max-width: 32.03125vw;
            height: 40vh;
            margin-bottom: 1.302083vw;
          }

          .booking {
            width: 100%;
            max-width: 27.60416vw;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 1.102083vw;
          }

          .booking h4 {
            font-family: Caudex;
            font-size: 1.953125vw;
            font-weight: 700;
            line-height: 1.822916vw;
            text-align: left;
            margin: 5% 0%;
          }

          .ticket-info {
            display: flex;
            flex-direction: column;
            width: 100%;
          }

          .ticket-info .info-line {
            display: flex;
            gap: 10%;
            align-items: center;
            width: 100%;
            margin-bottom: 0.6510416vw;
            font-family: Caudex;
            font-size: 1.0416vw;
            font-weight: 400;
            line-height: 1.171875vw;
            letter-spacing: 0.01em;
            text-align: left;
          }
          .info-line{
            color: rgba(194, 194, 194, 1);
          }

          .ticket-info .input-line {
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
          }

          .ticket-info .input-line input {
            width: 4.296875vw;
            height: 3.515625vw;
            border-radius: 1px 0px 0px 0px;
          }

          .price {
            font-family: Caudex;
            font-size: 1.5625vw;
            font-weight: 700;
            line-height: 1.302083vw;
            letter-spacing: 0.01em;
            text-align: left;
          }

          .cart-button {
            width: 100%;
            max-width: 12.3697916vw;
            height: 3.515625vw;
            padding: 0px 2.4739583vw;
            font-weight: 600;
            border: none;
            cursor: pointer;
            font-family: "Inter", sans-serif;
            // letter-spacing: 1px;
            font-size: 2.03vmin;
          }

          .cart-button:hover {
            background-image: linear-gradient(to left,rgb(20, 4, 93),rgb(76, 6, 101));
            color: white;
          }

          .share {
            margin: 1rem 0;
            font-family: Caudex;
          }

          .share .icons img {
            margin-right: 0.6510416vw;
            cursor: pointer;
            width: 1.0416vw;
            height: 1.0416vw;
          }

          .share .icons img:hover {
            text-decoration: underline;
          }

          /* Responsive Styles */
          @media (min-width: 768px) {
            .page-container {
              flex-direction: row;
            }
            // .left-side, .right-side {
            //   width: 50%;
            // }
          }

          @media (max-width: 767px) {
            .left-side, .right-side {
              width: 100%;
              padding: 0.6510416vw;
            }

            .right-side {
              order: 2;
              flex-direction: column; /* Stack content vertically */
            }

            .event-title {
              font-size: 2.34375vw;
              line-height: 2.864583vw;
            }

            .time-location h4 {
              font-size: 1.5625vw;
              line-height: 1.822916vw;
            }

            .event-image {
              max-width: 100%;
              height: auto;
            }
          }

          @media (max-width: 480px) {
            .page-container {
              flex-direction: column;
            }
            
            .event-title {
              font-size: 1.822916vw;
              line-height: 2.2135416vw;
            }

            .event-text, .event-date, .event-location {
              font-size: 0.9114583vw;
              line-height: 1.171875vw;
            }

            .time-location h4 {
              font-size: 1.302083vw;
              line-height: 1.5625vw;
            }

            .price {
              font-size: 1.302083vw;
              line-height: 1.5625vw;
            }

            .cart-button {
              width: 100%;
              padding: 0.6510416vw;
              font-size: 1.0416vw;
            }

            .share .icons img {
              width: 0.9114583vw;
              height: 0.9114583vw;
            }

            .booking {
              margin-top: 0.6510416vw;
            }

            .right-side {
              padding: 0.6510416vw; 
            }
          }
        `}
      </style>
    </div>
  );
}

export default EventDetails;
