import {combineReducers} from 'redux';

import staticAnimalReducer from './animalReducer'
import selectedAnimalReducer from './selectedAnimalReducer'
import fetchAnimalsReducer from "./fetchAnimalsReducer";

const rootReducer = combineReducers({
   // state: ( state = {} ) => state
    staticAnimalList: staticAnimalReducer,
    selectedAnimal: selectedAnimalReducer,
    animalListFromReducer: fetchAnimalsReducer
});

export default rootReducer;