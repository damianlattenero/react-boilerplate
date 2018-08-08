import {combineReducers} from 'redux';

import animalReducer from './animalReducer'

const rootReducer = combineReducers({
   // state: ( state = {} ) => state
    animalList: animalReducer
});

export default rootReducer;