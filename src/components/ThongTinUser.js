import React, { Component } from 'react';
import DanhSachPhim from './DanhSachPhim';
import { Link } from 'react-router-dom';
class ThongTinUser extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task.id)
    }

    render() {
        var users = JSON.parse(localStorage.getItem("USER"));
        
        var t = JSON.parse(localStorage.getItem("LOGIN"))[0];

        var user = users.filter((user, index) => {
            return t.txtUsername === user.txtUsername
        });


        

        var elmTask = user[0].gioPhim.map((task, index) => {
            return <DanhSachPhim key={task.id} index={index} task={task[0]} />;
        })
        return (
            <div className="container">
            <Link to='/'><button type="button" className="btn btn-warning"><i className="fas fa-home"></i>&nbsp;Home</button></Link>
                <div className="text-center">
                    <h1>Thông Tin Tài Khoản</h1><hr /><br />
                </div>
                <div className="form-group"><h3><srong>Họ Tên : {user[0].txtHoTen}</srong></h3></div>
                <div className="form-group"><h3><srong>Địa Chỉ : {user[0].txtDiaChi}</srong></h3></div>
                <div className="form-group"><h3><srong>Điện Thoại : {user[0].txtPhone}</srong></h3></div>
                <div className="form-group"><h3><srong>Ví Tiền : {user[0].viTien}</srong></h3></div>
                <hr />


                <table className="table table-bordered table-hover mt-15">
                    <thead>
                        <tr className="text-nowrap">
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên Phim</th>
                            <th className="text-center">Thể Loại</th>
                            <th className="text-center">Ngày Chiếu</th>
                            <th className="text-center">Số lượng vé</th>
                            <th className="text-center">Ghế</th>
                            <th className="text-center">Tổng tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elmTask}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default ThongTinUser;
