import React, { Component } from 'react';
import * as message from '../constans/Message';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          soghe: '',
        }
      }
    
      getText = (event) => { // lấy giá trị từ input và cập nhập vào state
        var target = event.target;
        var name = target.name;
        var value = parseInt(target.value);
        this.setState({
          [name]: value,
        });
        
      }
  render() {
      var { item } = this.props;
      var { soghe } = this.state;
    return (

        <tr>
            
            <th scope="row">
                <img src={ item.product.image } alt="" className="img-fluid z-depth-0" />
            </th>
            <th>
                <h5>
                    <strong>{ item.product.name }</strong>
                </h5>
            </th>
            <th>{ item.product.price }$</th>
            <th className="center-on-small-only">
                <span className="qty">{ item.quantity } </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light" onClick={ () => this.giamVe(item.product) }>
                        —
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light" onClick={ () => this.tangVe(item.product) }> 
                        +
                    </label>
                </div><br />
            </th>
            <th>{ this.showSubTotal(item.product.price, item.quantity) }$ </th>
            <th>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                    title="" data-original-title="Remove item"
                    onClick={ () => this.onDeleteProductInCart(item.product) }
                >
                    X
                </button>
            </th>
            <span className="row ghex">
                <span className={ item.gheVuaChon.indexOf(1) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(1) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 1)}>1</span>
                <span className={ item.gheVuaChon.indexOf(2) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(2) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 2)}>2</span>
                <span className={ item.gheVuaChon.indexOf(3) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(3) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 3)}>3</span>
                <span className={ item.gheVuaChon.indexOf(4) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(4) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 4)}>4</span>
                <span className={ item.gheVuaChon.indexOf(5) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(5) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 5)}>5</span>
                <span className={ item.gheVuaChon.indexOf(6) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(6) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 6)}>6</span>
                <span className={ item.gheVuaChon.indexOf(7) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(7) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 7)}>7</span>
                <span className={ item.gheVuaChon.indexOf(8) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(8) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 8)}>8</span>
                <span className={ item.gheVuaChon.indexOf(9) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(9) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 9)}>9</span>
                <span className={ item.gheVuaChon.indexOf(10) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(10) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 10)}>10</span>
                <span className={ item.gheVuaChon.indexOf(11) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(11) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 11)}>11</span>
                <span className={ item.gheVuaChon.indexOf(12) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(12) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 12)}>12</span>
                <span className={ item.gheVuaChon.indexOf(13) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(13) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 14)}>13</span>
                <span className={ item.gheVuaChon.indexOf(14) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(14) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 14)}>14</span>
                <span className={ item.gheVuaChon.indexOf(15) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(15) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 15)}>15</span>
                <span className={ item.gheVuaChon.indexOf(16) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(16) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 16)}>16</span>
                <span className={ item.gheVuaChon.indexOf(17) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(17) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 17)}>17</span>
                <span className={ item.gheVuaChon.indexOf(18) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(18) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 18)}>18</span>
                <span className={ item.gheVuaChon.indexOf(19) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(19) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 19)}>19</span>
                <span className={ item.gheVuaChon.indexOf(20) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(20) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 20)}>20</span>
                <span className={ item.gheVuaChon.indexOf(21) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(21) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 21)}>21</span>
                <span className={ item.gheVuaChon.indexOf(22) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(22) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 22)}>22</span>
                <span className={ item.gheVuaChon.indexOf(23) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(23) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 23)}>23</span>
                <span className={ item.gheVuaChon.indexOf(24) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(24) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 24)}>24</span>
                <span className={ item.gheVuaChon.indexOf(25) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(25) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 25)}>25</span>
                <span className={ item.gheVuaChon.indexOf(26) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(26) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 26)}>26</span>
                <span className={ item.gheVuaChon.indexOf(27) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(27) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 27)}>27</span>
                <span className={ item.gheVuaChon.indexOf(28) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(28) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 28)}>28</span>
                <span className={ item.gheVuaChon.indexOf(29) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(29) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 29)}>29</span>
                <span className={ item.gheVuaChon.indexOf(30) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(30) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 30)}>30</span>
                <span className={ item.gheVuaChon.indexOf(31) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(31) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 31)}>31</span>
                <span className={ item.gheVuaChon.indexOf(32) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(32) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 32)}>32</span>
                <span className={ item.gheVuaChon.indexOf(33) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(33) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 33)}>33</span>
                <span className={ item.gheVuaChon.indexOf(34) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(34) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 34)}>34</span>
                <span className={ item.gheVuaChon.indexOf(35) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(35) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 35)}>35</span>
                <span className={ item.gheVuaChon.indexOf(36) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(36) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 36)}>36</span>
                <span className={ item.gheVuaChon.indexOf(37) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(37) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 37)}>37</span>
                <span className={ item.gheVuaChon.indexOf(38) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(38) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 38)}>38</span>
                <span className={ item.gheVuaChon.indexOf(39) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(39) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 39)}>39</span>
                <span className={ item.gheVuaChon.indexOf(40) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(40) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 40)}>40</span>
                <span className={ item.gheVuaChon.indexOf(41) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(41) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 41)}>41</span>
                <span className={ item.gheVuaChon.indexOf(42) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(42) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 42)}>42</span>
                <span className={ item.gheVuaChon.indexOf(43) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(43) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 43)}>43</span>
                <span className={ item.gheVuaChon.indexOf(44) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(44) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 44)}>44</span>
                <span className={ item.gheVuaChon.indexOf(45) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(45) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 45)}>45</span>
                <span className={ item.gheVuaChon.indexOf(46) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(46) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 46)}>46</span>
                <span className={ item.gheVuaChon.indexOf(47) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(47) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 47)}>47</span>
                <span className={ item.gheVuaChon.indexOf(48) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(48) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 48)}>48</span>
                <span className={ item.gheVuaChon.indexOf(49) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(49) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 49)}>49</span>
                <span className={ item.gheVuaChon.indexOf(50) !== -1 ?  'ghe_vua_chon' : item.product.ghe.indexOf(50) !== -1 ? 'ghe_chon' : "ghe_trong" } onClick={ () => this.chonGhe(item, 50)}>50</span>
            </span>
        </tr>
            
    );
  }

  showSubTotal = (price, quantity) => {//tính tổng tiền
      return price * quantity;
  }

  onDeleteProductInCart = (product) => { // xóa sản phẩm trong cart
      var { onDeleteProductInCart, onChangeMessage } = this.props;
      onDeleteProductInCart(product);
      onChangeMessage(message.MSG_DELETE_PRODUCT_IN_CART_CUCCESS);
  }

  tangVe = (product) => {
      var { tangVe } = this.props;
      tangVe(product);
  }

  giamVe = (product) => {
      var { giamVe } = this.props;
      giamVe(product);
  }

    //hiển thị ghế
    // ghe = (gheDaChon, gheVuaChon) => { //gheDaChon: ghế trong props( là ghế đã được chọn từ trước ,item.product.ghe) 
    //     var result = [];                //gheVuaChon: ghế vừa đc mới chọn (item.gheVuaChon)
    //     for(var i=0; i<50; i++) {
    //         result.push(<span className={ gheDaChon.indexOf(i+1) !== -1 ?  'ghe_chon' : "ghe_trong" } key={i} >{ i+1 }</span>) 
    //     }

    //     if(gheVuaChon.length >0) { //màu đỏ
    //         for(var i=0; i<gheDaChon.length; i++) {
    //             if(gheDaChon.indexOf(gheVuaChon[i]) !== -1) {
    //                 result[gheVuaChon[i]-1] = <span className= 'ghe_vua_chon' key={gheVuaChon[i]-1} >{ gheVuaChon[i] }</span>
    //             };
    //         }
    //     };

    //     return result;
    // }

    //gửi thông tin chọn ghế vào props
    chonGhe = (item,gheVuaChon) => { // gheChuaChon : ghế trong state,  gheDaChon: ghế trong props
        var { chonGhe, onChangeMessage } = this.props;
        if(gheVuaChon) {
            if(item.product.ghe.indexOf(gheVuaChon) === -1) {
                if(item.quantity === item.gheVuaChon.length+1) { // kiểm tra xem số ghế chọn có bằng số vé không
                    chonGhe(item.product,gheVuaChon);
                    onChangeMessage(message.MSG_GHE_CHUA_CHON);
                }else {
                    onChangeMessage(message.MSG_GHE_PHAI_BANG_VE);
                }
            }else {
                onChangeMessage(message.MSG_GHE_DA_CHON);
            }
        }else {
            onChangeMessage(message.MSG_XIN_HAY_NHAP_SO_GHE);
        }
        this.setState({
            soghe: '',
        });
    }
}

export default CartItem;
