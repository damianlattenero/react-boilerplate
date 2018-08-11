import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ID from '../utils/auxs'
import {selectAnimal, getAnimalList} from '../actions/index';
import _ from 'underscore';

class AnimalList extends Component {
    //constructor
    constructor() {
        super();
    }

    //lifecycle methods

    componentWillMount() {
        this.props.getAnimalList();
    }
    //
    // componentDidMount(){
    //     console.log('hello from did mount')
    //     document.querySelectorAll('.foo')
    // }

    //my methods

    renderAnimalList() {
        // return this.props.animalList.map(animal => {
        return _.map(this.props.animalList, animal => {
            // console.log('animalListRender', this);
            // var id = ID.get();
            // console.log('frikking id: ',id);
            return <li
                onClick={() => {
                    this.props.selectAnimal(animal)
                }}
                key={ID.get()}
                className={"list-group-item"}>
                <p>Animal name: {animal.name}</p>
            </li>
        })
    }

    //render method

    render() {
        // console.log('=)', this.props);
        if(_.isEmpty(this.props.animalList)){
            return <div>Loading...</div>
        }
        else{
            return <ul className={"list-group"}>
                {this.renderAnimalList()}
                {/*<button*/}
                {/*onClick={() => this.props.getAnimalList()}*/}
                {/*className={"btn btn-info"}>*/}
                {/*click me to fetch server*/}
                {/*</button>*/}
            </ul>
        }
    }
}

/**
 * that's a way to share state between parents and children
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
        animals: state.staticAnimalList,
        selectedAnimal: state.selectedAnimal,
        animalList: state.animalListFromReducer
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

        selectAnimal,
        getAnimalList

    }, dispatch)
}

//export default AnimalList;
//wrapped component -> higher order component
//the order counts here, 1st mapStateToProps, 2nd mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(AnimalList);
