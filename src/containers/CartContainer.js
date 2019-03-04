import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types'; // kiểm tra xem kiểu dữ liệu có đúng không
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import * as messages from '../constans/Message';
import CartResult from '../components/CartResult';
import { actDeleteProductInCart, actChangeMessage, actTangVe, actGiamVe, actChonGhe, actDatPhim } from '../actions/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                { this.showCartItem(cart) }
                { this.showTotalAmount(cart) }
            </Cart>
        )
    }

    showCartItem = (cart) => {
        var result = <tr><td>{ messages.MSG_CART_EMPTY }</td></tr>;
        var { onDeleteProductInCart, onChangeMessage, tangVe, giamVe, chonGhe } = this.props;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem key={ index } item={ item } index={ index } 
                        onDeleteProductInCart={ onDeleteProductInCart }
                        onChangeMessage={ onChangeMessage }
                        tangVe={ tangVe }
                        giamVe={ giamVe }
                        chonGhe={ chonGhe }
                    />
                )
            });
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        var { datPhim, onChangeMessage } = this.props;
        if(cart.length >0) {
              result =  <CartResult cart={ cart } datPhim={ datPhim } onChangeMessage={ onChangeMessage }/>
        }
        return result;
    }
}

CartContainer.proptypes = { // kiểm tra xem kiểu dữ liệu có đúng không
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isrequired,
            quantity: PropTypes.number.isRequired
        })
    )
}.isRequired

var mapStateToProps = (state) => {
    return {
        cart: state.cart  // chuyển state trên store thành props Cart
    }
}

var mapDispatchToProp = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {  //lấy dữ liệu từ component con truyền cho component cha
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (messages) => {
            dispatch(actChangeMessage(messages));
        },
        tangVe: (product) => {
            dispatch(actTangVe(product));
        },

        giamVe: (product) => {
            dispatch(actGiamVe(product));
        },

        chonGhe: (product, index) => {
            dispatch(actChonGhe(product, index));
        },
        datPhim: (tien, product, soghe) => {
            dispatch(actDatPhim(tien, product, soghe));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(CartContainer);
