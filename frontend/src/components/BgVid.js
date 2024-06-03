//  import parsec_exmbg from '../assets/parsec_exmbg.mp4'


//  const BgVid =()=>{
//     return (
//             <div className='main'>
//                 <video src={parsec_exmbg} autoPlay loop muted />
//             </div>
//     )
//  }

//  export default BgVid
 
 
 
useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);