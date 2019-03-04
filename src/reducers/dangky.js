import * as types from '../constans/ActionTypes';

var data = JSON.parse(localStorage.getItem('USER'))
var initialState = data ? data : [{
    id: '73a30d8e-9c6c-634b-7457-481a-2a37-c949',
    txtUsername: 'admin',
    txtPassword: 'admin',
    txtHoTen: 'Vũ Duy Quang',
    txtPhone: '12345678',
    txtDiaChi: 'Hải Dương',
    maQuyenHan: 0
}];


const dangky = (state = initialState, action) => {
    var { user } = action;
    switch (action.type) {
        case types.DANG_KY:
            if (state) {
                var checkTk = 0;
                for (var i = 0; i < state.length; i++) {
                    if (user.txtUsername === state[i].txtUsername) {
                        checkTk = 1;
                    }
                }
                if (checkTk === 0 && user.txtUsername !== '') {
                    state.push(user);
                    localStorage.setItem('USER', JSON.stringify(state));
                    localStorage.setItem('DANGKYTHANHCONG', JSON.stringify(1));
                }else {
                    localStorage.setItem('DANGKYTHANHCONG', JSON.stringify(0));
                }
            }
            return [...state];
        default: return [...state];
    }
}



export default dangky;