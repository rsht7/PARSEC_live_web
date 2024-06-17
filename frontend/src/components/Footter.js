import { useState } from 'react'

import {Link,  useLocation} from 'react-router-dom'
import fulllogo from './compassets/fulllogo.png'
// import twitter from './twitter.png'
import facebook3 from './compassets/facebook3.png'
// import youtube1 from './youtube1.png'
import instagram from './compassets/instagram.png'



const Footer = () =>{

  const location = useLocation();
  const [nlerror , setnlError] = useState('')

  const [nlemail , setnlMail] = useState('')
  // const [nl_confirm, setnlConfirm] = useState('')


  const getLinkClass = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  const handlenewSubmit = async (e) => {
      e.preventDefault()

      const querydata = {email:nlemail};
      
          const response = await fetch('/api/newslettersubs', {
              method: 'POST',
              body:JSON.stringify(querydata),
              headers:{
                  'Content-Type':'application/json'
              }
             
          })
          const json = await response.json()

          if (!response.ok){
              setnlError(json.error)
              console.log(nlerror)
          }
          if (response.ok){
              
              setnlMail('')
              setnlError(null)
              // setnlConfirm('You have successfully joined our Newsletter!')
          }
  

  }

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
                  
                  <li><Link to='/' className={getLinkClass('/')} >HOME </Link></li>
                  <li><Link to='/event' className={getLinkClass('/event')}>EVENTS </Link></li>
                  <li><Link to='/about' className={getLinkClass('/about')}>ABOUT US</Link></li>
                  <li><Link to='/contactus' className={getLinkClass('/contactus')}>CONTACT  </Link></li>
                     
                </ul>
                
                <form className='ulb' onSubmit={handlenewSubmit}>

                  <input type='email' placeholder='Join our newsletter' onChange={(e) => setnlMail(e.target.value)}
                  value={nlemail}/>
                  <button className='subs'>SUBSCRIBE</button>
                  {/* <li className='ul-b1'><p >JOIN OUR NEWSLETTER</p></li>
                  <li className='subs'><Link >SUBSCRIBE</Link></li> */}

                </form>
                
           </div>

           {/* <hr className='horz-line' /> */}

           <div className='foottwo-b'>
            <div className='foot-cont-mail'>
              <ul>
                {/* <li>P: +1(202)-4914515</li> */}
                <li>E: info@parseclive.com</li>

              </ul>


            </div>
             
             
             
            <div className='foot-cpr'>
              <ul >
                <li> &copy; 2024 Parsec LIVE</li>
                <li>|</li>
                <li>All Rights Reserved</li>
                <li>|</li>
                <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
              </ul> 
              
            </div>
             

           </div>
            

          </div>


        </footer>

    )

}

export default Footer