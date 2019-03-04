import React, { Component } from 'react';

class TaskForm extends Component {
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
            viTien: 0,
            status: false
        }
    }

    componentWillMount() {
        if (this.props.onUpdate) {
            this.setState({
                id: this.props.onUpdate.id,
                txtUsername: this.props.onUpdate.txtUsername,
                txtPassword: this.props.onUpdate.txtPassword,
                txtHoTen: this.props.onUpdate.txtHoTen,
                txtPhone: this.props.onUpdate.txtPhone,
                txtDiaChi: this.props.onUpdate.txtDiaChi,
                maQuyenHan: this.props.onUpdate.maQuyenHan,
                gioPhim: this.props.onUpdate.gioPhim,
                viTien: this.props.onUpdate.viTien,
                status: this.props.onUpdate.status
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.onUpdate) {
            this.setState({
                id: nextProps.onUpdate.id,
                txtUsername: nextProps.onUpdate.txtUsername,
                txtPassword: nextProps.onUpdate.txtPassword,
                txtHoTen: nextProps.onUpdate.txtHoTen,
                txtPhone: nextProps.onUpdate.txtPhone,
                txtDiaChi: nextProps.onUpdate.txtDiaChi,
                maQuyenHan: nextProps.onUpdate.maQuyenHan,
                gioPhim: nextProps.onUpdate.gioPhim,
                viTien: nextProps.onUpdate.viTien,
                status: nextProps.onUpdate.status
            });
        } else if (!nextProps.onUpdate) {
            this.setState({
                id: '',
                txtUsername: '',
                txtPassword: '',
                txtHoTen: '',
                txtPhone: '',
                txtDiaChi: '',
                maQuyenHan: 1,
                gioPhim: [],
                viTien: 0,
                status: false
            });
        }
    }

    closeTaskForm = () => {
        this.props.closeTaskForm(false);
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value,
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.submitTaskForm(this.state);
        this.onClearForm();
    }

    onClearForm = () => {
        this.setState({
            id: '',
            txtUsername: '',
            txtPassword: '',
            txtHoTen: '',
            txtPhone: '',
            txtDiaChi: '',
            maQuyenHan: 1,
            gioPhim: [],
            status: false
        });
        this.closeTaskForm();
    }


    render() {
        var { id, txtUsername, txtPassword, txtHoTen, txtPhone, txtDiaChi } = this.state;
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id !== '' ? "Cập nhật công việc" : "Thêm công việc"}
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Họ Tên: </label>
                            <input type="text" name="txtHoTen" className="form-control" value={txtHoTen} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Điện thoại : </label>
                            <input type="text" name="txtPhone" className="form-control" value={txtPhone} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Địa chỉ : </label>
                            <input type="text" name="txtDiaChi" className="form-control" value={txtDiaChi} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Tài khoản: </label>
                            <input type="text" name="txtUsername" className="form-control" value={txtUsername} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Mật khẩu: </label>
                            <input type="text" name="txtPassword" className="form-control" value={txtPassword} onChange={this.onChange} />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-warning" type="submit">Thêm</button>&nbsp;&nbsp;
                    <button className="btn btn-danger" type="button" onClick={this.onClearForm}>Hủy bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
