import React, { Component } from 'react';
import * as message from '../constans/Message';
import { Link } from 'react-router-dom';
import MessageContainer from '../containers/MessageContainer';

class DangKy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtUsername: '',
            txtPassword: '',
            txtHoTen: '',
            txtPhone: '',
            txtDiaChi: '',
            maQuyenHan: 1,
            gioPhim: [],
            viTien: 0
        };
    }

    
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var id = this.generateID();
        this.setState({
            id: id,
            [name]: value
        });
    }

    s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); //tạo 1 chuỗi bất kỳ
    }

    generateID = () => {  //tạo ID bất kỳ
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4()
            + '-' + this.s4() + '-' + this.s4();
    }

    render() {
        var { txtUsername, txtPassword,txtHoTen, txtDiaChi, txtPhone } = this.state;
        var checkDk = JSON.parse(localStorage.getItem('DANGKYTHANHCONG'));
        return (

            <div className="row container">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <legend>Đăng ký</legend>
                        <div className="form-group">
                            <label>Username : </label>
                            <input type="text" className="form-control" name="txtUsername" value={txtUsername} onChange={this.onChange} placeholder="Tên đăng nhập" />
                        </div>
                        <div className="form-group">
                            <label>Password : </label>
                            <input type="password" className="form-control" name="txtPassword" value={txtPassword} onChange={this.onChange} placeholder="Mật khẩu" />
                        </div>
                        <div className="form-group">
                            <label>Họ Tên : </label>
                            <input type="text" className="form-control" name="txtHoTen" value={txtHoTen} onChange={this.onChange} placeholder="Họ tên" />
                        </div>
                        <div className="form-group">
                            <label>Phone : </label>
                            <input type="text" className="form-control" name="txtPhone" value={txtPhone} onChange={this.onChange} placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group">
                            <label>Địa chỉ : </label>
                            <input type="text" className="form-control" name="txtDiaChi" value={txtDiaChi} onChange={this.onChange} placeholder="Địa chỉ" />
                        </div>
                        {/* <Link to={ checkDk === 1 ? '/dangnhap' : '/dangky' }><div className="btn btn-primary" onClick={ () => this.onDangKy(this.state) } >Đăng ký</div></Link> */}
                        <div className="btn btn-primary" onClick={ () => this.onDangKy(this.state) } >Đăng ký</div>
                        { checkDk === 1 ? <Link to='/dangnhap'><div className="btn btn-primary" onClick={ () => this.onDangKy(this.state) }>Đăng nhập ngay</div></Link> : '' }
                        { checkDk === 1 ? <MessageContainer /> : '' }
                </div>
            </div>

        );
    }

    onDangKy = (user) => {
        var { onDangKy, onChangeMessage } = this.props;
        onDangKy(user);
        onChangeMessage(message.MSG_DANG_KY);
        this.setState({
            txtUsername: '',
            txtPassword: '',
            txtHoTen: '',
            txtPhone: '',
            txtDiaChi: '',
        });
    }
}

export default DangKy;
