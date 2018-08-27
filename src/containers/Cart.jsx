import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clearCart, deleteItem } from '../actions/index'
import Ionicon from 'react-ionicons';

import '../styles/cart.css'

class Cart extends Component {
    handleClick = () => {
        alert('Thanks for buy :)');
        setTimeout(() => (this.props.clearCart()), 500);
    }
    render() {
        const { cart, deleteItem } = this.props
        const total = cart.reduce((sum, curr) => (sum + curr.price * curr.quantity), 0)
        const lengthInCart = {fontWeight: 100, fontSize: 14}

        return (
            <div className="cart">
                <h3>Cart <Ionicon icon="ios-cart"/><span style={lengthInCart}>({cart.length})</span></h3>
                <div className="cart-wrapp">
                    {cart.length ? 
                        <div>
                            {cart.map((item, index) => 
                                <li key={item.id}>
                                    {item.title}
                                    <button className="delete-item" onClick={() => deleteItem(index, item)}>x</button><br/>
                                    <img src={item.image} alt={item.title}/><br/>
                                    quantity: {item.quantity}
                                    <br/>
                                    price: ${item.price}
                                    <hr/>
                                </li>
                            )}
                            <br/>
                            ${total}
                            <br/>
                            <button className="chekout" type="button" onClick={() => this.handleClick()}>Chekout</button>
                        </div>
                    : <div>Please add products to cart.</div>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({ 
        clearCart: clearCart,
        deleteItem: deleteItem 
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Cart);