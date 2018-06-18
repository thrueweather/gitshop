import * as types from '../constants/actionTypes.js'

const initialState = {
    products: [
        {
            id: 1,
            title: 'Invertocat 2.0 Shirt',
            image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/invertocat_250x250_crop_center.png?v=1520399398',
            quantity: 1,
            price: 25.00,
            inCart: false
        },
        {
            id: 2,
            title: 'I [octocat] Code 2.0 Shirt',
            image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/i-octocat-code_250x250_crop_center.png?v=1520399372',
            quantity: 1,
            price: 25.00,
            inCart: false
        },
        {
            id: 3,
            title: 'Kids Octocat Raglan Tee',
            image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/raglan_250x250_crop_center.png?v=1520399431',
            quantity: 1,
            price: 18.00,
            inCart: false
        },
        {
            id: 4,
            title: 'Octocat One-Piece',
            image: 'https://cdn.shopify.com/s/files/1/0051/4802/products/onesie_250x250_crop_center.png?v=1520399465',
            quantity: 1,
            price: 18.00,
            inCart: false
        }
    ],
    cart: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_PRODUCT:
            return Object.assign({}, state, {
                cart: [...state.cart, action.payload],
                products: [
                    ...state.products.map((product, index) => {
                        if(index === action.index) {
                            return Object.assign({}, product, {
                                inCart: true
                            })
                        }
                        return product
                    })
                ]
            });
        case types.DELETE_PRODUCT: 
            return Object.assign({}, state, {
                cart: [
                    ...state.cart.slice(0, action.payload),
                    ...state.cart.slice(action.payload + 1)
                ],
                products: [
                    ...state.products.map((product, index) => {
                        if(index === -1 + action.id) {
                            return Object.assign({}, product, {
                                inCart: false
                            })
                        }
                        return product
                    })
                ]
            });
        case types.INCREMENT_QUANTITY:
            return Object.assign({}, state, {
                products: [
                    ...state.products.map((product, index) => {
                        if(index === action.payload) {
                            return Object.assign({}, product, {
                                quantity: product.quantity + 1
                            })
                        }
                        return product
                    })
                ]
            });
        case types.DECREMENT_QUANTITY:
            return Object.assign({}, state, {
                products: [
                    ...state.products.map((product, index) => {
                        if(index === action.payload) {
                            return Object.assign({}, product, {
                                quantity: product.quantity - 1
                            })
                        }
                        return product
                    })
                ]
            });   
        case types.CLEAR_CART:
            return Object.assign({}, state, {
                cart: []
            });
        default: 
            return state
    }
};

export default reducer;