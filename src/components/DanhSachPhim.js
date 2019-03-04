import React, { Component } from 'react';

class DanhSachPhim extends Component {
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
        var { task, index } = this.props;
        var ghe = task.gheVuaChon.map((ghe, index) => {
            return <i key={index}>{ ghe + " , " }</i> ;
        })
        return (
            <tr className="text-center">
                <td>{index}</td>
                <td className="text-nowrap">{task.product.name}</td>
                <td className="text-nowrap">{task.product.theloai === 1 ? 'Hành động' : task.product.theloai === 2 ? 'Tình cảm' : task.product.theloai === 3 ? 'Đời thường' : task.product.theloai === 4 ? 'Hài hước' : ''}</td>
                <td className="text-nowrap">{task.product.ngaychieu}</td>
                <td className="text-nowrap">{task.quantity}</td>
                <td className="text-nowrap">{ghe}</td>
                <td className="text-nowrap">{task.tongTien}$</td>
            </tr>
        );
    }
}

export default DanhSachPhim;
