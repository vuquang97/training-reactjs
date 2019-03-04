import React, { Component } from 'react';
import * as message from '../constans/Message';
import MessageContainer from '../containers/MessageContainer';
import { Link } from 'react-router-dom';
class NapTien extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tienNap: 0
        };
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }


    render() {
        var { tienNap } = this.state;
        var check = JSON.parse(localStorage.getItem("CHECKNAPTIEN"));
        return (
            <div className="container">
                <div class="row">
                    <Link to='/'><button type="button" className="btn btn-warning"><i className="fas fa-home"></i>&nbsp;Home</button></Link>
                </div><br /><br />
                <div className="row container ">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <legend className="text-center"><h2>Nạp tiền</h2></legend>
                        <div className="form-group">
                            <label>Số tiền nạp : </label>
                            <input type="text" className="form-control" name="tienNap" value={tienNap} onChange={this.onChange} placeholder="tiền Nạp..." />
                        </div>
                        <div className="btn btn-primary" onClick={() => this.napTien(parseInt(tienNap))}>
                            Nạp tiền
                        </div>
                        {check === 1 ? <MessageContainer /> : ''}
                    </div>
                </div>
            </div>

        );
    }

    napTien = (tienNap) => {
        var { onNapTien, onChangeMessage } = this.props;
        if (tienNap !== 0) {
            onNapTien(tienNap);
            onChangeMessage(message.MSG_NAP_TIEN_THANH_CONG);
        } else {
            onChangeMessage(message.MSG_CHUA_DIEN_SO_TIEN_MUON_NAP);
        }

        this.setState({
            tienNap: 0
        });
    }
}

export default NapTien;
