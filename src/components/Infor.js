import React, { Component } from 'react';
import CartContainer from '../containers/CartContainer';
import MessageContainer from '../containers/MessageContainer';
import Menu from './Menu';
import * as message from '../constans/Message';

class Infor extends Component {

    render() {
        var { item } = this.props;
        return (
            <div className="container">
                <header>
                    <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">
                        <div className="float-left">           
                            <i className="fa fa-bars"></i>
                        </div>
                        <div className="breadcrumb-dn mr-auto">
                            <ol className="breadcrumb header-breadcrumb">
                                <Menu />
                            </ol>
                        </div>
                    </nav>
                </header>
                <div className="text-center">
                    <h1>THÔNG TIN PHIM</h1><hr /><br />
                </div>
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <img src={item.image} className="img-fluid" alt="image" />
                    </div>
                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 card">
                        <strong><h2>Phim : {item.name}</h2></strong>
                        <strong><h5>thể loại : {item.theloai === 1 ? 'Hành động' : item.theloai === 2 ? 'Tình cảm' : item.theloai === 3 ? 'Đời thường' : item.theloai === 4 ? 'Hài hước' : ''}</h5></strong>
                        <strong><h5>Hãng  : {item.hangsanxuat}</h5></strong>
                        <strong><h5>Ngày : {item.ngaychieu}</h5></strong>
                        <strong><h5><ul className="rating">Đánh giá : {this.showRating(item.rating)}</ul></h5></strong>
                        <strong><h5>Price : {item.price}$</h5></strong>
                        <div className="btn btn-primary dat-phim"  onClick={() => this.onAddToCart(item)}>Đặt Phim</div>
                    </div>
                </div>
                <br />
                <div>
                    <h3>NỘI DUNG</h3>
                    <strong><h5>{item.description}</h5></strong>
                </div>
                <hr />
                <MessageContainer />
                <CartContainer />
            </div>
        );
    }

    onAddToCart = (item) => {
        var { cart, onAddToCart, onChangeMessage } = this.props;
        if (cart.length <= 0) {
            onAddToCart(item);
            onChangeMessage(message.MSG_ADD_TO_CART_SUCCESS);
        } else {
            onChangeMessage(message.MSG_KIEM_TRA_TONG_SO_PHIM);
        }
    }


    showRating(rating) {
        var result = [];
        var derating = 5 - rating;
        for (var i = 0; i < rating; i++) {
            result.push(<li key={i}><i className="fa fa-star"></i></li>)
        }
        for (var j = 0; j < derating; j++) {
            result.push(<li key={i + j}><i className="far fa-star"></i></li>)
        }
        return result;
    }

}

export default Infor;
