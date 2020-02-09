import React from 'react';
import {FaTrash, FaChevronCircleRight, FaChevronCircleLeft} from 'react-icons/fa';

export default function CartItem({cartItem, increment, decrement, removeItem}) {

    const {id, title, price, count, total, image} = cartItem;

    return (
        <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">

            {/*IMAGE*/}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <img src={image} width='60px' className="img-fluid" alt="product"/>
            </div>
            {/*END OF IMAGE*/}

            {/*TITLE*/}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none">product : </span>
                {title}
            </div>
            {/*END OF TITLE*/}

            {/*PRICE*/}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none">price : $</span>
                {price}
            </div>
            {/*END OF PRICE*/}

            {/*COUNT CONTROLS*/}
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <FaChevronCircleLeft
                            onClick={() => decrement(id)}
                            className="cart-icon text-primary"
                        />
                        <span className="text-title text-muted mx-3">
                            {count}
                        </span>
                        <FaChevronCircleRight
                            onClick={() => increment(id)}
                            className="cart-icon text-primary"
                        />
                    </div>
                </div>
            </div>
            {/*END OF COUNT CONTROLS*/}

            {/*ITEM TOTAL*/}
            <div className="col-10 mx-auto col-lg-2">
                <strong className="text-muted">sub total : ${total}</strong>
            </div>
            {/*END OF ITEM TOTAL*/}

            {/*REMOVE ITEM*/}
            <div className="col-10 mx-auto col-lg-2">
                <FaTrash
                    onClick={() => removeItem(id)}
                    className="text-danger cart-icon"
                />
            </div>
            {/*END OF REMOVE ITEM*/}


        </div>
    );
};
