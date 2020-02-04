import React from 'react';
import Product from "../Product";
import {Link} from 'react-router-dom';
import Title from "../Title";
import {ProductConsumer} from '../../context';

export default function Featured() {
    return (
        <section className="py-5">
            <div className="container">

                {/*TITLE*/}
                <Title title="Featured Product" center="true"/>

                {/*PRODUCT*/}
                <div className="row">
                    <ProductConsumer>
                        {value => {
                            const {featuredProducts} = value;

                            return featuredProducts.map(product => (
                                <Product
                                    key={product.id}
                                    product={product}
                                />
                                
                            ))
                        }}
                    </ProductConsumer>

                </div>
            </div>
        </section>
    );
};

