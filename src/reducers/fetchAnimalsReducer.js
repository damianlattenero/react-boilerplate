import {TYPE} from "../actions/type";

export default function (state = null, action) {
    switch (action.type) {
        case TYPE.FETCH_ANIMAL:
            console.log('fetch animal reducer: ', action);
            return action.payload;
        case TYPE.CREATE_ANIMAL:
            console.log("from reducer payload", action.payload);
            console.log("from reducer state", state);
            return {
                ...state,
                id: action.payload
            };
        default:
            return state;
    }
}