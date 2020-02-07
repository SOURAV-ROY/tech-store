import React from 'react';
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart() {
    return (
        <div>
            <CartColumns/>
            <CartList/>
            <CartTotals/>

        </div>
    );
};
