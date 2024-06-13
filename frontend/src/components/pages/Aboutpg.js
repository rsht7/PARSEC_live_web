import React, { useEffect, useRef } from 'react';
import aboutpic2 from './aboutpic2.jpeg';
import Headname from '../Headname';
import elipic from './elicrpd2.png';
import sherinpic from './sherin2.png';
import newstltterpic from '../compassets/nwsltr22.jpeg';

const About = () => {
    const newsletterRef = useRef(null);
    const abtT1Ref = useRef(null);
    const abtT2Ref = useRef(null);
    const abtT3Ref = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelector('.news-lhs').classList.add('animate');
                    entry.target.querySelector('.news-rhs').classList.add('animate');
                    entry.target.querySelector('.abt-text').classList.add('animate');
                    
                } else {
                    entry.target.querySelector('.news-lhs').classList.remove('animate');
                    entry.target.querySelector('.news-rhs').classList.remove('animate');
                    entry.target.querySelector('.abt-text').classList.remove('animate');
                    
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.1,
        });

        if (newsletterRef.current) {
            observer.observe(newsletterRef.current);
        }

        return () => {
            if (newsletterRef.current) {
                observer.unobserve(newsletterRef.current);
            }
        };
    // }, []);

//     const handleIntersection = (entries) => {
//         entries.forEach(entry => {
//             const newsLhs = entry.target.querySelector('.news-lhs');
//             const newsRhs = entry.target.querySelector('.news-rhs');
//             const abtText = entry.target.querySelector('.abt-text-in');

//             if (entry.isIntersecting) {
//                 if (newsLhs) newsLhs.classList.add('animate');
//                 if (newsRhs) newsRhs.classList.add('animate');
//                 if (abtText) abtText.classList.add('animate');
//             } else {
//                 if (newsLhs) newsLhs.classList.remove('animate');
//                 if (newsRhs) newsRhs.classList.remove('animate');
//                 if (abtText) abtText.classList.remove('animate');
//             }
//         });
//     };

//     const observer = new IntersectionObserver(handleIntersection, {
//         root: null,
//         threshold: 0.1, 
//     });

//     if (abtTextRef.current) observer.observe(abtTextRef.current);
//     if (newsletterRef.current) observer.observe(newsletterRef.current);

//     return () => {
//         if (abtTextRef.current) observer.unobserve(abtTextRef.current);
//         if (newsletterRef.current) observer.unobserve(newsletterRef.current);
//     };
// }, []);




    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            const windowHeight = window.innerHeight;

            [abtT1Ref, abtT2Ref, abtT3Ref].forEach(ref => {
                const element = ref.current;
                const rect = element.getBoundingClientRect();

                if (rect.top >= 0 && rect.bottom <= windowHeight) {
                    element.classList.add('fade-in');
                    element.classList.remove('fade-out');
                } else {
                    element.classList.add('fade-out');
                    element.classList.remove('fade-in');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="about-complete">
            <Headname name='About Us' pic={aboutpic2} />

            <div className='about'>
                <div className='abt-text'>
                    <p className='abt-t1 fade-in' ref={abtT1Ref}>
                        Entertain, Inspire and Engage
                    </p>
                        
                    <p className='abt-t2 fade-in' ref={abtT2Ref}>
                        Amet minim esse irure reprehenderit est amet elit irure aliquip cillum. Irure do sit nulla sunt eiusmod
                        . Aute anim eiusmod pariatur occaecat laboris ipsum. Deserunt nisi amet eiusmod irure. Sint dolor minim 
                        consequat mollit. Exercitation est minim dolore et. Pariatur ea ut pariatur do irure.Voluptate eiusmod consectetur.
                    </p>

                    <p className='abt-t3 fade-in' ref={abtT3Ref}>
                        ~ Sherin & Eli ~
                    </p>
                </div>

                <div className='newsletter-wrapper' ref={newsletterRef}>
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

export default About;
