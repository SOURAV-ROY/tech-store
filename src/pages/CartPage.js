import React from "react";
import Hero from "../components/Hero";
import cartBcg from '../images/storeBcg.jpeg';
import CartSection from '../components/CartPage';

export default function CartPage(props) {
    // console.log(props);

    return (
        <>
            <Hero img={cartBcg} title="cart Page"/>

            <CartSection
                history={props.history}
            />
        </>
    );
}
