import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1,
    };
  }

  onUpdateStatus = (id) => {
    this.props.onUpdateStatus(id);
  }

  onDelete = (id) => {
    this.props.onDelete(id);
  }

  onUpdate = (id) => {
    this.props.onUpdate(id);
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus);
    this.setState({
      [name]: value
    });
  }

  render() {
    var { task } = this.props;
    var elmTask = task.map((task, index) => {
      return <TaskItem key={task.id} index={index} task={task} onUpdateStatus={this.onUpdateStatus}
        onDelete={this.onDelete} onUpdate={this.onUpdate} />;
    })

    var { filterName, filterStatus } = this.state;
    return (
      <div>
        <hr />
        <input type="text" className="form-control" placeholder="Tìm kiếm..." name="filterName" value={filterName} onChange={this.onChange} />
        <table className="table table-bordered table-hover mt-15">
          <thead>
            <tr className="text-nowrap">
              <th className="text-center">STT</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Thể loại</th>
              <th className="text-center">Hãng sản xuất</th>
              <th className="text-center">Ngày chiếu</th>
              <th className="text-center">Nội dung</th>
              <th className="text-center">Giá vé</th>
              <th className="text-center">Trạng Thái</th>
              <th className="text-center">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>

              </td>
              <td>
                <select className="form-control" name="filterStatus" value={filterStatus} onChange={this.onChange} >
                  <option value="-1">Tất Cả</option>
                  <option value="0">Ẩn</option>
                  <option value="1">Kích Hoạt</option>
                </select>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {elmTask}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;
