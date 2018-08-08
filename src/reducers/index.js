import {combineReducers} from 'redux';

import animalReducer from './animalReducer'
import selectedAnimalReducer from './selectedAnimalReducer'

const rootReducer = combineReducers({
   // state: ( state = {} ) => state
    animalList: animalReducer,
    selectedAnimal: selectedAnimalReducer
});

export default rootReducer;