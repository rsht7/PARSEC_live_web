

// // import React, { useState } from 'react';

// // const FileUploadPage = ({token}) => {
// //   const [file, setFile] = useState(null);
// //   const [message, setMessage] = useState('');

// //   const handleFileChange = (e) => {

// //     e.preventDefault();
// //     setFile(e.target.files[0]);
// //   };

// //   const handleUpload = (e) => {

// //     e.preventDefault();


// //     if (!file) {
// //       setMessage('Please select a file.');
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append('image', file);

// //     fetch('/api/upload', {
// //       method: 'POST',
// //       headers: {
// //         'Authorization': `Bearer ${token}` 
// //       },
// //       body: formData
// //     })
// //     .then(response => response.json())
// //     .then(data => {
// //       console.log('File uploaded successfully:', data.file);
// //       setMessage(`File "${file.name}" uploaded successfully!`);
// //       // Handle success (e.g., show success message, update UI)
// //     })
// //     .catch(error => {
// //       console.error('Error uploading file:', error);
// //       setMessage('File upload failed!');
// //       // Handle error (e.g., show error message)
// //     });
// //   };

// //   return (
// //     <div className='multer-page'>
// //       <h2>Upload Image</h2>
// //       <div className='multer-form'>
// //         {/* <input type="file" onChange={handleFileChange} />
// //         <button onClick={handleUpload}>Upload</button> */}

// //         <form onSubmit={handleUpload}>
// //           <input type="file" onChange={handleFileChange} />
// //           {/* <button type="submit">Upload</button> */}
// //           <button type="button" onClick={handleUpload}>UPLOAD</button>

// //         </form>
// //       </div>
// //       {message && <p>{message}</p>}
// //     </div>
// //   );
// // };

// // export default FileUploadPage;


// import React, { useState } from 'react';

// const FileUploadPage = ({ token, onLogout }) => {
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleFileChange = (e) => {
//     e.preventDefault();
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = (e) => {
//     e.preventDefault();

//     if (!file) {
//       setMessage('Please select a file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     fetch('/api/upload', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${token}`
//       },
//       body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.error) {
//         throw new Error(data.error);
//       }
//       console.log('File uploaded successfully:', data.file);
//       setMessage(`File "${file.name}" uploaded successfully!`);
//     })
//     .catch(error => {
//       console.error('Error uploading file:', error);
//       if (error.message === 'jwt expired') {
//         setMessage('Session expired. Logging out...');
//         onLogout();
//       } else {
//         setMessage('File upload failed!');
//       }
//     });
//   };

//   return (
//     <div className='multer-page'>
//       <h2>Upload File</h2>
//       <div className='multer-form'>
//         <form onSubmit={handleUpload}>
//           <input type="file" onChange={handleFileChange} />
//           <button type="submit">Upload</button>
//         </form>
//       </div>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default FileUploadPage;



import React, { useState } from 'react';

const FileUploadPage = ({ token, onLogout }) => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (!file) {
      setMessage('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('/api/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    })
    .then(async response => {
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('Forbidden: Invalid or expired token.');
        } else if (response.status === 401) {
          throw new Error('Unauthorized: Invalid credentials.');
        } else {
          const errorText = await response.text();
          throw new Error(errorText || 'Unknown error occurred.');
        }
      }
      return response.json();
    })
    .then(data => {
      console.log('File uploaded successfully:', data.file);
      setMessage(`File "${file.name}" uploaded successfully!`);
    })
    .catch(error => {
      console.error('Error uploading file:', error.message);
      if (error.message.includes('expired')) {
        setMessage('Session expired. Logging out...');
        onLogout();
      } else {
        setMessage(error.message);
      }
    });
  };

  return (
    <div className='multer-page'>
      <h2>Upload File</h2>
      <div className='multer-form'>
        <form onSubmit={handleUpload}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUploadPage;
