import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PhimHot extends Component {

    render() {
        var product = this.showInfor();
        return (
            <div className="card Phimhot text-center narrower">
                <Link to={`${product.name}`}>
                    <h2>Phim Hot</h2><br />
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image} className="img-fluid img-thumbnail" alt="ảnh phim" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>{product.name}</strong>
                        </h4>
                        {/* <p className="card-text">{product.description}</p> */}
                        {/* <ul className="rating">
                        Đánh giá : {this.showRating(product.rating)}
                    </ul> */}
                        <div className="card-footer">
                        </div>
                    </div>
                </Link>
            </div>
        );
    }

    showInfor = () => {
        var data = JSON.parse(localStorage.getItem('PRODUCT'));
        var total = data[0].ghe.length;

        var result = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i].ghe.length > total) {
                total = data[i].ghe.length;
                result = i;
            }
        }
        return data[result];
    }

    // showRating(rating) {
    //     var result = [];
    //     var derating = 5 - rating;
    //     for (var i = 0; i < rating; i++) {
    //         result.push(<li key={i}><i className="fa fa-star"></i></li>)
    //     }
    //     for (var j = 0; j < derating; j++) {
    //         result.push(<li key={i + j}><i className="fas fa-star"></i></li>)
    //     }
    //     return result;
    // }

}

export default PhimHot;
