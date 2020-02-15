# Tech Shop #

## COMMANDS ##
```
    npm install --save react-router-dom 
    npm install --save react-icons 
    npm install --save styled-components 
    npm install --save bootstrap
```
## PayPal ##
    npm install --save react-paypal-express-checkout
    
```
STORE
├── App.js
│   
├── components
│   |── AboutPage
│   |   └── Info.js
|   |
│   ├── CartPage
│   |   |── Cart.js
|   |   |── CartColumn.js
|   |   |── CartItem.js
|   |   |── CartList.js
|   |   |── CartTotals.js
|   |   |── PayPalBtn.js
|   |   └── package.json
|   |   
|   |── ContactPage
|   |   └── Contact.js
|   |
|   |── HomePage
|   |   |── Featured.js
|   |   └── Services.js
|   |
|   |── ProductsPage
|   |   |── ProductFilter.js
|   |   └── Products.js
|   |
|   |── Footer.js
|   |── Hero.js
|   |── Navbar.ja
|   |── Product.js
|   |── Sidebar.js
|   |── SideCart.js
│   └── Title.js
|
├── context
|   |── contentful.js
|   |── context.js
|   |── linkData.js
|   |── productData.js
|   |── socialData.js
│   └── package.json
|
|── images
|
├── pages
|   |── AboutPage.js
|   |── CartPage.js
|   |── ContactPage.js
|   |── DefaultPage.js
|   |── HomePage.js
|   |── ProductsPage.js
│   └── SingleProductPage.js  
|
└── index.js
```

## Contentful ##
    npm install contentful
    
### componentDidMount(*){--} ###

```js
client.getEntries({
    content_type: 'techStoreProduct'
})
    .then(response => this.setProducts(response.items))
    .catch(console.error)
```
```
├── context
    └── contentful.js
```
```javascript
export const client = contentful.createClient({

    accessToken: process.env.REACT_APP_ACCESS_TOKEN,

    space: process.env.REACT_APP_SPACE_ID
});
```
## **Set Products** ##

```js
setProducts = (products) => {

    let storeProducts = products.map(item => {
        const {id} = item.sys;
        const image = item.fields.image.fields.file.url;
        const product = {id, ...item.fields, image};
        return product;
    });

    let featuredProducts = storeProducts.filter(item => item.featured === true);

    let maxPrice = Math.max(...storeProducts.map(item => item.price));

    this.setState({
        storeProducts,
        filteredProducts: storeProducts,
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
```
## Get Cart From local Storage ##

```js
getStorageCart = () => {
    let cart;
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
    } else {
        cart = [];
    }
    return cart;

};
```
