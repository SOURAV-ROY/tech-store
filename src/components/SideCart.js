import React from "react";
import {ProductConsumer} from "../context";
import styled from "styled-components";
import {Link} from 'react-router-dom';

export default function SideCart() {
    return (
        <ProductConsumer>
            {value => {
                const {cartOpen, closeCart, cart, cartTotal} = value;
                console.log(cart);

                return (
                    <CartWrapper show={cartOpen} onClick={closeCart}>

                        <ul>
                            {cart.map(item => {
                                return (
                                    <li key={item.id} className="cart-item mb-4">
                                        <img
                                            width="40px"
                                            src={`../${item.image}`}
                                            // src={item.image}
                                            alt="Cart item"
                                        />
                                        <div className="mt-3">
                                            <h6 className="text-uppercase">{item.title}</h6>
                                            <h6 className="text-title text-capitalize">amount: {item.count}</h6>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>

                        <h4 className="text-capitalize text-main">
                            total Price: ${cartTotal}
                        </h4>

                        <div className="text-center my-5">
                            <Link to="/cart" className="main-link">
                                cart page
                            </Link>

                        </div>

                    </CartWrapper>
                );
            }}
        </ProductConsumer>
    );
}

const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  border-left: 2px solid var(--primaryColor);
  transition: var(--mainTransition);
  @media (min-width: 576px) {
    width: 20rem;
  }
  overflow:scroll;
  padding: 2rem;
  ul{
  padding: 0 !important;
  }
  .cart-item{
  list-style-type: none;
  }
`;
