import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <ul className='footer-list'>
                <li className='footer-title'><h4>Navigation</h4></li>
                <li className="footer-link"><Link to="/">Home</Link></li>
                <li className="footer-link"><Link to="/about">About</Link></li>
                <li className="footer-link"><Link to="/menu">Menu</Link></li>
                <li className="footer-link"><Link to="/booking">Reservations</Link></li>
                <li className="footer-link"><Link to="/order">Order Online </Link></li>
                <li className="footer-link"><Link to="/login">Login</Link></li>
            </ul>
            <ul className='footer-list'>
                <li className='footer-title'><h4>Contact</h4></li>
                <li>12345 Boyle Trace, Chicago.</li>
                <li>{'('}000{')'} 420-1337</li>
                <li>little-lemon@email.com</li>
            </ul>
            <ul className='footer-list social'>
                <li className='footer-title'><h4>Social Media Links</h4></li>
                <li className="social-link"><a href="https://www.facebook.com/" target="_blank" className="fa fa-facebook fa-lg"><span className="sr-only">facebook</span></a></li>
                <li className="social-link"><a href="https://www.instagram.com/" target="_blank" className="fa fa-instagram fa-lg"><span className="sr-only">instagram</span></a></li>
                <li className="social-link"><a href="https://www.twitter.com/"target="_blank"  className="fa fa-twitter fa-lg"><span className="sr-only">twitter</span></a></li>
            </ul>
        </footer>
    )

}

export default Footer;