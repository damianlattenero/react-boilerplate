import React, {Component} from 'react';
import {connect} from 'react-redux';


class AnimalDetails extends Component {

    render() {
        console.log('from details', this);
        return (
            <div>
                {!this.props.selectedAnimal ?
                    <div>...</div> :
                    <div className={"card"}>
                        <h6>Details</h6>
                        <div>Species: {this.props.selectedAnimal.species}</div>
                        <div>Age: {this.props.selectedAnimal.age}</div>
                        <div>Gender: {this.props.selectedAnimal.gender === "m" ? 'Male' : 'Female'}</div>
                    </div>
                }
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        selectedAnimal: state.selectedAnimal
    }
}

export default connect(mapStateToProps)(AnimalDetails)
// export default AnimalDetails;
