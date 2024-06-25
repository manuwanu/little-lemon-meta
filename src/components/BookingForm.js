import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {

    const [occasion, setOccasion] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [date, setDate] = useState('');
    const history = useNavigate();

    const availableTimes = props.availableTimes;

    const availableTimeOptions = availableTimes.map(x => {
         return (<option value={x} key={'key'+ x} >{x}</option>)
    });
    


    const handleSumbit = (e) => {
        e.preventDefault();
        history('./booking-success');
        console.log({availableTimeOptions});
        
    }




    return (
        
        <section className='form-section'>
        <div className='form-title'>
        <h1 className="yellow">Little Lemon</h1>
        <h2 className='white' >Chicago</h2>
        </div>
            <form  onSubmit={handleSumbit}>
                <fieldset className='form-field'>

                    <label htmlFor='date'>Choose date:</label>
                    <input className='form-option' id='date' value={date} onChange={(e) => setDate(e.target.value)} type='date' required />
                        
                    <label htmlFor='time'> Choose time: </label>
                    <select className='form-option selection' id='time' value={time} onChange={(e) => setTime(e.target.value)} required>
                        <option value='' hidden>Select Time</option>
                        {availableTimeOptions}
                    </select>

                    <label htmlFor='guests'>Number of Guests: </label>
                    <input type='number' className='form-option' id='guests' min='1' placeholder='1' max='10' value={guests} onChange={(e) => { setGuests(e.target.value) }} ></input>

                    <label htmlFor='occasion'>Occasion: </label>
                    <select className='form-option selection' id='occasion' key='occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                        <option value='' hidden >Select an Ocasion</option>
                        <option value='graduation'>Graduation</option>
                        <option value='birthday'>Birthday</option>
                        <option value='anniversary'>Anniversary</option>
                        <option value='corporate'>Corporate Event</option>
                        <option value='other'>Other</option>
                    </select>
                    <input type='submit' value='Make your reservation' className='button'></input>
                </fieldset>
            </form>
        </section>
    );
};

export default BookingForm;