import axios from 'axios';
import {TYPE} from "./type";

export function selectAnimal(animal) {
    return {
        type: TYPE.ANIMAL_CLICKED,
        payload: animal
    }
}

//GET function, get animal list
export function getAnimalList() {
    // const url = 'http://localhost:3000/animals';
    // const request = axios.get(url);
    // return {
    //     type: TYPE.FETCH_ANIMAL,
    //     payload: request
    // }

    return function (dispatch) {
        const url     = 'http://localhost:3000/animals';
        const request = axios.get(url);

        request.then( response => {
            dispatch({
                type: TYPE.FETCH_ANIMAL,
                payload: response.data
            })
        }).catch(error => console.log(error))
    }
}
