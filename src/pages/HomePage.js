import React from "react";
import {ProductConsumer} from '../context';

export default function HomePage() {
    return (
        <div>
            <ProductConsumer>
                {/*{value => <h2>{value}</h2>}*/}
                {value => {
                    console.log(value);
                    return <h1>Hello from hone page</h1>
                }}
            </ProductConsumer>
        </div>
    );
}
