# Tech Shop #

## COMMANDS ##
```
    npm install --save react-router-dom 
    npm install --save react-icons 
    npm install --save styled-components 
    npm install --save bootstrap
```

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
|   |── Title.js
│   └── index.js
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
    
```js
client.getEntries({
    content_type: 'techStoreProduct'
})
    .then(response => this.setProducts(response.items))
    .catch(console.error)
```

## PayPal ##
    npm install --save react-paypal-express-checkout
