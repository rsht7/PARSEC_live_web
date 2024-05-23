
import logo from './compassets/logo.png'



const Headname =(props)=>{
        return(
        <div className='head-name'> 

            <div className='page-img'><img src={props.pic}></img></div>
            <div className='bglogo'>
                    <img src={logo}></img>
            </div>
            
            <div className='Page-head'>
                <p className='page-name'>{props.name}</p>
                <p className='page-path'>Home &gt; {props.name}</p>

            </div>


        </div>    
            


        )
}

export default Headname

