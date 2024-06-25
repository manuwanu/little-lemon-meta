import React from "react";
import restaurant from '../images/restauranfood.jpg';
import { Link } from "react-router-dom";
import bruchetta from "../images/bruchetta.svg";
import lemon from "../images/lemon dessert.jpg";
import greek from "../images/greek salad.jpg"

const Header = () => {
    return (
        <header>
            <div className="container bg-green">
                <section id="reservation" className="limited-width">
                    <div className="reserve">
                        <h1 className="yellow">Little Lemon</h1>
                        <h2 className="white">Chicago</h2>
                        <p className="white">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Link to="/booking"><button className="button">Reserve a Table</button></Link>
                    </div>
                    <figure className="headerImage">
                        <img src={restaurant} alt='chef holding food' />
                    </figure>
                </section>
            </div>
            <section id="specials" className="limited-width">
                <div className="specials--title">
                    <h2>This weeks specials!</h2>
                    <button className="button">Online Menu</button>
                </div>
                <div className="specials--dishes">
                    <article className="specials--card">
                        <div className="specials--image">
                            <img src={greek} alt="Image of a greek salad" />
                        </div>
                        <div className="specials--text">
                        <h3>Greek Salad<span>$12.99</span></h3>
                        <p>
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                        </div>
                        <button type='submit' className="order-delivery">Order a delivery <i className="fa fa-shopping-cart"></i></button>
                    </article>
                    <article className="specials--card">
                        <div className="specials--image">
                            <img src={bruchetta} alt="four bruschettas served on a black plate." />
                        </div>
                        <div className="specials--text">
                        <h3>Bruschetta<span>$5.99</span></h3>
                        <p>
                            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                        </p>
                        </div>
                        <button type='submit' className="order-delivery">Order a delivery <i className="fa fa-shopping-cart"></i></button>
                    </article>
                    <article className="specials--card">
                        <div className="specials--image">
                            <img src={lemon} alt="minimalist lemon cake served on a white plate." />
                        </div>
                        <div className="specials--text">
                        <h3>Lemon Dessert<span>$4.99</span></h3>
                        <p>
                            This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                        </div>
                        <button type='submit' className="order-delivery">Order a delivery <i className="fa fa-shopping-cart"></i></button>
                    </article>
                </div>

            </section>
        </header>
    )

}

export default Header;