



const Singleevent = ({event})=> {

    return(
        <div className="single-event">

            <div className="se-lhs"><img src={event.img}></img></div>

            <div className="se-rhs">  
                <div className="se-text">
                    <p className="p1"> WHAT'S ON</p>
                    <p className="p2">{event.title}</p>
                    <p className="p3">{event.text}</p>

                </div>

                <div className="se-date">
                    <p>{event.date}</p>

                </div>

                <div className="se-buttons">
                    <button>GET TICKETS</button>
                    <p>READ MORE</p>

                </div>
                
                
            </div>



        </div>

    )

}

export default Singleevent