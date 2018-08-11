import React, {Component} from 'react';

import AnimalList from '../containers/AnimalList'
import AnimalDetails from "../containers/AnimalDetails";
import AnimalAdd from "../containers/AnimalAdd";
// import ID from "../utils/auxs";

class App extends Component {

    render() {
        // console.log('id from app', ID.get());
        return (
            <div className={"container app-container"}>
                <h4>welcome zookeeper</h4>
                {/*here, this is another way to share properties from parent to child*/}
                {/*<AnimalList parentProps={"parent prop"} anotherProp={5}/>*/}

                <div className="row">
                    <div className="col12">
                        <AnimalAdd/>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col-4"}>
                        <AnimalList/>
                    </div>
                    <div className={"col-8"}>
                        <AnimalDetails/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;