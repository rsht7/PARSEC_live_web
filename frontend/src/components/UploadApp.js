// // // import React, { useState, useEffect } from 'react';
// // // import LoginPage from './LoginPage';
// // // import FileUploadPage from './FileUploadPage';

// // // const UploadApp = () => {
// // //   const [token, setToken] = useState(null);

// // //   useEffect(() => {
// // //     // Check if token exists in localStorage
// // //     const savedToken = localStorage.getItem('token');
// // //     if (savedToken) {
// // //       setToken(savedToken);
// // //     }
// // //   }, []);

// // //   const handleLogin = (newToken) => {
// // //     localStorage.setItem('token', newToken);
// // //     setToken(newToken);
// // //   };

// // //   return (
// // //     <div>
// // //       {token ? (
// // //         <FileUploadPage token={token} />
// // //       ) : (
// // //         <LoginPage onLogin={handleLogin} />
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default UploadApp;







// // import React, { useState, useEffect } from 'react';
// // import LoginPage from './LoginPage';
// // import FileUploadPage from './FileUploadPage';

// // const UploadApp = () => {
// //   const [token, setToken] = useState(null);

// //   useEffect(() => {
// //     // Check if token exists in localStorage
// //     const savedToken = localStorage.getItem('token');
// //     if (savedToken) {
// //       setToken(savedToken);
// //     }
// //   }, []);

// //   const handleLogin = (newToken) => {
// //     localStorage.setItem('token', newToken);
// //     setToken(newToken);
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem('token');
// //     setToken(null);
// //   };

// //   return (
// //     <div>
// //       {token ? (
// //         <FileUploadPage token={token} onLogout={handleLogout} />
// //       ) : (
// //         <LoginPage onLogin={handleLogin} />
// //       )}
// //     </div>
// //   );
// // };

// // export default UploadApp;


// import React, { useState, useEffect } from 'react';
// import LoginPage from './LoginPage';
// import FileUploadPage from './FileUploadPage';

// const UploadApp = () => {
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     // Check if token exists in localStorage
//     const savedToken = localStorage.getItem('token');
//     if (savedToken) {
//       setToken(savedToken);
//     }
//   }, []);

//   const handleLogin = (newToken) => {
//     localStorage.setItem('token', newToken);
//     setToken(newToken);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setToken(null);
//   };

//   return (
//     <div>
//       {token ? (
//         <FileUploadPage token={token} onLogout={handleLogout} />
//       ) : (
//         <LoginPage onLogin={handleLogin} />
//       )}
//     </div>
//   );
// };

// export default UploadApp;


import React, { useState, useEffect } from 'react';
import LoginPage from './LoginPage';
import FileUploadPage from './FileUploadPage';

const UploadApp = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
      const tokenExpiryTime = JSON.parse(atob(savedToken.split('.')[1])).exp * 1000;
      const timeout = tokenExpiryTime - Date.now();
      if (timeout > 0) {
        setTimeout(handleLogout, timeout);
      } else {
        handleLogout();
      }
    }
  }, []);

  const handleLogin = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    const tokenExpiryTime = JSON.parse(atob(newToken.split('.')[1])).exp * 1000;
    const timeout = tokenExpiryTime - Date.now();
    setTimeout(handleLogout, timeout);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <div>
      {token ? (
        <FileUploadPage token={token} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default UploadApp;
