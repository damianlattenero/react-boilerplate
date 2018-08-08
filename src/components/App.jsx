import React, {Component} from 'react';

import AnimalList from '../containers/AnimalList'
class App extends Component {

    render() {
        return (
            <div className={"container app-container"}>
                <h4>welcome zookeeper</h4>
                {/*here, this is another way to share properties from parent to child*/}
                {/*<AnimalList parentProps={"parent prop"} anotherProp={5}/>*/}
                <div className={"row"}>
                    <div className={"col-4"}>
                        <AnimalList/>
                    </div>
                    <div className={"col-8"}>
                        <div><h1>Details</h1></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;