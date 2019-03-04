import React, { Component } from 'react';
import * as message from '../constans/Message';
import MessageContainer from '../containers/MessageContainer';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: ''
        };
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }


    render() {
        var { txtUsername, txtPassword } = this.state;
        var login = JSON.parse(localStorage.getItem("LOGIN"));
        return (

            <div className="row container ">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <legend className="text-center"><h2>Đăng nhập</h2></legend>
                    <div className="form-group">
                        <label>Username : </label>
                        <input type="text" className="form-control" name="txtUsername" value={txtUsername} onChange={this.onChange} placeholder="tên đăng nhập..." />
                    </div>
                    <div className="form-group">
                        <label>Password : </label>
                        <input type="password" className="form-control" name="txtPassword" value={txtPassword} onChange={this.onChange} placeholder="mật khẩu ..." />
                    </div>
                    <Link to={login ? '/' : '/dangnhap'}>
                        <div className="btn btn-primary" onClick={() => this.dangNhap(this.state)}>
                        { login ? 'Vào trang chủ' : 'Đăng nhập' }
                        </div>
                    </Link>
                    {login ? <MessageContainer /> : ''}
                </div>
            </div>

        );
    }

    dangNhap = (user) => {
        var { onDangNhap, onChangeMessage } = this.props;
        onDangNhap(user);
        onChangeMessage(message.MSG_DANG_NHAP)
        this.setState({
            txtUsername: '',
            txtPassword: '',
        });
    }
}

export default Login;
