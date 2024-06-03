import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Headname from '../Headname';
import homepic2 from './homepic2.jpeg';
import facebook3 from '../compassets/facebook3.png'
import instagram from '../compassets/instagram.png'
import Newsletter from '../Newsletter'

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event details using the ID from the URL
    fetch(`/api/events/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data))
      .catch(error => console.error('Error fetching event details:', error));
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="total">
      <Headname name={`Events > ${event.title}`} pic={homepic2} />
      <div className="eventDet-container">
        <div className="page-body">
          <div className="page-container">
            <div className="left-side">
              <div className="event-info">
              <h4 className="event-date" style={{ margin: '1rem' }}>{event.date}</h4>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-text">{event.text}</p>
                <p className="event-text">{event.text}</p>
              </div>
              <div className="time-location">
                <h4>Time & Location</h4>
                <p className="event-date">{event.date}, {event.time}</p>
                <p className="event-location">{event.location}</p>
                <p className="event-location">Terms and Conditions</p>
              </div>
              <div className="share">
                <p>Share this event</p>
                <div className="icons">
                  {/* Add your share icons here */}
                  <span><img src={facebook3} alt="Facebook Icon" /></span>
                  <span><img src={instagram}></img></span>
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
                  <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" style={{
                      fontFamily: 'Caudex',
                      fontSize: '24px',
                      fontWeight: '700',
                      lineHeight: '20px',
                      letterSpacing: '0.01em',
                      textAlign: 'left'
                    }} />
                    <span className="price">$ 25.00</span>
                    <button type="button" className="cart-button">ADD TO CART</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter/>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caudex:wght@400;700&display=swap');

          .eventDet-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            position: relative;
          }
          
          .page-body {
            font-family: Arial, sans-serif;
            width: 90%;
            max-width: 1280px;
            height: auto;
            backdrop-filter: blur(8px);
            display: flex;
            flex-direction: column;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            box-sizing: border-box;
            margin: auto;
          }
          
          .page-container {
            display: flex;
            width: 100%;
            height: 100%;
            flex-direction: column;
          }
          
          .left-side, .right-side {
            padding: 20px;
            box-sizing: border-box;
          }
          
          .left-side {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          
          .right-side {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
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
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0.01em;
            text-align: left;
          }
          
          .event-title {
            font-family: 'Caudex', serif;
            font-size: 48px;
            font-weight: 700;
            line-height: 60px;
            text-align: left;
          }
          
          .event-text {
            font-family: 'Caudex', serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0.01em;
            text-align: left;
          }
          
          .time-location {
            width: 100%;
            gap: 0px;
            margin: 0.5rem 0;
          }
          
          .time-location h4 {
            font-family: Caudex;
            font-size: 30px;
            font-weight: 700;
            line-height: 28px;
            text-align: left;
            margin: 0.5rem 0;
          }
          
          .time-location .event-date, 
          .time-location .event-location {
            font-family: Caudex;
            font-size: 16px;
            font-weight: 400;
            text-align: left;
          }
          
          .event-location {
            font-family: 'Caudex', serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0.01em;
            text-align: left;
          }
          
          .event-image {
            width: 100%;
            max-width: 492px;
            height: auto;
            margin-bottom: 20px;
          }
          
          .booking {
            width: 100%;
            max-width: 424px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
          }
          
          .booking h4 {
            font-family: Caudex;
            font-size: 30px;
            font-weight: 700;
            line-height: 28px;
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
            margin-bottom: 10px;
            font-family: Caudex;
            font-size: 16px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0.01em;
            text-align: left;
          }
          
          .ticket-info .input-line {
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
          }
          
          .ticket-info .input-line input {
            width: 66px;
            height: 54px;
            border-radius: 1px 0px 0px 0px;
          }
          
          .price {
            font-family: Caudex;
            font-size: 24px;
            font-weight: 700;
            line-height: 20px;
            letter-spacing: 0.01em;
            text-align: left;
          }
          
          .cart-button {
            width: 100%;
            max-width: 190px;
            height: 54px;
            padding: 0px 38px;
            font-weight: 700;
            border: none;
            cursor: pointer;
          }
          
          .cart-button:hover {
            background-color: #0056b3;
          }
          
          .share {
            margin: 1rem 0;
          }
          
          .share .icons img {
            margin-right: 10px;
            cursor: pointer;
            width: 16px;
            height: 16px;
          }
          
          .share .icons img:hover {
            text-decoration: underline;
          }
          
          /* Responsive Styles */
          @media (min-width: 768px) {
            .page-container {
              flex-direction: row;
            }
          
            .left-side, .right-side {
              width: 50%;
            }
          }
          
          @media (max-width: 767px) {
            .page-container {
              flex-direction: column;
            }
          
            .left-side, .right-side {
              width: 100%;
              padding: 10px;
            }
          
            .right-side {
              flex-direction: column; /* Stack content vertically */
            }
          
            .event-title {
              font-size: 36px;
              line-height: 44px;
            }
          
            .time-location h4 {
              font-size: 24px;
              line-height: 28px;
            }
          
            .event-image {
              max-width: 100%;
              height: auto;
            }
          }
          
          
          @media (max-width: 480px) {
            .event-title {
              font-size: 28px;
              line-height: 34px;
            }
          
            .event-text, .event-date, .event-location {
              font-size: 14px;
              line-height: 18px;
            }
          
            .time-location h4 {
              font-size: 20px;
              line-height: 24px;
            }
          
            .price {
              font-size: 20px;
              line-height: 24px;
            }
          
            .cart-button {
              width: 100%;
              padding: 10px;
              font-size: 16px;
            }
          
            .share .icons img {
              width: 14px;
              height: 14px;
            }
          
            .booking {
              margin-top: 10px;
            }
          
            /* Adjustments for the right-side */
            .right-side {
              padding: 10px; /* Adjust padding to avoid overlapping */
            }
          }
          
          
        `}
      </style>
    </div>
  );
}

export default EventDetails;
