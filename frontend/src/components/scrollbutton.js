
import topbtn4 from './compassets/topbtn4.png'


const Scrollbtn = ()=> {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling behavior
      });
    };
  
    return (
      <div className="scrollbtn" >  
        
        <img
            src={topbtn4}
            alt="Top"
            className="scroll-top-icon"
            onClick={scrollToTop}
        />

      </div>
    );
  }
  
  export default Scrollbtn;