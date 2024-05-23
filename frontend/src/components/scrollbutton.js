
import topbtn1 from './compassets/topbtn1.png'


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
            src={topbtn1}
            alt="Top"
            className="scroll-top-icon"
            onClick={scrollToTop}
        />

      </div>
    );
  }
  
  export default Scrollbtn;