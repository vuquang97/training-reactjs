import React, { Component } from 'react';

class TaskItem extends Component {
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
        return (
            <tr>
                <td>{index}</td>
                <td className="text-nowrap">{task.txtHoTen}</td>
                <td className="text-nowrap">{task.txtPhone}</td>
                <td className="text-nowrap">{task.txtDiaChi}</td>
                <td className="text-nowrap">{task.txtUsername}</td>
                <td className="text-nowrap">{task.txtPassword}</td>
                <td className="text-nowrap">{task.maQuyenHan}</td>
                <td className="text-center">
                    <span className={task.status ? "label label-success" : "label label-warning"}
                        onClick={this.onUpdateStatus}
                    >{task.status ? 'online' : 'offline'}</span>
                </td>
                <td className="text-center">
                    <button type="button" className=" buttonbe" onClick={this.onUpdate}>
                        <span className="fa fa-pencil "></span>Sửa
                        </button>
                    <button type="button" className=" buttonbe" onClick={this.onDelete}>
                        <span className="fa fa-trash" ></span>Xóa
                        </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
