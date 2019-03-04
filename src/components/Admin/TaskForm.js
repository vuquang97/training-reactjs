import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            image: '',
            theloai: '',
            hangsanxuat: '',
            ngaychieu: '',
            description: '',
            price: 0,
            rating: 0,
            ghe: [],
            status: false
        }
    }

    componentWillMount() {
        if (this.props.onUpdate) {
            this.setState({
                id: this.props.onUpdate.id,
                name: this.props.onUpdate.name,
                image: this.props.onUpdate.image,
                theloai: this.props.onUpdate.theloai,
                hangsanxuat: this.props.onUpdate.hangsanxuat,
                ngaychieu: this.props.onUpdate.ngaychieu,
                description: this.props.onUpdate.description,
                price: this.props.onUpdate.price,
                rating: this.props.onUpdate.rating,
                status: this.props.onUpdate.status,
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.onUpdate) {
            this.setState({
                id: nextProps.onUpdate.id,
                name: nextProps.onUpdate.name,
                image: nextProps.onUpdate.image,
                theloai: nextProps.onUpdate.theloai,
                hangsanxuat: nextProps.onUpdate.hangsanxuat,
                ngaychieu: nextProps.onUpdate.ngaychieu,
                description: nextProps.onUpdate.description,
                price: nextProps.onUpdate.price,
                rating: nextProps.onUpdate.rating,
                status: nextProps.onUpdate.status,
            });
        } else if (!nextProps.onUpdate) {
            this.setState({
                id: '',
                name: '',
                image: '',
                theloai: '',
                hangsanxuat: '',
                ngaychieu: '',
                description: '',
                price: 0,
                rating: 0,
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
            name: '',
            image: '',
            theloai: '',
            hangsanxuat: '',
            ngaychieu: '',
            description: '',
            price: 0,
            rating: 0,
            status: false
        });
        this.closeTaskForm();
    }

    onClick = (value) => { //thể loại
        this.setState({
            theloai: value
        });
    }

    render() {
        var { id } = this.state;
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
                            <label>Tên: </label>
                            <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Link ảnh: </label>
                            <input type="text" name="image" className="form-control" value={this.state.image} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Thể loại: </label>
                            {/* <input type="text" name="theloai" className="form-control" value={this.state.theloai} onChange={this.onChange} /> */}
                            <div className="dropdown">
                                <button
                                    className="btn btn-primary dropdown-toggle "
                                    type="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="true"
                                >Thể loại phim &nbsp;<span className="caret "></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li className="drop-dow" onClick={() => this.onClick(1)}>Hành động</li>
                                    <li className="drop-dow" onClick={() => this.onClick(2)}>Tình cảm</li>
                                    <li className="drop-dow" onClick={() => this.onClick(3)}>Đời thường</li>
                                    <li className="drop-dow" onClick={() => this.onClick(4)}>Hài hước</li>
                                </ul>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Hãng sản xuất: </label>
                            <input type="text" name="hangsanxuat" className="form-control" value={this.state.hangsanxuat} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Ngày chiếu: </label>
                            <input type="text" name="ngaychieu" className="form-control" value={this.state.ngaychieu} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Nội dung: </label>
                            <input type="text" name="description" className="form-control" value={this.state.description} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Giá vé: </label>
                            <input type="text" name="price" className="form-control" value={this.state.price} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Đánh giá: </label>
                            <input type="text" name="rating" className="form-control" value={this.state.rating} onChange={this.onChange} />
                        </div>
                        {/* <div className="form-group">
                            <label>Trạng Thái: </label>
                            <select className="form-control" name="status" value={this.state.status} onChange={this.onChange}>
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                        </div> */}
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
