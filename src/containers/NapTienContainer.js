import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actNapTien, actChangeMessage } from '../actions/index';
import NapTien from '../components/NapTien';

class NapTienContainer extends Component {
    render() {
        var { onNapTien, onChangeMessage } = this.props;
        return (
            <NapTien onNapTien={ onNapTien } onChangeMessage={ onChangeMessage }  />
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
        onNapTien: (tienNap) => {
            dispatch(actNapTien(tienNap));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NapTienContainer);
