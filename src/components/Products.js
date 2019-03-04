import React, { Component } from 'react';

class Products extends Component {
    render() {

        var { children } = this.props;
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Phim</h1>
                <h2>Phim Đang Chiếu</h2><hr />
                <div className="row">
                    { this.showPhimDangChieu(children) }
                </div><hr />
                <h2>Phim Sắp Chiếu</h2><hr />
                <div className="row">
                    { this.showPhimSapChieu(children) }
                </div>
                <h2>Tất Cả Phim</h2><hr />
                <div className="row">
                    {this.props.children}
                </div>
            </section>
        );
    }

    showPhimDangChieu = (product) => {
        var result = null;
        if (product.length > 0) {
            result = product[0].filter((item, index) => {
                return item.props.product.status ? item : '';
            });
        }
        return result;
    }

    showPhimSapChieu = (product) => {
        var result = null;
        if (product.length > 0) {
            result = product[0].filter((item, index) => {
                return item.props.product.status ? '' : item;
            });
        }
        return result;
    }
}

export default Products;
