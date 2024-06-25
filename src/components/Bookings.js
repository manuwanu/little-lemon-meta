import React from 'react';
import { useState } from "react";
import BookingConfirmation from './BookingConfirmation';
import BookingForm from "./BookingForm";
import { Routes, Route } from 'react-router-dom';

const Bookings = (props) => {
    return (
        <>
        <BookingForm availableTimes={props.availableTimes}/>
        </>
    )
}

export default Bookings;