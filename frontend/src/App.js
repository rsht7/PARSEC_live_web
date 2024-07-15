// import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Pages and components

// import Home from './components/pages/Home';
// import Navbar from './components/Navbar';
// import ContactForm from './components/pages/ContactForm';
// import Footer from './components/Footter';
// import About from './components/pages/Aboutpg';
// import Scrollbtn from './components/scrollbutton';
// import EventDetails from './components/pages/EventDetails';
// import Events from './components/pages/Events';
// import Privacy from './components/pages/Privacypg'
// import CartPage from './components/pages/CartPage';
// import { CartProvider } from './contexts/CartContext';

// function App() {

 
//   return (
    
//     <div className="App">
//       <BrowserRouter>
//       <CartProvider>
//         <Navbar />
//         <Scrollbtn />
//         <div className='pages'>
//           <Routes >
          
//             <Route path='/' element={<Home />} />
//             <Route path='/event' element={<Events />} />
//             <Route path='/contactus' element={<ContactForm />} />
//             <Route path='/about' element={<About />} />
//             <Route path="/event/:id" element={<EventDetails />} />
//             <Route path='/privacy-policy' element={<Privacy/>}/>
//             <Route path='/cart' element={<CartPage />} />

//           </Routes>
//         </div>
//         <Footer />
//         </CartProvider> 
//       </BrowserRouter>
//     </div>
    
//   );
// }

// export default App;


// src/App.js



//lastum last


// import { useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { CartProvider } from './contexts/CartContext';

// // Pages and components
// import Home from './components/pages/Home';
// import Navbar from './components/Navbar';
// import ContactForm from './components/pages/ContactForm';
// import Footer from './components/Footter';
// import About from './components/pages/Aboutpg';
// import Scrollbtn from './components/scrollbutton';
// import EventDetails from './components/pages/EventDetails';
// import Events from './components/pages/Events';
// // import CartPage from './components/CartPage';
// import Privacy from './components/pages/Privacypg';
// import SuccessPage from './components/pages/Successpg';
// import FailurePage from './components/pages/Failedpg';
// import UploadPage from './components/UploadApp';

// function App() {


//   useEffect(() => {
//     const handleContextMenu = (e) => {
//       if (e.target.tagName === 'IMG' || e.target.classList.contains('no-copy')) {
//         e.preventDefault();
//       }
//     };

//     document.addEventListener('contextmenu', handleContextMenu);

//     return () => {
//       document.removeEventListener('contextmenu', handleContextMenu);
//     };
//   }, []);


//   return (
//     <div className="App">
//       <BrowserRouter>
//         <CartProvider>
//           <Navbar />
//           <Scrollbtn />
//           <div className='pages'>
//             <Routes>
//               <Route path='/' element={<Home />} />
//               <Route path='/event' element={<Events />} />
//               <Route path='/contactus' element={<ContactForm />} />
//               <Route path='/about' element={<About />} />
//               <Route path="/event/:id" element={<EventDetails />} />
//               {/* <Route path='/cart' element={<CartPage />} /> */}
//               <Route path='/privacy-policy' element={<Privacy />} />
//               <Route path='/success' element={<SuccessPage />} />
//               <Route path='/failure' element={<FailurePage />} />
//               <Route path='/admin' element={<UploadPage/>}/>
//             </Routes>
//           </div>
//           <Footer />
//         </CartProvider>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import { useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { CartProvider } from './contexts/CartContext';

// // Pages and components
// import Home from './components/pages/Home';
// import Navbar from './components/Navbar';
// import ContactForm from './components/pages/ContactForm';
// import Footer from './components/Footter';
// import About from './components/pages/Aboutpg';
// import Scrollbtn from './components/scrollbutton';
// import EventDetails from './components/pages/EventDetails';
// import Events from './components/pages/Events';
// import CartPage from './components/CartPage';
// import Privacy from './components/pages/Privacypg';
// import SuccessPage from './components/pages/Successpg';
// import FailurePage from './components/pages/Failedpg';
// import UploadApp from './components/UploadApp';

// function App() {
//   useEffect(() => {
//     const handleContextMenu = (e) => {
//       if (e.target.tagName === 'IMG' || e.target.classList.contains('no-copy')) {
//         e.preventDefault();
//       }
//     };

//     document.addEventListener('contextmenu', handleContextMenu);

//     return () => {
//       document.removeEventListener('contextmenu', handleContextMenu);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <CartProvider>
//           <Navbar />
//           <Scrollbtn />
//           <div className='pages'>
//             <Routes>
//               <Route path='/' element={<Home />} />
//               <Route path='/event' element={<Events />} />
//               <Route path='/contactus' element={<ContactForm />} />
//               <Route path='/about' element={<About />} />
//               <Route path="/event/:id" element={<EventDetails />} />
//               <Route path='/privacy-policy' element={<Privacy />} />
//               <Route path='/success' element={<SuccessPage />} />
//               <Route path='/failure' element={<FailurePage />} />
//               <Route path='/admin' element={<UploadApp />} />
//             </Routes>
//           </div>
//           <Footer />
//         </CartProvider>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// import { useEffect } from 'react';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import { CartProvider } from './contexts/CartContext';

// // Pages and components
// import Home from './components/pages/Home';
// import Navbar from './components/Navbar';
// import ContactForm from './components/pages/ContactForm';
// import Footer from './components/Footter';
// import About from './components/pages/Aboutpg';
// import Scrollbtn from './components/scrollbutton';
// import EventDetails from './components/pages/EventDetails';
// import Events from './components/pages/Events';
// import CartPage from './components/CartPage';
// import Privacy from './components/pages/Privacypg';
// import SuccessPage from './components/pages/Successpg';
// import FailurePage from './components/pages/Failedpg';
// import UploadApp from './components/UploadApp';

// // Custom hook to update the page title
// function usePageTitle(defaultTitle) {
//   const location = useLocation();

//   useEffect(() => {
//     const path = location.pathname;
//     let pageTitle = defaultTitle;

//     switch (path) {
//       case '/event':
//         pageTitle += ' - Events';
//         break;
//       case '/contactus':
//         pageTitle += ' - Contact Us';
//         break;
//       case '/about':
//         pageTitle += ' - About';
//         break;
//       case '/privacy-policy':
//         pageTitle += ' - Privacy Policy';
//         break;
//       case '/success':
//         pageTitle += ' - Success';
//         break;
//       case '/failure':
//         pageTitle += ' - Failure';
//         break;
//       case '/admin':
//         pageTitle += ' - Admin';
//         break;
//       default:
//         if (path.startsWith('/event/')) {
//           pageTitle += ' - Event Details';
//         } else {
//           pageTitle += ' - Home';
//         }
//         break;
//     }

//     document.title = pageTitle;
//   }, [location, defaultTitle]);
// }

// function App() {
//   useEffect(() => {
//     const handleContextMenu = (e) => {
//       if (e.target.tagName === 'IMG' || e.target.classList.contains('no-copy')) {
//         e.preventDefault();
//       }
//     };

//     document.addEventListener('contextmenu', handleContextMenu);

//     return () => {
//       document.removeEventListener('contextmenu', handleContextMenu);
//     };
//   }, []);

//   const defaultTitle = 'Parsec Live';

//   usePageTitle(defaultTitle);

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <CartProvider>
//           <Navbar />
//           <Scrollbtn />
//           <div className='pages'>
//             <Routes>
//               <Route path='/' element={<Home />} />
//               <Route path='/event' element={<Events />} />
//               <Route path='/contactus' element={<ContactForm />} />
//               <Route path='/about' element={<About />} />
//               <Route path="/event/:id" element={<EventDetails />} />
//               <Route path='/privacy-policy' element={<Privacy />} />
//               <Route path='/success' element={<SuccessPage />} />
//               <Route path='/failure' element={<FailurePage />} />
//               <Route path='/admin' element={<UploadApp />} />
//             </Routes>
//           </div>
//           <Footer />
//         </CartProvider>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';

// Pages and components
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import ContactForm from './components/pages/ContactForm';
import Footer from './components/Footter';
import About from './components/pages/Aboutpg';
import Scrollbtn from './components/scrollbutton';
import EventDetails from './components/pages/EventDetails';
import Events from './components/pages/Events';
import CartPage from './components/CartPage';
import Privacy from './components/pages/Privacypg';
import SuccessPage from './components/pages/Successpg';
import FailurePage from './components/pages/Failedpg';
import UploadApp from './components/UploadApp';

// Custom hook to update the page title
function usePageTitle(defaultTitle) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let pageTitle = defaultTitle;

    switch (path) {
      case '/event':
        pageTitle += ' - Events';
        break;
      case '/contactus':
        pageTitle += ' - Contact Us';
        break;
      case '/about':
        pageTitle += ' - About';
        break;
      case '/privacy-policy':
        pageTitle += ' - Privacy Policy';
        break;
      case '/success':
        pageTitle += ' - Success';
        break;
      case '/failure':
        pageTitle += ' - Failure';
        break;
      case '/admin':
        pageTitle += ' - Admin';
        break;
      default:
        if (path.startsWith('/event/')) {
          pageTitle += ' - Event Details';
        } else {
          pageTitle += ' - Home';
        }
        break;
    }

    document.title = pageTitle;
  }, [location, defaultTitle]);
}

function App() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.tagName === 'IMG' || e.target.classList.contains('no-copy')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const defaultTitle = 'Parsec Live';

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Scrollbtn />
          <PageTitleUpdater defaultTitle={defaultTitle} />
          <div className='pages'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/event' element={<Events />} />
              <Route path='/contactus' element={<ContactForm />} />
              <Route path='/about' element={<About />} />
              <Route path="/event/:id" element={<EventDetails />} />
              <Route path='/privacy-policy' element={<Privacy />} />
              <Route path='/success' element={<SuccessPage />} />
              <Route path='/failure' element={<FailurePage />} />
              <Route path='/admin' element={<UploadApp />} />
            </Routes>
          </div>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

function PageTitleUpdater({ defaultTitle }) {
  usePageTitle(defaultTitle);
  return null;
}

export default App;
