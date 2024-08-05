// import React, { useState } from 'react';

// const LoginPage = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         throw new Error('Invalid email or password');
//       }

//       const data = await response.json();
//       onLogin(data.token);
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className='multer-page'>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit} className='login-form'>
//         <div className='login-inputs'>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className='login-inputs'>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit" className='login-btn'>LOGIN</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    const API = process.env.REACT_APP_API_URL;

    e.preventDefault();
    try {
      const response = await fetch(`${API}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      onLogin(data.token);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='multer-page'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='login-inputs'>
          <label>Username:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='login-inputs'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className='login-btn'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
