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
                <td>{ index }</td>
                <td  className="text-nowrap">{ task.name }</td>
                <td  className="text-nowrap">{ task.theloai === 1 ? 'Hành động' : task.theloai === 2 ? 'Tình cảm' : task.theloai === 3 ? 'Đời thường' : task.theloai === 4 ? 'Hài hước' : '' }</td>
                <td  className="text-nowrap">{ task.hangsanxuat }</td>
                <td  className="text-nowrap">{ task.ngaychieu }</td>
                <td>{ task.description }</td>
                <td  className="text-nowrap">{ task.price }</td>
                <td className="text-center">
                    <span className={task.status ? "label label-success" : "label label-warning"}
                        onClick={this.onUpdateStatus}
                    >{task.status ? 'Đang chiếu' : 'Sắp chiếu'}</span>
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
