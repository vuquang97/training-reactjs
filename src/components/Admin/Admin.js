import React, { Component } from 'react';
import TaskForm from './TaskForm';
import TaskControl from './TaskControl';
import TaskList from './TaskList'; 
import { Link, Redirect } from 'react-router-dom';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: '',
        status: -1
      },
      sortBy: 'name',
      sortValue: -1
    }
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.closeTaskForm = this.closeTaskForm.bind(this);
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem('PRODUCT')) {
      var task = JSON.parse(localStorage.getItem('PRODUCT')); // lấy dữ liệu ra và chuyển thành kiểu object
      this.setState({
        task: task
      });
    }
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); //tạo 1 chuỗi bất kỳ
  }

  generateID() {  //tạo ID bất kỳ
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4()
      + '-' + this.s4() + '-' + this.s4();
  }

  handleToggleForm() { //hiển thị hoặc ẩn form
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null,
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null,
      });
    }

  }

  onShowForm() { //hiển thị hoặc ẩn form
    this.setState({
      isDisplayForm: true,
    });
  }

  closeTaskForm(value) {
    this.setState({
      isDisplayForm: value,
    });
  }

  submitTaskForm = (data) => {
    var { task } = this.state;
    if (data.id === '') {
      data.id = this.generateID();
      task.push(data);
    } else {
      var index = this.findIndex(data.id);
      task[index] = data;
    }
    this.setState({
      task: task,
      taskEditing: null,
    });
    localStorage.setItem('PRODUCT', JSON.stringify(task)) //lưu dữ liệu vào local storage
  }

  onUpdateStatus = (id) => {
    var { task } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      task[index].status = !task[index].status;

      this.setState({
        task: task
      });
      localStorage.setItem('PRODUCT', JSON.stringify(task));
    }
  }

  findIndex = (id) => {
    var { task } = this.state;
    var result = -1;
    task.forEach((task, index) => {
      if (task.id === id) {
        result = index;

      }
    });
    return result;
  }

  onDelete = (id) => {
    var { task } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      task.splice(index, 1);
      this.setState({
        task: task
      });
      localStorage.setItem('PRODUCT', JSON.stringify(task));
    }
  }

  onUpdate = (id) => {
    var { task } = this.state;
    var index = this.findIndex(id);
    var taskEditing = task[index];

    this.setState({
      taskEditing: taskEditing,
    });
    this.onShowForm();
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,
      }
    });
  }


  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    });
  }

  render() {
    var { task, isDisplayForm, taskEditing, filter, sortBy, sortValue } = this.state;
    var elmDisplayForm = isDisplayForm ? <TaskForm submitTaskForm={this.submitTaskForm}
      closeTaskForm={this.closeTaskForm}
      onUpdate={taskEditing}
    /> : ''; //form thêm công việc



    if (filter) {
      if (filter.name) {
        task = task.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;  //tìm kiếm theo name
        });
      }
      task = task.filter((task) => {
        if (filter.status === -1) {
          return task;
        } else {
          return task.status === (filter.status === 1 ? true : false); // tìm kiếm theo status
        }
      });
    }
    

    if(sortBy === 'name') {   /// sắp xếp
      task.sort((a,b) => {
        if(a.name > b.name) return -sortValue;
        else if(a.name < b.name) return sortValue;
        else return 0;
      });
    }else {
      task.sort((a, b) => {
        if(a.status > b.status) return sortValue;
        else if(a.status < b.status) return -sortValue;
        else return 0;
      });
    }


    return (
      <div className="container">
        <Link to='/'><button type="button" className="btn btn-warning"><i className="fas fa-home"></i>&nbsp;Home</button></Link>
        <div className="text-center">
          <h1>Quản Lý Phim</h1><hr /><br />
        </div>
        <div className="row">
          <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
            {elmDisplayForm}
          </div>
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <button className="btn btn-primary" type="button" onClick={this.handleToggleForm}><span className="fa fa-plus"></span>&nbsp;&nbsp;Thêm Phim</button>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <TaskControl keyWord={ this.keyWord } onSort={ this.onSort } sortBy={ sortBy } sortValue={ sortValue }/>
              </div>
              
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList task={task} onUpdateStatus={this.onUpdateStatus} onDelete={this.onDelete} onUpdate={this.onUpdate} onFilter={this.onFilter} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
