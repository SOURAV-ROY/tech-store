import React, {Component} from "react";
import {linkData} from "./linkData";

const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
    state = {
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 22,
        links: linkData,
        cart: []
    };

//********************* handle sidebar*******************************
    handleSidebar = () => {
        this.setState({sidebarOpen: !this.state.sidebarOpen});
    };

// ************************************ Handle Cart***********************
    handleCart = () => {
        this.setState({cartOpen: !this.state.sidebarOpen});
    };

//*************************close cart*******************************
    closeCart = () => {
        this.setState({cartOpen: false});
    };

// **************open********************************************************
    openCart = () => {
        this.setState({cartOpen: true});
    };

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleSidebar: this.handleSidebar,
                    handleCart: this.handleCart,
                    closeCart: this.closeCart,
                    openCart: this.openCart
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
