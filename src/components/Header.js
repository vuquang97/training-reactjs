import React, { Component } from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            selected: 0
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    // <li className="breadcrumb-item">
    //     <a onClick={() => this.trangChu()} >Trang Chủ</a>
    // </li>

    onClick = (value) => { //thể loại
        var { timKiemTheLoai } = this.props;
        timKiemTheLoai(value);
        this.setState({
            selected: value
        });
    }

    render() {
        var { name, selected } = this.state;
        var userName = JSON.parse(localStorage.getItem('LOGIN'));
        return (
            <header className="">

                <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">
                    <div className="float-left">
                        <div data-activates="slide-out" className="button-collapse">
                            <i className="fa fa-bars"></i>
                        </div>
                    </div>
                    <div className=" mr-auto">
                        <ol className="breadcrumb header-breadcrumb">
                            <Menu />
                        </ol>
                    </div>

                    <div className="input-group input_search">
                        <input type="text" placeholder="Nhập từ khóa..." className="form-control" name='name' value={name} onChange={this.onChange} />
                        <span className="input-group-btn">
                            <Link to='/'><button className="btn btn-primary" onClick={() => this.timKiem(name)}>Tìm</button></Link>
                        </span>
                        <div className="dropdown"> {/* tìm theo thể loại */}
                            <button
                                className="btn btn-primary dropdown-toggle "
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                            >Thể loại &nbsp;<span className="caret "></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li className="drop-dow" onClick={() => this.onClick(0)}>Tất cả&nbsp;{selected === 0 ? <i className="fas fa-check-circle"></i> : ''}</li>
                                <li className="drop-dow" onClick={() => this.onClick(1)}>Hành động&nbsp;{selected === 1 ? <i className="fas fa-check-circle"></i> : ''}</li>
                                <li className="drop-dow" onClick={() => this.onClick(2)}>Tình cảm&nbsp;{selected === 2 ? <i className="fas fa-check-circle"></i> : ''}</li>
                                <li className="drop-dow" onClick={() => this.onClick(3)}>Đời thường&nbsp;{selected === 3 ? <i className="fas fa-check-circle"></i> : ''}</li>
                                <li className="drop-dow" onClick={() => this.onClick(4)}>Hài hước&nbsp;{selected === 4 ? <i className="fas fa-check-circle"></i> : ''}</li>
                            </ul>
                        </div>
                    </div>
                    {/* đăng nhập đăng xuất*/}
                    <ul className="nav navbar-nav nav-flex-icons ml-auto">
                        <li className=" dropdown">
                            <div className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="fa fa-user"></i> {userName ? userName[0].txtUsername : 'Tài khoản'}</div>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                              <div className="dropdown-item waves-effect waves-light">Đăng Ký</div>
                               <div className="dropdown-item waves-effect waves-light">Đăng nhập</div>
                               <div className="dropdown-item waves-effect waves-light" >Đăng Xuất</div>
                        <div className="dropdown-item waves-effect waves-light" onClick={() => this.onNapTien()}>Nạp tiền</div>
                                <div className="dropdown-item waves-effect waves-light" onClick={() => this.onNapTien()}>Thông tin</div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }

    timKiem = (name) => {
        var { timKiem } = this.props;
        timKiem(name);
        this.setState({
            name: ''
        });
    }

}

export default header;
