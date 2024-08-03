// src/contexts/PreloaderContext.js
// import React, { createContext, useState, useContext } from 'react';

// const PreloaderContext = createContext();

// export const PreloaderProvider = ({ children }) => {
//     const [loading, setLoading] = useState(false);

//     return (
//         <PreloaderContext.Provider value={{ loading, setLoading }}>
//             {children}
//         </PreloaderContext.Provider>
//     );
// };

// export const usePreloader = () => useContext(PreloaderContext);






import React, { createContext, useState, useContext, useEffect } from 'react';

const PreloaderContext = createContext();

export const PreloaderProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Initial load finished');
            setLoading(false);
        }, 3000); // Preloader duration on initial load

        return () => clearTimeout(timer);
    }, []);

    return (
        <PreloaderContext.Provider value={{ loading, setLoading }}>
            {children}
        </PreloaderContext.Provider>
    );
};

export const usePreloader = () => useContext(PreloaderContext);

// import React, { createContext, useState, useContext } from 'react';

// const PreloaderContext = createContext();

// export const PreloaderProvider = ({ children }) => {
//     const [loading, setLoading] = useState(true);

//     return (
//         <PreloaderContext.Provider value={{ loading, setLoading }}>
//             {children}
//         </PreloaderContext.Provider>
//     );
// };

// export const usePreloader = () => useContext(PreloaderContext);


