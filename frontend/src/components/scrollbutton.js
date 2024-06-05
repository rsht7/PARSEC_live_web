
import topbtn2 from './compassets/topbtn2.png'


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
            src={topbtn2}
            alt="Top"
            className="scroll-top-icon"
            onClick={scrollToTop}
        />

      </div>
    );
  }
  
  export default Scrollbtn;