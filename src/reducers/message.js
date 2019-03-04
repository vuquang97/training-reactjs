import * as Message from '../constans/Message';
import * as types from '../constans/ActionTypes';

var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;
        default: return state;
    }
}



export default message;