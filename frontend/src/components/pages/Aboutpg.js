import React, { useEffect, useRef } from 'react';
import aboutpic2 from './aboutpic2.jpeg';
import Headname from '../Headname';
import elipic from './eli2.JPG'
import sherinpic from './sherin1.JPG';
import newstltterpic from '../compassets/nwsltr22.jpeg';
import Newsletter from '../Newsletter';


const About = () => {
    const newsletterRef = useRef(null);
    const abtT1Ref = useRef(null);
    const abtT2Ref = useRef(null);
    const abtT3Ref = useRef(null);
    // const outFoundRef1 = useRef(null);
    const outFoundRef2 = useRef(null);
    const outFoundRef3 = useRef(null);
    const outFoundRef4 = useRef(null);
    const outFoundRef5 = useRef(null);



    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                const newsLhs = entry.target.querySelector('.news-lhs');
                const newsRhs = entry.target.querySelector('.news-rhs');
                const abtText = entry.target.querySelector('.abt-text');
                const ourFounders = entry.target.querySelector('.os-lhs');

                if (entry.isIntersecting) {
                    if (newsLhs) newsLhs.classList.add('animate');
                    if (newsRhs) newsRhs.classList.add('animate');
                    if (abtText) abtText.classList.add('animate');
                    if (ourFounders) abtText.classList.add('animate');
                } else {
                    if (newsLhs) newsLhs.classList.remove('animate');
                    if (newsRhs) newsRhs.classList.remove('animate');
                    if (abtText) abtText.classList.remove('animate');
                    if (ourFounders) abtText.classList.remove('animate');
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
    }, []);

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

            [abtT1Ref, abtT2Ref, abtT3Ref, outFoundRef2, outFoundRef3, outFoundRef4, outFoundRef5].forEach(ref => {
                const element = ref.current;
                if (element) {
                    const rect = element.getBoundingClientRect();

                    if (rect.top >= 0 && rect.bottom <= windowHeight) {
                        element.classList.add('fade-in');
                        element.classList.remove('fade-out');
                    } else {
                        element.classList.add('fade-out');
                        element.classList.remove('fade-in');
                    }
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
                    Our Story
                    </p>
                        
                    <p className='abt-t2 fade-in' ref={abtT2Ref}>
                    The wife-husband team of Parsec Live is Eli Staples and Sherin Koshy - combining decades of experience from the artistic and the business world, Parsec Live is bringing magic to Washington DC in a style and range normally seen in world entertainment centers.  
                    </p>

                    {/* <p className='abt-t3 fade-in' ref={abtT3Ref}>
                        ~ Sherin & Eli ~
                    </p> */}
                </div>

                {/* <div className='newsletter-wrapper' ref={newsletterRef}>
                    <div className='newsletter'>
                        <img src={newstltterpic} alt='Newsletter'></img>
                        <div className='news-lhsrhs'>
                            <div className='news-lhs'>
                                <p className='newshead'>Experience The Magic That Only Live Performances Can Offer.</p>
                                <p className='newsbelowhead'> Join our newsletter and follow us on social media for access to exclusive discounts and featured promotions.</p>
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
                </div> */}
                <Newsletter/>
                
                <div className='our-story'>
                    <div className='os-lhs'>
                        <p className='os-head fade-in' >Our Founders</p>
                        <p className='os-belowhead fade-in' ref={outFoundRef2}>Eli Staples</p>
                        <p className='os-below2 fade-in' ref={outFoundRef3}> With 30+ years of experience in the music performance world at all levels, Eli has performed and produced with artists all across the spectrum of music, ranging from R&B stars like, Ashanti, Mya and  Robin Thicke, pop stars like Journey, DC’s own Chuck Brown and jazz luminaries like Nneena Freelon, Brian Lynch, Karen Briggs, and Cindy Bradley. With an incredible mastery and repertoire of pop, Latin, R&B, Jazz, Afro-Cuban & classical music, his unique skill set in genre bending acts and performances makes for a rare lens into producing a spectacular musical feast.</p>
                        <p className='os-belowhead fade-in' ref={outFoundRef4}>Sherin Koshy</p>
                        <p className='os-below2 fade-in' ref={outFoundRef5}>A social change maker with over 20+ years of experience in business development and management, Sherin brings her diverse perspective and experience to creating a sustainable business model for live music aligned to consumer experience.</p>
                    </div>

                    <div className='os-rhs'>
                        <div className='eli'>
                            <div className='os-info'>
                                <img src={elipic} alt='Eli Staples'></img>
                                <div className='os-info-text'>
                                    <p className='os-names'>Eli Staples</p>
                                    <p className='os-position'>Co-Founder</p>
                                </div>
                            </div>                       
                        </div>

                        <div className='sherin'>
                            <div className='os-info'> 
                                <img src={sherinpic} alt='Sherin Koshy'></img>
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
