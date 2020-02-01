import React from "react";
import {ProductConsumer} from "../context";
import styled from "styled-components";

export default function SideCart() {
    return (
        <ProductConsumer>
            {value => {
                const {cartOpen, closeCart, cart} = value;
                return (
                    <CartWrapper show={cartOpen} onClick={closeCart}>
                        <p>cart items</p>
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
`;
