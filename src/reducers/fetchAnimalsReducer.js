import {TYPE} from "../actions/type";

export default function (state = null, action) {
    switch (action.type) {
        case TYPE.FETCH_ANIMAL:
            // console.log('fetch animal reducer: ', action);
            return action.payload;
        case TYPE.CREATE_ANIMAL:
            // console.log("from reducer payload", action.payload);
            // console.log("from reducer state", state);
            state.push(action.payload);
            return state;
        case TYPE.DELETE_ANIMAL:
            // console.log("reducer delete animal action: ", action);
            // console.log("reducer delete animal state: ", state);
            if(action.payload === 200){
                var newState = state.filter( element => {
                    return element.id != action.id
                });
                return newState;
            }
            else{
                console.log("an error occurs: ", action);
            }

        default:
            return state;
    }
}