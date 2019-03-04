import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer center-on-small-only">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 ml-auto">
                            <h5 className="title social-section-title">Social Media</h5>
                            <div className="social-section text-md-left">
                                <ul className="text-center">
                                    <li className="btn-floating  btn-fb waves-effect waves-light">
                                        <i className="fab fa-facebook"></i>
                                    </li>
                                    <li className="btn-floating  btn-fb waves-effect waves-light">
                                        <i className="fab fa-instagram"></i>
                                    </li>
                                    <li className="btn-floating  btn-fb waves-effect waves-light">
                                        <i className="fab fa-twitter"></i>
                                    </li>
                                    <li className="btn-floating  btn-fb waves-effect waves-light">
                                        <i className="fab fa-youtube"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <h5 className="title">Delivery</h5>
                            <ul>
                                <li>Store Delivery</li>
                                <li>Online Delivery</li>
                                <li>Delivery Terms &amp; Conditions</li>
                                <li>Tracking</li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h5 className="title">Need help?</h5>
                            <ul>
                                <li>FAQ</li>
                                <li> Contact Us</li>
                                <li>Return Policy</li>
                                <li> Product Registration</li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="title">Instagram Photos</h5>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container-fluid">© 2016 Copyright: MDBootstrap.com </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
