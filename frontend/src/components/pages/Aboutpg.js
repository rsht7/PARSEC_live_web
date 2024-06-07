// import logo from './logo.png'
import { useEffect } from 'react'
import aboutpic2 from './aboutpic2.jpeg'
import Headname from '../Headname'
import elipic from './elicrpd2.png'
import sherinpic from './sherin2.png'
import newstltterpic from '../compassets/nwsltr22.jpeg'



const About = () => {


    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

    return(
        <div className="about-complete">
            {/* <div className='bglogo'>
                    <img src={logo}></img>
            </div>
            <div className='cont-img'><img src={contactpic}></img></div>
            <div className='PageName'>
                <h1>About Us</h1>
                <p>Home &gt; About Us</p>    
            </div> */}


            

        <Headname name='About Us' pic={aboutpic2} />

        <div className='about'>
           
            <div className='abt-text'>
                <p className='abt-t1'>
                    Entertain, Inspire and Engage
                </p>
                    
                <p className='abt-t2'> Amet minim esse irure reprehenderit est amet elit irure aliquip cillum. Irure do sit nulla sunt eiusmod
                    . Aute anim eiusmod   pariatur occaecat laboris ipsum. Deserunt nisi amet eiusmod irure. Sint dolor minim 
                    consequat mollit. Exercitation est minim dolore et. Pariatur ea ut pariatur do irure.Voluptate eiusmod consectetur.

                </p>
                <p className='abt-t3'>~ Sherin & Eli ~</p>

            </div>
            <div className='newsletter-wrapper'>
                <div className='newsletter'>
                    <img src={newstltterpic}></img>
                    <div className='news-lhsrhs'>
                        <div className='news-lhs'>
                            <p className='newshead'>Experience The Magic That Only Live Performances Can Offer.</p>
                            <p className='newsbelowhead'> Exercitation eiusmod et officia excepteur aute quis.</p>
                        </div>
                        <div className='news-rhs'>
                            <form>
                                <input className='nws-inp'
                                type='email'
                                placeholder='Your email'
                                // value={email}

                                />
                                <button className='nws-subs'>SUBSCRIBE</button>
                        
                        
                            </form>
                        </div>                        
                    </div> 
                
                </div>

            </div>
           

            <div className='our-story'>
                <div className='os-lhs'>
                    <p className='os-head'>Our Story</p>
                    <p className='os-belowhead'>In fugiat dolor anim amet nostrud consectetur quis m esse est minim cupidatat Lorem.</p>
                    <p className='os-below2'> Voluptate eiusmod consectetur cillum aliqua. Exercitation est minim dolore et. Pariatur ea ut pariatur do irure. Id sunt incididon ea.</p>
                    <p className='os-below2'>Cupidatat consequat id Lorem nostrud laborum esse est minim cupidatat Lorem. Ullamco voluptate ut ad labore excepteur sunt. Aliqua et enim est anim consectetur.  dolor elit laborum exercitation ut labore ipsum.</p>

                </div>


                <div className='os-rhs'>

                    <div className='eli'>
                        <div className='os-info'>
                            <img src={elipic}></img>
                            <div className='os-info-text'>
                                <p className='os-names'>Eli Staples</p>
                                <p className='os-position'>Co-Founder</p>
                            </div>
                            
                        </div>                       
                    </div>

                    <div className='sherin'>
                        <div className='os-info'> 
                            <img src={sherinpic}></img>
                            <div className='os-info-text'>
                                <p className='os-names'>Sherin Koshy</p>
                                <p className='os-position'>Co-Founder</p> 
                                                               
                            </div>                     
                                                  
                        </div>  
                    </div>

                </div>


            </div>







        </div>
            
    
        </div>
    
            )



}

export default About
