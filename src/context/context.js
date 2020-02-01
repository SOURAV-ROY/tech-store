import React, {Component} from "react";
import {linkData} from './linkData';

const ProductContext = React.createContext(undefined, undefined);

//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 11,
        links: linkData
    };
//**********handel Sidebar *****************************************************
    handelSidebar = () => {
        this.setState({sidebarOpen: !this.state.sidebarOpen})
    };

//***************Handel Cart *******************************************************
    handelCart = () => {
        this.setState({cartOpen: !this.state.cartOpen})
    };

//****************Close Cart ***************************************************
    closeCart = () => {
        this.setState({cartOpen: false})
    };

//****************Open Cart ***************************************************
    openCart = () => {
        this.setState({cartOpen: true})
    };


    render() {

        return (
            <ProductContext.Provider
                value={
                    {
                        ...this.state,
                        handelSidebar: this.handelSidebar,
                        handelCart: this.handelCart,
                        closeCart: this.closeCart,
                        openCart: this.openCart
                    }
                }>

                {this.props.children}

            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
