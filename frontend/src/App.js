import { BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and components
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import ContactForm from './components/pages/ContactForm';
import Footer from './components/Footter';
import About from './components/pages/Aboutpg';
import Scrollbtn from './components/scrollbutton';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        <Scrollbtn />      
        <div className='pages'>
          <Routes>
            <Route 
              path='/'
              element={<Home/>}
            />  
            <Route
              path='/contactus'
              element={<ContactForm/>}
              
            />
            <Route
              path='/about'
              element={<About/>}
            
            />
          </Routes>
        </div>
        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
