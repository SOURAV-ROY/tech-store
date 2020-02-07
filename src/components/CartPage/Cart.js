import React from 'react';
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart() {
    return (
        <section className="py-5">
            {/*TITLE*/}
            <div className="container">
                <Title title="Your Cart items" center/>

            </div>

            {/*CART COLUMNS*/}
            <CartColumns/>

            {/*CART LIST*/}
            <CartList/>

            {/*CART TOTALS*/}
            <CartTotals/>

        </section>
    );
};
