import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ID from '../utils/auxs'
import {selectAnimal} from '../actions/index';

class AnimalList extends Component {

    renderAnimalList() {
        return this.props.animals.map( animal => {
            // console.log('animalListRender', this);
            return (
                <li
                    onClick={() => {this.props.selectAnimal(animal)}}
                    key={ID.get()}
                    className={"list-group-item"}>
                    <p>Animal name: {animal.name}</p>
                </li>
            )
        })
    }

    render() {
        // console.log('animal list', this);
        return(
            <ul className={"list-group"}>
                {this.renderAnimalList()}
            </ul>
        )
    }
}

/**
 * @param state
 * that's a way to share state between parents and childs
 */

function mapStateToProps(state) {
/*    return {
        name: 'bluebeard',
        person: {
            name: "damian chevere"
        }
    }
*/
    // console.log('mapState', state)
    return {
        animals: state.animalList,
        selectedAnimal: state.selectedAnimal
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        /**
         * for ES syntactic sugar, because of the name of the variable is the same
         * as the name of the function, you can simplify
         *
         * selectAnimal: selectAnimal
         *
         * to:
         */

        selectAnimal: selectAnimal

    }, dispatch)
}

//export default AnimalList;
//wrapped component -> higher order component
//the order counts here, 1st mapStateToProps, 2nd mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(AnimalList);
