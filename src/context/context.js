import React, {Component} from "react";
import {linkData} from "./linkData";
import {socialData} from './socialData';
import {items} from './productData';

const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {

    state = {
        sidebarOpen: false,
        cartOpen: false,
        links: linkData,
        socialIcons: socialData,
        cart: [],
        cartItems: 0,
        cartSubTotal: 0,
        cartTotal: 0,
        cartTax: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: false


    };

    componentDidMount() {
//     From content_ful  items

        this.setProducts(items);
    }

//    Set Products ***************************************************************
    setProducts = (products) => {

        let storeProducts = products.map(item => {
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = {id, ...item.fields, image};
            return product;
        });

        console.log(storeProducts);

//********************************** Featured Products ******************************
        let featuredProducts = storeProducts.filter(item => item.featured === true);

        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false

        }, () => {
            this.addTotals();
        });
    };

// ************************** Get Cart From local Storage **************************************
    getStorageCart = () => {
        let cart;
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        } else {
            cart = [];
        }
        return cart;

    };

// ************************** Get Product From local Storage ***********************************
    getStorageProduct = () => {
        return []
    };

//*************************Get Totals ***********************************************
    getTotals = () => {

        let subTotal = 0;
        let cartItems = 0;

        this.state.cart.forEach(item => {
            subTotal += item.total;
            cartItems += item.count
        });

        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.2;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax;
        total = parseFloat(total.toFixed(2));

        return {
            cartItems,
            subTotal,
            tax,
            total
        };
    };

    //*************************Add Totals ***********************************************
    addTotals = () => {

        const totals = this.getTotals();
        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total
        })

    };

//*************************Sync Storage ***********************************************
    syncStorage = () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));

    };

//*************************Add To Cart ***********************************************
    addToCart = (id) => {

        console.log(`Add to cart ${id}`);

        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find(item => item.id === id);
        if (!tempItem) {
            tempItem = tempProducts.find(item => item.id === id);
            let total = tempItem.price;
            let cartItem = {...tempItem, count: 1, total};
            tempCart = [...tempCart, cartItem];

        } else {
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }
        this.setState(() => {
            return {cart: tempCart}

        }, () => {
            this.addTotals();
            this.syncStorage();
            this.openCart();
        })
    };

//************************* Set Single Product ***********************************************
    setSingleProduct = (id) => {
        console.log(`Set single product ${id}`);
    };

//********************* Handle sidebar***********************************
    handleSidebar = () => {
        this.setState({sidebarOpen: !this.state.sidebarOpen});
    };

// *********************** Handle Cart **********************************
    handleCart = () => {
        this.setState({cartOpen: !this.state.cartOpen});
    };

//*************************close cart*************************************
    closeCart = () => {
        this.setState({cartOpen: false});
    };

// *************************Open Cart*************************************
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
                    openCart: this.openCart,
                    addToCart: this.addToCart,
                    setSingleProduct: this.setSingleProduct
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
