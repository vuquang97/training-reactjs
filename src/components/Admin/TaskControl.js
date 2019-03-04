import React, { Component } from 'react';
import TaskSortControl from './TaskSortControl';

class TaskControl extends Component {
  keyWord = (value) => {
    this.props.keyWord(value);
  }
  render() {
    return (
        <TaskSortControl onSort={ this.props.onSort } sortBy={ this.props.sortBy } sortValue={ this.props.sortValue }/>
    );
  }
}

export default TaskControl;
