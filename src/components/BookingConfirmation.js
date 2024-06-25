import React from 'react';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const BookingConfirmation = (props) => {




    return (
        
        <section className='form-section'>
        <div className='form-title'>
        <h1 className="yellow">Little Lemon</h1>
        <h2 className='white' >Chicago</h2>
        </div>
            <fieldset className='form-field confirmation'>
                <h2>Thank you for your reservation!</h2>
                <p>You have successfully booked your table</p>
                   
                
            </fieldset>
        </section>)
};

export default BookingConfirmation; 