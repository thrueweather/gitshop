export const addProduct = (product, index) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product,
        index: index
    }
}

export const deleteItem = (index, item) => {
    return {
        type: 'DELETE_PRODUCT', 
        payload: index,
        id: item.id
    }
}

export const incrementQuantity = index => {
    return {
        type: 'INCREMENT_QUANTITY',
        payload: index
    }
}

export const decrementQuantity = index => {
    return {
        type: 'DECREMENT_QUANTITY',
        payload: index
    }
}

export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}