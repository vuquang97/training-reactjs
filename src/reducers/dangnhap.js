import * as types from '../constans/ActionTypes';

var initialState = null;

const dangnhap = (state = initialState, action) => {
    var { user } = action;
    var users = JSON.parse(localStorage.getItem('USER'));
    switch (action.type) {
        case types.DANG_NHAP:
            if (user.txtUsername) {
                for (var i = 0; i < users.length; i++) {
                    if (user.txtUsername === users[i].txtUsername && user.txtPassword === users[i].txtPassword && users[i].maQuyenHan === 0) {
                        localStorage.setItem('LOGIN', JSON.stringify([user, users[i].maQuyenHan, users[i]]));
                        state = 0;
                    } else if (user.txtUsername === users[i].txtUsername && user.txtPassword === users[i].txtPassword && users[i].maQuyenHan === 1) {
                        localStorage.setItem('LOGIN', JSON.stringify([user, users[i].maQuyenHan, users[i]]));
                        state = 1;
                    }
                }
            }
            return state;
        case types.DANG_XUAT:
            console.log('xóa xóa')
            return state;
        default: return state;
    }
}



export default dangnhap;