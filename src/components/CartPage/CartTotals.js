import React from 'react';
import {ProductConsumer} from '../../context'
import PayPalBtn from "./PayPalBtn";

export default function CartTotals() {
    return (
        <div className="container">
            <div className="row">
                <ProductConsumer>
                    {value => {
                        const {clearCart, cartSubTotal, cartTax, cartTotal} = value;

                        return (
                            <div className="col text-title text-center my-4">

                                <button
                                    className="btn btn-outline-danger text-capitalize mb-4"
                                    onClick={clearCart}
                                >clear cart
                                </button>

                                <h3>Sub Total : ${cartSubTotal}</h3>
                                <h3>Tax : ${cartTax}</h3>
                                <h3>Total Price : ${cartTotal}</h3>

                                <PayPalBtn/>
                            </div>
                        )
                    }}
                </ProductConsumer>

            </div>

        </div>
    );
};
