import React, { Component } from 'react';

class TaskSortControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: 'name',
            sortValue: 1
        }
    }

    onClick = (sortBy, sortValue) => {
        this.props.onSort(sortBy, sortValue);
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        });
    }
    render() {
        var { sortBy, sortValue } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle "
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                        >Sắp xếp &nbsp;<span className="caret "></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li className="drop-dow" onClick={() => this.onClick('name', 1)}>
                                <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>&nbsp;{ (sortBy === 'name' && sortValue === 1) ? <i className="fas fa-check-circle"></i> : '' }
                        </li>
                        <li className="drop-dow" onClick={() => this.onClick('name', -1)}>
                                <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>&nbsp;{ (sortBy === 'name' && sortValue === -1) ? <i className="fas fa-check-circle"></i> : '' }
                        </li>
                        <li role="separator" className="divider"></li>
                        <li className="drop-dow" onClick={() => this.onClick('status', -1)}>online&nbsp;{ (sortBy === 'status' && sortValue === -1) ? <i className="fas fa-check-circle"></i> : '' }</li>
                        <li className="drop-dow" onClick={() => this.onClick('status', 1)}>offline&nbsp;{ (sortBy === 'status' && sortValue === 1) ? <i className="fas fa-check-circle"></i> : '' }</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TaskSortControl;
