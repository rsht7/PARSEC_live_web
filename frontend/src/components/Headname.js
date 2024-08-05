import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './compassets/logo.png';

const Headname = (props) => {
    const [maxHeight, setMaxHeight] = useState(getMaxHeight());

    useEffect(() => {
        const handleResize = () => {
            setMaxHeight(getMaxHeight());
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function getMaxHeight() {
        const width = window.innerWidth;
        if (width <= 600) return '30vh';
        if (width <= 850) return '35vh';
        if (width <= 1030) return '38vh';
        if (width <= 1380) return '60vh';
        return '70vh';
    }

    return (
        <div className='head-name'>
            <div 
                className='page-img' 
                style={{ 
                    backgroundImage: `url(${props.pic})`, 
                    maxHeight: maxHeight,
                    minHeight: '35vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className='Page-head'>
                    <p className='page-name'>{props.name}</p>
                    <p className='page-path'>
                        <Link to="/">Home</Link> &gt; {props.name} {props.eventname}
                    </p>
                </div>
            </div>
            <div className='bglogo'>
                <img src={logo} alt='Logo' />
            </div>
        </div>
    );
}

export default Headname;
