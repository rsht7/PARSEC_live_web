


// src/components/Preloader.js
// import React, { useEffect, useState } from 'react';
// import { usePreloader } from '../contexts/PreloaderContext';
// import './Preloader.css'; // Import the CSS file for styling
// import loadgif from './compassets/download.gif';

// const Preloader = () => {
//     const { loading } = usePreloader();
//     const [shouldRender, setRender] = useState(loading);

//     useEffect(() => {
//         if (!loading) {
//             const timer = setTimeout(() => setRender(false), 500); // duration of the slide-out animation
//             return () => clearTimeout(timer);
//         }
//         setRender(true);
//     }, [loading]);

//     return (
//         shouldRender && (
//             <div className={`preloader ${!loading ? 'slide-out' : ''}`}>
//                 <img src={loadgif} alt="Loading..." className="spinner" />
//             </div>
//         )
//     );
// };

// export default Preloader;



import React from 'react';
import './Preloader.css'; // Import the CSS file for styling
import loadgif from './compassets/download.gif';

const Preloader = ({ loading }) => {
    return (
        loading && (
            <div className={`preloader ${!loading ? 'slide-out' : ''}`}>
                <img src={loadgif} alt="Loading..." className="spinner" />
            </div>
        )
    );
};

export default Preloader;

