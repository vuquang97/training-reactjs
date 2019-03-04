import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { actChangeMessage, actTimKiem, actTimKiemTheLoai  } from '../actions/index';

class HeaderContainer extends Component {
    render() {
        var { dangnhap, onChangeMessage, timKiem, timKiemTheLoai } = this.props;
        return (
            <Header  dangnhap={ dangnhap }   onChangeMessage={ onChangeMessage } timKiem={ timKiem }  timKiemTheLoai={ timKiemTheLoai }/>
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
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },

        timKiem: (name) => {
            dispatch(actTimKiem(name));
        },

        timKiemTheLoai: (theloai) => {
            dispatch(actTimKiemTheLoai(theloai));
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

