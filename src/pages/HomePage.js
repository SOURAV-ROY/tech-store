import React from "react";
import Hero from "../components/Hero";
import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <Hero title="Awesome Gadgets" max="true">
                <Link
                    to="/products"
                    className='main-link'
                    style={{margin: '2rem'}}
                >
                    OUR PRODUCTS
                </Link>
            </Hero>
        </div>
    );
}
