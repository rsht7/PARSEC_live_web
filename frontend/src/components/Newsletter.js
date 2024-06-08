import React, { useEffect, useRef } from 'react';
import newsletterimg from './compassets/mainnewsletter2.jpeg';

const Newsletter = () => {
    const newsletterRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelector('.main-nsl-stuff-text').classList.add('animate');
                    entry.target.querySelector('.main-nsl-form').classList.add('animate');
                } else {
                    entry.target.querySelector('.main-nsl-stuff-text').classList.remove('animate');
                    entry.target.querySelector('.main-nsl-form').classList.remove('animate');
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.1, // Adjust the threshold as needed
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

    return (
        <div className="newsletter-wrap" ref={newsletterRef}>
            <div className="main-newsletter">
                <img src={newsletterimg} alt="Newsletter" />
                <div className="main-newsletter-stuff">
                    <div className="main-nsl-stuff-text">
                        <h1>Let Us Keep You Posted!</h1>
                        <h2>Join our newsletter and follow us on social media for access to exclusive discounts and featured promotions.</h2>
                    </div>
                    <div className="main-nsl-form">
                        <form>
                            <input 
                                type="email"
                                placeholder="Your email"
                            />
                            <button>SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
