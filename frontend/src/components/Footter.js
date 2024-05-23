import {Link} from 'react-router-dom'
import fulllogo from './compassets/fulllogo.png'
// import twitter from './twitter.png'
import facebook3 from './compassets/facebook3.png'
// import youtube1 from './youtube1.png'
import instagram from './compassets/instagram.png'



const Footer = () =>{



    return(
        <footer className="footer">
          
          <div className='footone'>
             <img src={fulllogo} alt='PARSEC'></img>
             <ul>
                    <li><img src={facebook3}></img></li>   
                    {/* <li><img src={twitter}></img></li>

                    <li><img src={youtube1}></img></li> */}
                    <li><img src={instagram}></img></li>
                    
              </ul>
                
             
          </div>
    
            
          <div className="foottwo">
           <div className='foottwo-a'>
                <ul className='ula'>
                  
                  <li><Link to='/' >HOME </Link></li>
                  <li><Link to='/event' >EVENTS </Link></li>
                  <li><Link to='/about' >ABOUT US</Link></li>
                  <li><Link to='/contactus' >CONTACT  </Link></li>
                     
                </ul>
                
                <form className='ulb'>

                  <input type='email' placeholder='JOIN OUR NEWSLETTER'/>
                  <button className='subs'>SUBSCRIBE</button>
                  {/* <li className='ul-b1'><p >JOIN OUR NEWSLETTER</p></li>
                  <li className='subs'><Link >SUBSCRIBE</Link></li> */}

                </form>
                
           </div>

           {/* <hr className='horz-line' /> */}

           <div className='foottwo-b'>
            <div className='foot-cont-mail'>
              <ul>
                <li>P: +1(202)-4914515</li>
                <li>E: contact@parseclive.com</li>

              </ul>


            </div>
             
             
             
            <div className='foot-cpr'>
              <ul >
                <li> &copy; 2024 Parsec LIVE</li>
                <li>All Rights Reserved</li>
                <li>Privacy Policy</li>
              </ul> 
              
            </div>
             

           </div>
            

          </div>


        </footer>

    )

}

export default Footer