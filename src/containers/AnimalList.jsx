import React, {Component} from 'react';
import {connect} from 'react-redux';
import ID from '../utils/auxs'

class AnimalList extends Component {

    renderAnimalList() {
        return this.props.animals.map( animal => {
            console.log('animalListRender', animal);
            return (
                <li
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
        animals: state.animalList
    }
}

// export default AnimalList;
// higher order component
export default connect(mapStateToProps)(AnimalList)