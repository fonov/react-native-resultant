import {ActionTypes} from '../../constans/index'


const initState = [];

const state = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.SET_STOCKS:
            return [
                ...action.stocks
            ];
        default:
            return state;
    }
};

export default state;