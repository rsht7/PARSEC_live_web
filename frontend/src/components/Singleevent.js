import {Link} from 'react-router-dom'
// import comingsoon from './compassets/comingsoonhp.webp'



const Singleevent = ({event})=> {

    return(
        <div className="single-event">

            <div className="se-lhs"><img src={event.img}></img></div>
            {/* <div className="se-lhs"><img src={comingsoon}></img></div> */}


            <div className="se-rhs">  
                <div className="se-text">
                    <p className="p1"> WHAT'S ON</p>
                    {/* <p className="p2">{event.title}</p> */}
                    {/* <p className="p3">{event.text}</p> */}
                    <p className='p2'>Parsec Immersive Live Music Party </p>
                    <p className='p3'>A live music centered immersive event where you and your friends will join the performers in creating a glamorous night out –with theatrical and spectacular live music, inspiring musicians with amazing dancers, you’ll participate in a dance party that feels as if you’ve dropped into a Broadway show.  </p>

                </div>

                {/* <div className="se-date">
                    <p>{event.date}</p>

                </div>

                <div className="se-buttons">
                    <button>GET TICKETS</button>
                    <p><Link to=''>READ MORE</Link></p>

                </div> */}
                
                
            </div>



        </div>

    )

}

export default Singleevent