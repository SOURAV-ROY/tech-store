import React from 'react';
import styled from "styled-components";
import {ProductConsumer} from '../../context';

export default function ProductFilter() {
    return (
        <ProductConsumer>
            {value => {
                const {
                    search,
                    min,
                    max,
                    company,
                    price,
                    shipping,
                    handleChange,
                    storeProducts
                } = value;


                let companies = new Set();
                companies.add("ALL");

                for (let product in storeProducts) {

                    companies.add(storeProducts[product]["company"])
                }
                // let companies = storeProducts.map(item => item.company);

                companies = [...companies];
                console.log(companies);

                return (
                    <div className="row my-3">
                        <div className="col-10 mx-auto">
                            <FilterWrapper>

                                {/*TEXT SEARCH*/}
                                <div>
                                    <label htmlFor="search">Search Products</label>
                                    <input
                                        type="text"
                                        name="search"
                                        id="search"
                                        value={search}
                                        onChange={handleChange}
                                        className="filter-item"
                                    />
                                </div>
                                {/*END OF TEXT SEARCH*/}

                                {/*CATEGORY SEARCH*/}
                                <div>
                                    <label htmlFor="company">company</label>
                                    <select
                                        name="company"
                                        id="company"
                                        value={company}
                                        onChange={handleChange}
                                        className="filter-item"
                                    >
                                        {/*<option value="all">all</option>*/}
                                        {/*<option value="htc">htc</option>*/}
                                        {/*<option value="fuji">fuji</option>*/}

                                        {
                                            companies.map((company, index) => {
                                                return <option
                                                    key={index}
                                                    value={company}
                                                >{company}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                {/*END OF CATEGORY SEARCH*/}

                                {/*PRICE RANGE*/}
                                <div>
                                    <label htmlFor="price">
                                        <p className="mb-2">product price :<span> $ {price}</span></p>
                                    </label>
                                    <input
                                        type="range"
                                        name="price"
                                        id="price"
                                        min={min}
                                        max={max}
                                        value={price}
                                        onChange={handleChange}
                                        className="filter-price"
                                    />
                                </div>
                                {/*END OF PRICE RANGE*/}

                                {/*FREE SHIPPING */}
                                <div>
                                    <label htmlFor="shipping" className="mx-2">Free Shipping</label>
                                    <input
                                        type="checkbox"
                                        name="shipping"
                                        id="shipping"
                                        checked={shipping && true}
                                        onChange={handleChange}
                                    />
                                </div>
                                {/*END OF FREE SHIPPING */}

                            </FilterWrapper>

                        </div>
                    </div>
                )
            }}
        </ProductConsumer>
    );
};


const FilterWrapper = styled.div`
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                grid-column-gap: 2rem;
                grid-row-gap: 1rem;
                label {
                font-weight: bold;
                text-transform: capitalize;
                }
                .filter-item,
                .filter-price {
                display: block;
                width: 100%;
                background: transparent;
                border-radius: 0.5rem;
                border: 2px solid var(--darkGrey);
                }
                `;
