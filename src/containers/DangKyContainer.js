import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actDangKy, actChangeMessage } from '../actions/index';
import DangKy from '../components/DangKy';

class DangKyContainer extends Component {
    render() {
        var { onDangKy, onChangeMessage } = this.props;
        return (
            <DangKy onDangKy={ onDangKy } onChangeMessage={ onChangeMessage } />
        );
    }
    
}

var mapStateToProps = (state) => {
    return {
        products: state.products,  // chuyển state trên store thành props product
        cart: state.cart
    }
}


var mapDispatchToProps = (dispatch, props) => {
    return {
        onDangKy: (user) => {
            dispatch(actDangKy(user));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DangKyContainer);
