export function selectAnimal(animal) {
    return {
        type: TYPE.ANIMAL_CLICKED,
        payload: animal
    }
}

var TYPE = {
    ANIMAL_CLICKED: 'ANIMAL_CLICKED'
};

export default TYPE;