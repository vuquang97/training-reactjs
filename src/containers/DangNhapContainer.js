import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actDangNhap, actChangeMessage } from '../actions/index';
import DangNhap from '../components/DangNhap';

class DangNhapContainer extends Component {
    render() {
        var { onDangNhap, onChangeMessage, dangnhap } = this.props;
        return (
            <DangNhap onDangNhap={ onDangNhap } onChangeMessage={ onChangeMessage } dangnhap={ dangnhap } />
        );
    }
    
}

var mapStateToProps = (state) => {
    return {  // chuyển state trên store thành props product
        dangnhap: state.dangnhap
    }
}


var mapDispatchToProps = (dispatch, props) => {
    return {
        onDangNhap: (user) => {
            dispatch(actDangNhap(user));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DangNhapContainer);
