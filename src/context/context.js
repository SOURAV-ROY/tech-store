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
        loading: true,

        search: '',
        price: 0,
        min: 0,
        max: 0,
        company: 'all',
        shipping: false


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

        // console.log(storeProducts);

//********************************** Featured Products ******************************
        let featuredProducts = storeProducts.filter(item => item.featured === true);

//************************ GET MAX PRICE *****************************
        let maxPrice = Math.max(...storeProducts.map(item => item.price));
        // console.log(maxPrice);

        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            // filteredProducts:[],
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false,

            price: maxPrice,
            max: maxPrice

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
        return localStorage.getItem('singleProduct') ? JSON.parse(localStorage.getItem('singleProduct')) : {};
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

        let product = this.state.storeProducts.find(item => item.id === id);
        localStorage.setItem('singleProduct', JSON.stringify(product));
        this.setState({
            singleProduct: {...product},
            loading: false
        })
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

//*************Cart Functionality *****************************************
//*****************Increment *************************************

    increment = (id) => {
        // console.log(` increment ${id}`);
        let tempCart = [...this.state.cart];
        const cartItem = tempCart.find(item => item.id === id);
        // console.log(cartItem);
        cartItem.count++;

        cartItem.total = cartItem.count * cartItem.price;
        cartItem.total = parseFloat(cartItem.total.toFixed(2));

        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotals();
            this.syncStorage();
        });
    };

//*****************Decrement *************************************
    decrement = (id) => {
        // console.log(` decrement ${id}`);

        let deTempCart = [...this.state.cart];
        const deCartItem = deTempCart.find(item => item.id === id);

        deCartItem.count = deCartItem.count - 1;

        if (deCartItem.count === 0) {
            this.removeItem(id);

        } else {

            deCartItem.total = deCartItem.count * deCartItem.price;

            deCartItem.total = parseFloat(deCartItem.total.toFixed(2));

            this.setState(() => {
                return {
                    cart: [...deTempCart]
                }

            }, () => {
                this.addTotals();
                this.syncStorage();
            });
        }
    };

//*****************Remove Item ***********************************
    removeItem = (id) => {
        // console.log(` Remove Item ${id}`);
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);

        this.setState({
            cart: [...tempCart]

        }, () => {
            this.addTotals();
            this.syncStorage();
        })

    };

//*****************Clear Cart ************************************
    clearCart = () => {
        // console.log("Just Clear Cart :(");
        this.setState({
            cart: []

        }, () => {
            this.addTotals();
            this.syncStorage();
        })
    };
//*********** Handle Filtering ***********************************
    handelChange = (event) => {
        // console.log(event);
        const name = event.target.name;
        const value = event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value;
        // console.log(`Name: ${name}, Value ${value}`);

        this.setState({
            [name]: value
        }, this.sortData);
    };

    sortData = () => {

        const {
            storeProducts,
            price,
            company,
            shipping,
            search
        } = this.state;

        // console.log( typeof price);

        let tempPrice = parseInt(price);
        // console.log( typeof tempPrice);

        let tempProducts = [...storeProducts];

//***********************************PRICE FILTER*****************************************
        tempProducts = tempProducts.filter(item => item.price <= tempPrice);
//********************************END PRICE FILTER****************************************

//***************************** FILTERING BASED ON COMPANY ********************************
        if (company !== "all") {
            tempProducts = tempProducts.filter(item => item.company === company)
        }
//*****************************END FILTERING BASED ON COMPANY *****************************
//************************************* SHIPPING ******************************************
        if (shipping) {
            tempProducts = tempProducts.filter(item => item.freeShipping === true);
        }
//********************************** END SHIPPING ******************************************
//**************************************SEARCH**********************************************
        if (search.length > 0) {
            // eslint-disable-next-line array-callback-return
            tempProducts = tempProducts.filter(item => {
                let tempSearch = search.toLowerCase();
                let temTitle = item.title.toLowerCase().slice(0, search.length);
                if (tempSearch === temTitle) {
                    return item;
                }
            })
        }
//************************************ END SEARCH ******************************************
        this.setState({
            filteredProducts: tempProducts
        });

    };

//*****************************************************************************************

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
                    setSingleProduct: this.setSingleProduct,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                    handleChange: this.handelChange

                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
