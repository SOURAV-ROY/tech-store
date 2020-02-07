import React from 'react';
import {ProductConsumer} from '../../context';
import CartItem from "./CartItem";

export default function CartList() {
    return (
        <div className="container-fluid">

            {/*ROW*/}
            <div className="row">
                <div className="col">
                    <ProductConsumer>
                        {
                            value => {
                                const {cart, increment, decrement, removeItem} = value;
                                if (cart.length === 0) {
                                    return (
                                        <h1 className="text-title text-center my-4 text-warning">
                                            Your Cart is Empty
                                        </h1>
                                    );
                                }
                                return (
                                    <div>
                                        {cart.map(item => (
                                            <CartItem
                                                key={item.id}
                                                cartItem={item}
                                                increment={increment}
                                                decrement={decrement}
                                                removeItem={removeItem}
                                            />
                                        ))}
                                    </div>
                                );
                            }
                        }
                    </ProductConsumer>
                </div>

            </div>
            {/*<CartItem/>*/}
        </div>
    );
};
