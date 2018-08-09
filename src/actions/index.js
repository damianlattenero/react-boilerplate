export function selectAnimal(animal) {
    return {
        type: TYPE.ANIMAL_CLICKED,
        payload: animal
    }
}

var TYPE = {
    ANIMAL_CLICKED: 'ANIMAL_CLICKED',
    FETCH_ANIMAL: 'FETCH_ANIMAL'
};

export function fetchAnimals() {
    //do some AJAX stuff -> let response = getDataBase.data

    return {
        type: TYPE.FETCH_ANIMAL,
    }
}

export default TYPE;