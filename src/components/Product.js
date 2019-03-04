import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    render() {
        var { product } = this.props;
        return (

            <div className="col-lg-4 col-md-6 mb-r">
                <Link to={`${product.name}`}>
                    <div className="card text-center card-cascade narrower">
                        <div className="view overlay hm-white-slight z-depth-1">
                            <img src={product.image} className="img-fluid" alt="" /> {/*ảnh*/}
                        </div>
                        <div className="card-body">
                            <h4 className="card-title"><strong>{product.name}</strong></h4> {/*Tên*/}
                            <h5 className="card-text">{/*Thể loại*/}
                                <strong>
                                    Thể loại : {product.theloai === 1 ? 'Hành động' : product.theloai === 2 ? 'Tình cảm' : product.theloai === 3 ? 'Đời thường' : product.theloai === 4 ? 'Hài hước' : ''}
                                </strong>
                            </h5>
                            <h5 className="card-text"><strong>Trạng thái : {product.status ? 'Đang chiếu' : 'Sắp chiếu'}</strong></h5>
                            <h5 className="card-text"><strong> Ngày Chiếu : {product.ngaychieu}</strong></h5>
                            {/* <p className="card-text">{product.description}</p> */}
                            <ul className="rating">Đánh giá : {this.showRating(product.rating)}</ul>
                            <div className="card-footer">
                                <span className="left">{product.price}$</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
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

export default Product;
