import {TYPE} from "../actions/constants";

export default function (state = null, action) {
    switch (action.type) {
        case TYPE.FETCH_ANIMAL:
            console.log('fetch animal reducer: ', action);
            return action.payload;
        default:
            return state;
    }
}