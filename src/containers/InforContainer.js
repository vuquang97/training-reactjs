import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddToCart, actChangeMessage } from '../actions/index';
import Infor from '../components/Infor';

class InforContainer extends Component {
    render() {
        var { onAddToCart, cart, onChangeMessage } = this.props;
        var item = this.showInfor();
        return (
            <Infor onAddToCart={ onAddToCart } cart={ cart } onChangeMessage={ onChangeMessage } item={ item[0] }/>
        );
    }
    
    showInfor = () => {
        var { match } = this.props;
        var data = JSON.parse(localStorage.getItem('PRODUCT'));
        var result = null;
        if (match) {
            result = data.filter((item, index) => {
                if (item.name === match.params.name) {
                    return item;
                }
            });
        }
        return result;
    };
    
}

var mapStateToProps = (state) => {
    return {
        products: state.products,  // chuyển state trên store thành props product
        cart: state.cart
    }
}


var mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product , 1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InforContainer);
