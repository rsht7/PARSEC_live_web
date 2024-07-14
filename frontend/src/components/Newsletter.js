// import React, { useState, useEffect, useRef } from 'react';
// import newsletterimg from './compassets/nwsltr22.jpeg';

// const Newsletter = () => {

//     const [nlerror , setnlError] = useState('')

//     const [nlemail , setnlMail] = useState('')
//     // const [nl_confirm, setnlConfirm] = useState('')


//     const handlenewSubmit = async (e) => {
//         e.preventDefault()

//         const querydata = {email:nlemail};
        
//             const response = await fetch('/api/newslettersubs', {
//                 method: 'POST',
//                 body:JSON.stringify(querydata),
//                 headers:{
//                     'Content-Type':'application/json'
//                 }
               
//             })
//             const json = await response.json()

//             if (!response.ok){
//                 setnlError(json.error)
//                 console.log(nlerror)
//             }
//             if (response.ok){
                
//                 setnlMail('')
//                 setnlError(null)
//                 // setnlConfirm('You have successfully joined our Newsletter!')
//             }
    

//     }
//     const newsletterRef = useRef(null);

//     useEffect(() => {
//         const handleIntersection = (entries, observer) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.querySelector('.main-nsl-stuff-text').classList.add('animate');
//                     entry.target.querySelector('.main-nsl-form').classList.add('animate');
//                 } else {
//                     entry.target.querySelector('.main-nsl-stuff-text').classList.remove('animate');
//                     entry.target.querySelector('.main-nsl-form').classList.remove('animate');
//                 }
//             });
//         };

//         const observer = new IntersectionObserver(handleIntersection, {
//             root: null,
//             threshold: 0.1, // Adjust the threshold as needed
//         });

//         if (newsletterRef.current) {
//             observer.observe(newsletterRef.current);
//         }

//         return () => {
//             if (newsletterRef.current) {
//                 observer.unobserve(newsletterRef.current);
//             }
//         };
//     }, []);



    


//     return (
//         <div className="newsletter-wrap" ref={newsletterRef}>
//             <div className="main-newsletter">
//                 <img src={newsletterimg} alt="Newsletter" />
//                 <div className="main-newsletter-stuff">
//                     <div className="main-nsl-stuff-text">
//                         <h1>Let Us Keep You Posted!</h1>
//                         <h2>Join our newsletter and follow us on social media for access to exclusive discounts and featured promotions.</h2>
//                     </div>
//                     <div className="main-nsl-form">
//                         <form onSubmit={handlenewSubmit}>
//                             <input 
//                                 type="email"
//                                 onChange={(e) => setnlMail(e.target.value)}
//                                 value={nlemail}
//                                 placeholder="Your email"
//                             />
//                             <button type='submit'>SUBSCRIBE</button>
//                         </form>
//                     </div>
//                 </div>
//                 {/* <div className='main-newsletter-confirm'><p>{nl_confirm}</p></div> */}
//             </div>
//         </div>
//     );
// };

// export default Newsletter;



// import React, { useState, useEffect, useRef } from 'react';
// import newsletterimg from './compassets/nwsltr22.jpeg';

// const Newsletter = () => {
//   const [nlerror, setnlError] = useState('');
//   const [nlemail, setnlMail] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handlenewSubmit = async (e) => {
//     e.preventDefault();

//     const querydata = { email: nlemail };
//     const response = await fetch('/api/newslettersubs', {
//       method: 'POST',
//       body: JSON.stringify(querydata),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     const json = await response.json();

//     if (!response.ok) {
//       setnlError(json.error);
//       console.log(nlerror);
//     }
//     if (response.ok) {
//       setnlMail('');
//       setnlError(null);
//       setIsSubmitted(true);
//     }
//   };

//   const newsletterRef = useRef(null);

//   useEffect(() => {
//     const handleIntersection = (entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.querySelector('.main-nsl-stuff-text').classList.add('animate');
//           entry.target.querySelector('.main-nsl-form').classList.add('animate');
//         } else {
//           entry.target.querySelector('.main-nsl-stuff-text').classList.remove('animate');
//           entry.target.querySelector('.main-nsl-form').classList.remove('animate');
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersection, {
//       root: null,
//       threshold: 0.1, // Adjust the threshold as needed
//     });

//     if (newsletterRef.current) {
//       observer.observe(newsletterRef.current);
//     }

//     return () => {
//       if (newsletterRef.current) {
//         observer.unobserve(newsletterRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="newsletter-wrap" ref={newsletterRef}>
//       <div className="main-newsletter">
//         <img src={newsletterimg} alt="Newsletter" />
//         <div className="main-newsletter-stuff">
//         {isSubmitted ? (
//               <h1 className='after-h1'>Thank you for subscribing to our Newsletter!</h1>
//             ) : (
//               <>
//                 <div className="main-nsl-stuff-text">
            
//                 <h1 className='before-h1'>Let Us Keep You Posted!</h1>
//                 <h2>Join our newsletter and follow us on social media for access to exclusive discounts and featured promotions.</h2>
             
//                 </div>
//               </>
//          )}

//           {!isSubmitted && (
//             <div className="main-nsl-form">
//               <form onSubmit={handlenewSubmit}>
//                 <input
//                   type="email"
//                   onChange={(e) => setnlMail(e.target.value)}
//                   value={nlemail}
//                   placeholder="Your email"
//                 />
//                 <button type="submit">SUBSCRIBE</button>
//               </form>
//               {nlerror && <p style={{ color: 'red' }}>{nlerror}</p>}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Newsletter;


import React, { useState, useEffect, useRef } from 'react';
import newsletterimg from './compassets/nwsltr22.jpeg';

const Newsletter = () => {
  const [nlerror, setnlError] = useState('');
  const [nlemail, setnlMail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlenewSubmit = async (e) => {
    const API = process.env.REACT_APP_API_URL;

    e.preventDefault();

    const querydata = { email: nlemail };
    const response = await fetch(`${API}/api/newslettersubs`, {
      method: 'POST',
      body: JSON.stringify(querydata),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();

    if (!response.ok) {
      setnlError(json.error);
      console.log(nlerror);
    }
    if (response.ok) {
      setnlMail('');
      setnlError(null);
      setIsSubmitted(true);
    }
  };

  const newsletterRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        const textElement = entry.target.querySelector('.main-nsl-stuff-text');
        const formElement = entry.target.querySelector('.main-nsl-form');

        if (entry.isIntersecting) {
          if (textElement) textElement.classList.add('animate');
          if (formElement) formElement.classList.add('animate');
        } else {
          if (textElement) textElement.classList.remove('animate');
          if (formElement) formElement.classList.remove('animate');
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
        {isSubmitted ? (
              <h1 className='after-h1'>Thank you for subscribing to our Newsletter!</h1>
            ) : (
              <>
                <div className="main-nsl-stuff-text">
            
                <h1 className='before-h1'>Let Us Keep You Posted!</h1>
                <h2>Join our newsletter and follow us on social media for access to exclusive discounts and featured promotions.</h2>
             
                </div>
              </>
         )}

          {!isSubmitted && (
            <div className="main-nsl-form">
              <form onSubmit={handlenewSubmit}>
                <input
                  type="email"
                  onChange={(e) => setnlMail(e.target.value)}
                  value={nlemail}
                  placeholder="Your email"
                />
                <button type="submit">SUBSCRIBE</button>
              </form>
              {/* {nlerror && <p style={{ color: 'red' }}>{nlerror}</p>} */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
