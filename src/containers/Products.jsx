import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addProduct, incrementQuantity, decrementQuantity } from '../actions/index';
import { connect } from 'react-redux';
import Ionicon from 'react-ionicons';
import '../styles/product.css'

class Products extends Component {
    handleClick = (product, index) => {
        this.props.addProduct(product, index)
    }
    render() {
        const { products, decrementQuantity, incrementQuantity } = this.props
        const plus = <Ionicon icon="ios-add-circle-outline"/>
        const minus = <Ionicon icon="ios-remove-circle-outline"/>

        return (
            <div className="products">
                <h3>Products</h3>
                <div className="products-wrapp">
                    {products.map((product, index) => {
                        return (
                            <li key={product.id}>
                                <img src={product.image} alt={product.title}/><br/>
                                {product.title}<br/>
                                quantity: 
                                <button className="circle" onClick={() => decrementQuantity(index)}>{minus}</button>
                                {product.quantity >= 1 ? product.quantity : product.quantity = 1}
                                <button className="circle" onClick={() => incrementQuantity(index)}>{plus}</button><br/>
                                price: ${product.price}<br/>
                                {product.inCart === false ?
                                    <button className="buy" onClick={() => this.handleClick(product, index)}>Add to cart</button>
                                :<button className="inCart">In Cart</button>}
                            </li>
                        )
                    })}
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