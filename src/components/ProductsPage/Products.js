import React from 'react';
import {ProductConsumer} from '../../context';
import Title from "../Title";
import Product from "../Product";
// import styled from "styled-components";

export default function Products() {
    return (
        <ProductConsumer>
            {value => {
                const {filteredProducts} = value;
                return <section className="py-5">
                    <div className="container">

                        {/*TITLE*/}
                        <Title title="Our Products" center/>

                        {/*ALL OUR PRODUCTS*/}
                        <div className="row py-3">
                            {filteredProducts.map(product => {
                                return <Product
                                    key={product.id}
                                    product={product}
                                />
                            })}

                        </div>
                    </div>

                </section>
            }}
        </ProductConsumer>
    );
};
