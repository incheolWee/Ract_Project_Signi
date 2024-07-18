import React from 'react';
import illustration from '../../assets/images/illustration.png';
import '../css/Illustration.css';

const Illustration = () => {
    return (
        <div className='illustration'>
            <img src={illustration} alt="Illustration" />
        </div>
    );
};

export default Illustration;