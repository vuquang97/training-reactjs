import React, { Component } from 'react';
import * as message from '../constans/Message';

class CartResult extends Component {
    render() {
        var { cart } = this.props;
        var tien = this.showTotalAmount(cart);
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{ this.showTotalAmount(cart) }$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light" onClick={ () => this.datPhim(tien, cart) }>
                        Complete purchase
                        <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }

    showTotalAmount = (cart) => {
        var total = 0;
        if(cart.length >0) {
            for(var i=0; i< cart.length; i++){
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
    }

    datPhim = (tien, cart) => {
        var { datPhim, onChangeMessage } = this.props;
        var soghe = JSON.parse(localStorage.getItem("CART"))[0].gheVuaChon; // lấy số ghế từ localStorage
        //var checkDatPhim = JSON.parse(localStorage.getItem("CHECKDATPHIM"));
        if(cart[0].gheVuaChon.length > 0) {
            datPhim(tien, cart[0].product, soghe);
            // if(checkDatPhim === 1) {
            //    // onChangeMessage(message.MSG_DAT_PHIM_THANH_CONG);
            // } else {
            //   //  onChangeMessage(message.MSG_KHONG_DU_TIEN);
            // }
            
        }else {
            onChangeMessage(message.MSG_PHAI_CHON_GHE);
        }
        
    }
}

export default CartResult;
