import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addProduct, incrementQuantity, decrementQuantity } from '../actions/index';
import Ionicon from 'react-ionicons';

import '../styles/product.css'

class Products extends Component {
    handleClick = (product, index) => this.props.addProduct(product, index)
    
    eventOnQuantity = (product, index) => {if (product.inventory !== 1 && !product.inCart) this.props.incrementQuantity(index)}

    render() {
        const { products, decrementQuantity  } = this.props
        const plus = <Ionicon icon="ios-add-circle-outline"/>
        const minus = <Ionicon icon="ios-remove-circle-outline"/>
        const CircleButtons = ({inventory, quantity, index, product}) => (
            <div>
                <button 
                    className="circle" 
                    disabled={!inventory}
                    onClick={() => decrementQuantity(index)}>{minus}
                </button>
                {quantity}
                <button 
                    className="circle" 
                    disabled={!inventory} 
                    onClick={() => this.eventOnQuantity(product, index)}>{plus}
                </button>
            </div>
        )
        const SwitchButton = ({inCart, inventory, product, index}) => (
            <div>
                {!inCart ? 
                    <button 
                        className={inventory ? 'buy' : 'out_of_stock'} 
                        disabled={!inventory} 
                        onClick={() => this.handleClick(product, index)}>{inventory ? 'Add to cart' : 'Out of stock'}
                    </button> :
                    <button className="inCart">In Cart</button>}
            </div>
        )

        return (
            <div className="products">
                <h3>Products</h3>
                <div className="products-wrapp">
                    {products.map((product, index) => 
                        <li key={product.id}>
                            <img src={product.image} alt={product.title}/><br/>
                            {product.title}<br/>
                            quantity: 
                            <CircleButtons
                                inventory={product.inventory} 
                                quantity={product.quantity}
                                product={product} 
                                index={index}>
                            </CircleButtons>
                            price: ${product.price}<br/>
                            <SwitchButton 
                                inCart={product.inCart} 
                                inventory={product.inventory} 
                                product={product} 
                                index={index}>
                            </SwitchButton>
                        </li>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({
        addProduct: addProduct, 
        incrementQuantity: incrementQuantity, 
        decrementQuantity: decrementQuantity
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Products);