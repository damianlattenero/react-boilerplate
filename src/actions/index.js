import axios from 'axios';
import {TYPE} from "./type";
const url  = 'http://localhost:3000/animals';
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
        const request = axios.get(url);

        request.then( response => {
            dispatch({
                type: TYPE.FETCH_ANIMAL,
                payload: response.data
            })
        }).catch(error => console.log(error))
    }
}

export function createAnimal(animal) {
    return function (dispatch) {
        const post = axios.post(url, animal);
        post.then(response => {
            // console.log("response create animal: ", response);
            dispatch({
                type: TYPE.CREATE_ANIMAL,
                payload: response.data
            })
        }).catch(error => console.log(error))
    }
}

export function deleteAnimalById(id) {
    return function (dispatch) {
        const del = axios.delete(`${url}/${id}`);

        del.then(response => {
            dispatch({
                type: TYPE.DELETE_ANIMAL,
                payload: response.status,
                id
            })
        }).catch(error => console.log(error))


    }
}