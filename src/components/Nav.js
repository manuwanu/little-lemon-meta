import React from 'react';
import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='container'>
        <nav className='nav limited-width'>
            <Link  to='/'>
                <img className='logo' src={logo} alt='little lemon logo' />
            </Link>
            <input type='checkbox' id='check'></input>
            <ul className='nav__navigation'>
                <li>
                    <Link className='link' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='link' to='/about'>About</Link>
                </li>
                <li>
                    <Link className='link' to='/menu'>Menu</Link>
                </li>
                <li>
                    <Link className='link' to='/booking'>Reservations</Link>
                </li>
                <li>
                    <Link className='link' to='/order'>Order</Link>
                </li>
                <li>
                    <Link className='link' to='/login'>Login</Link>
                </li>

            </ul>
        </nav>
        </div>
    )
}

export default Nav;