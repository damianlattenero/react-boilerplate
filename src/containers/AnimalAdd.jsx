import React, {Component} from 'react';
import _ from 'underscore';

class AnimalAdd extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            species: '',
            gender: 'm',
            age: 0
        }
    }

    // onNameChange = (event) => {
    //     // console.log('change event', event.target.value)
    //     this.setState({
    //         name: event.target.value
    //     })
    // };

    /**
     * The magic of functional programming
     * @param propertyName
     * @returns {a Function that update the property of the state}
     */
    onPropertieChange = (propertyName) => (event) => {
        console.log("event occ", event);
        var newState = {};
        const value = event.target.value;
        newState[propertyName] = this.parseProperty(propertyName, value);
        console.log("object set", newState);
        this.setState(newState);
    };

    parseProperty = (propertyName, value) => {
        switch (propertyName) {
            case "age":
                return parseInt(value);
            default:
                return value;
        }
    };

    render() {

        console.log('animal component state', this.state);

        return (
            <div className="form-group">
                <form>
                    <label>First name:
                        <input
                            onChange={this.onPropertieChange.bind(this)("name")}
                            value={this.state.name}
                            type="text"/>
                    </label>

                    <label>Species:
                        <input
                            onChange={this.onPropertieChange.bind(this)("species")}
                            value={this.state.species}
                            type="text"/>
                    </label>

                    <br/>

                    <label>Age:
                        <input
                            onChange={this.onPropertieChange.bind(this)("age")}
                            value={this.state.age}
                            type="number"/>
                    </label>

                    <label>Gender
                        <select onChange={this.onPropertieChange.bind(this)("gender")}>
                            <option value="m">male</option>
                            <option value="f">female</option>
                        </select>
                    </label>


                </form>

                <button className="btn btn-primary">Create animal</button>
            </div>
        );
    }
}

export default AnimalAdd;