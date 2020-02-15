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
│   |── Aboutpage
│   |   └── Info
│   ├── CartPage
│   |   |── Cart.js
|   |   |── CartColumn.js
|   |   |── CartItem.js
|   |   |── CartList.js
|   |   |── CartTotals.js
|   |   |── PayPalBtn.js
|   |   └── index.js
│   └── index.js
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
