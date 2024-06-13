import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Pages and components

import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import ContactForm from './components/pages/ContactForm';
import Footer from './components/Footter';
import About from './components/pages/Aboutpg';
import Scrollbtn from './components/scrollbutton';
import EventDetails from './components/pages/EventDetails';
import Events from './components/pages/Events';
import Privacy from './components/pages/Privacypg'

function App() {

 
  return (
    
    <div className="App">
      <BrowserRouter>
      
        <Navbar />
        <Scrollbtn />
        <div className='pages'>
          <Routes >
          
            <Route path='/' element={<Home />} />
            <Route path='/event' element={<Events />} />
            <Route path='/contactus' element={<ContactForm />} />
            <Route path='/about' element={<About />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path='/privacy-policy' element={<Privacy/>}/>
          
          </Routes>
        </div>
        <Footer />
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;

// import { Routes, Route, useLocation } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

//  Pages and components
// import Home from './components/pages/Home';
// import Navbar from './components/Navbar';
// import ContactForm from './components/pages/ContactForm';
// import Footer from './components/Footter';
// import About from './components/pages/Aboutpg';
// import Scrollbtn from './components/scrollbutton';
// import EventDetails from './components/pages/EventDetails';
// import Events from './components/pages/Events';


// function App() {
//   const location = useLocation();

//   return (
//     <div className="App">
//       <Navbar />
//       <Scrollbtn />
//       <div className="pages">
//         <TransitionGroup>
//           <CSSTransition
//             key={location.key}
//             classNames="slide-up"
//             timeout={300}
//           >
//             <Routes location={location}>
//               <Route path="/" element={<Home />} />
//               <Route path="/event" element={<Events />} />
//               <Route path="/contactus" element={<ContactForm />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/event/:id" element={<EventDetails />} />
//             </Routes>
//           </CSSTransition>
//         </TransitionGroup>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;
