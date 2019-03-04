import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import { PropTypes } from 'prop-types'; // kiểm tra xem kiểu dữ liệu có đúng không
import HeaderContainer from './HeaderContainer';

class ProductContainer extends Component {
    render() {
        var { products,cart } = this.props;
        return (
            <Products>
                { this.showProducts(products, cart) }
                <HeaderContainer />
            </Products>
        );
    }

    showProducts(products, cart){
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return  <Product key={ index } product={ product } cart={ cart }/> 
            });
        }
        return result;
    }
}

ProductContainer.proptypes = { // kiểm tra xem kiểu dữ liệu có đúng không
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired
}

var mapStateToProps = (state) => {
    return {
        products: state.products,  // chuyển state trên store thành props product
        cart: state.cart
    }
}


export default connect(mapStateToProps)(ProductContainer);
