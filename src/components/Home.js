import React, { Component } from 'react';
import ProductContainer from '../containers/ProductContainer';
//import CartContainer from '../containers/CartContainer';
import MessageContainer from '../containers/MessageContainer';
import PhimHot from './PhimHot';
import HeaderContainer from '../containers/HeaderContainer';

class Home extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <div className="row container">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <PhimHot />
                    </div>
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <div className="container">
                            <ProductContainer />
                            <MessageContainer />
                            {/* <CartContainer /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
