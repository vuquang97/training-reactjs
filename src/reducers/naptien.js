import * as types from '../constans/ActionTypes';

var initialState = 0;

const naptien = (state = initialState, action) => {
    var { tienNap } = action;
    var users = JSON.parse(localStorage.getItem('USER'));
    var user = JSON.parse(localStorage.getItem("LOGIN"));
    switch (action.type) {
        case types.NAP_TIEN:
            if (users) {
                for (var i = 0; i < users.length; i++) {
                    if (user[0].txtUsername === users[i].txtUsername && user[0].txtPassword === users[i].txtPassword && users[i].maQuyenHan === 1) {
                        users[i].viTien += tienNap;
                        state=2;
                        localStorage.setItem('CHECKNAPTIEN', JSON.stringify(1));
                    }
                }
            }
            localStorage.setItem('USER', JSON.stringify(users));
            return state;
        default: return state;
    }
}



export default naptien;