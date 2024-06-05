import {useState} from 'react'
import contactpic from './contactcover.jpg'
import Headname from '../Headname'
import emailpic from './email.png'
import phonepic from './phone.png'





const ContactForm = () => {
    const [name , setName] = useState('')
    // const [phone, setPhone] = useState('')
    const [email , setMail] = useState('')
    const [query , setQuery] = useState('')

    const [error , setError] = useState('')

    const [confirm , setConfirm] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()

        const querydata = {name, email, query}
        
            const response = await fetch('api/contactus', {
                method: 'POST',
                body:JSON.stringify(querydata),
                headers:{
                    'Content-Type':'application/json'
                }
               
            })
            const json = await response.json()

            if (!response.ok){
                setError(json.error)
                console.log(error)
            }
            if (response.ok){
                setName('')
                setMail('')
                // setPhone('')
                setQuery('')
                setError(null)
                // console.log('We have recieved your message!', json)
                setConfirm('We have recieved your message!')
            }
    

    }

    
    return (
    <div className='total'>

        <Headname name='Contact' pic={contactpic}/>
        <div className='contact-lhsrhs'>
        
                <div className='contact-lhs'>
                    <h1>Get In Touch</h1>
                    <p>Have any questions or suggestions? We'd love to hear from you! Give us a call or leave your message via the contact 
                     form:</p>
                    <div className='contact-icons'>
                        <div className='contact-icon'>
                            <img src={phonepic} alt='X'></img>
                            <div className='contact-icon-info'>
                                <p>Contact</p>
                                <p>+1(202)-4914515</p>
                            </div>

                        </div>

                        <div className='contact-icon'>
                            <img src={emailpic} alt='X'></img>
                            <div className='contact-icon-info'>
                                <p>Email</p>
                                <p>contact@parseclive.com</p>
                            </div>

                        </div>
                    </div>


                </div>
                <form className='contact-rhs' onSubmit={handleSubmit}>

              


                    <div className='contact-n-e'>
                        <div className='cont-n'>
                            <label>Name *</label>
                            <input 
                                type='text' 
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder='Your name'
                            />    

                    
                    
                        </div> 
                    
                   

                        <div className='cont-e'>
                            <label>Email *</label>
                            <input 
                                type='email'
                                onChange={(e) => setMail(e.target.value)}
                                value={email}
                                placeholder='Your email'
                            />

                         </div>
                    

                    </div>
                    <div className='msg-box'>
                        <label >Message *</label>
                        <textarea 
                            className='queryinp'
                            type='text'
                            onChange={(e)=> setQuery(e.target.value)}
                            value={query}
                            placeholder='Please type your message'
                        />
                        <button className='btn'>SEND MESSAGE</button>



                    </div>
                    <div className='confirmation'>
                        <p>{confirm}</p>

                    </div>
                    

                    

                </form>




        </div>
        
    </div>
        

    )



}

export default ContactForm