import React from "react";
import { useState } from "react";
import Header from './Header';
import Bookings from './Bookings';
import { Route, Routes} from "react-router-dom";
import BookingConfirmation from "./BookingConfirmation";



const Main = () => {

    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    const menuDishes = {};

    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/about" element={<Header />} />
                <Route path="/menu" element={<Header />} />
                <Route path="/order" element={<Header />} />
                <Route path="/login" element={<Header />} />
                <Route path="/booking" element={<Bookings availableTimes={availableTimes}/>} />
                <Route path="/booking/booking-success" element= {<BookingConfirmation/>} />
            </Routes>
        </main>


    )

}

export default Main;