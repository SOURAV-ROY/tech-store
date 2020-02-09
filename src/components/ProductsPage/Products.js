import React from 'react';
import {ProductConsumer} from '../../context';
import Title from "../Title";
import Product from "../Product";
import ProductFilter from "./ProductFilter";

export default function Products() {
    return (
        <ProductConsumer>
            {value => {
                const {filteredProducts} = value;
                return <section className="py-5">

                    <div className="container">

                        {/*TITLE*/}
                        <Title title="Our Products" center/>

                        {/*PRODUCT FILTER*/}
                        <ProductFilter/>

                        {/********** TOTAL COUNT ************/}
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <h6 className="text-title text-center">
                                    total products : {filteredProducts.length}
                                </h6>
                            </div>

                        </div>
                        {/*********** TOTAL COUNT ***********/}

                        {/*ALL OUR PRODUCTS*/}

                        <div className="row py-3">

                            {filteredProducts.length === 0 ? (
                                <div className="col text-title text-center">
                                    Sorry No Item Matched Your Search !!!
                                </div>

                            ) : (
                                filteredProducts.map(product => {
                                    return <Product
                                        key={product.id}
                                        product={product}
                                    />;
                                })
                            )}

                        </div>

                    </div>

                </section>
            }}
        </ProductConsumer>
    );
};
