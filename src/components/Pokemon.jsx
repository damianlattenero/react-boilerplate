import React, {Component} from 'react';
import ID from '../utils/auxs'

class Pokemon extends Component{
    constructor() {
        super();

        this.state = {
            showValues: false,
            imageURL: '',
            height: 0,
            weight: 0
        }
    }

    onPokemonClick () {
        // console.log(this.props.url)
        fetch(this.props.url)
            .then(results => {
                return results.json()
            })
            .then(data => {
                // console.log(data)
                this.setState({
                    showValues: true,
                    height: data.height,
                    weight: data.weight,
                    imageURL: data.sprites.front_default
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return(
            <div>
                {this.state.showValues ?
                    <li className={"card"}>

                        <div className={"row"}>
                            <div className={"col-6"}>
                                <p>name: {this.props.name}</p>
                                <p>height: {this.state.height}</p>
                                <p>weight: {this.state.weight}</p>
                            </div>
                            <div className={"col-6"}>
                                <img src={this.state.imageURL}/>
                            </div>
                        </div>
                    </li> :
                    <li
                        onClick={this.onPokemonClick.bind(this)}
                        className={"card"}>
                        <div className={"row"}>
                            <div className={"col-6"}>
                                <p>Pokemon Name: {this.props.name}</p>
                            </div>
                        </div>
                    </li>
                }
            </div>

        );
        // console.log(this.props.url)
        // console.log(this.state);
        /**
         *  Another way with nested ifelses:
         */
        /*
                if(!this.state.showValues){
                    return(
                        <li
                            onClick={this.onPokemonClick.bind(this)}
                            className={"card"}>
                            <div className={"row"}>
                                name: {this.props.name}
                            </div>
                        </li>
                    )
                }
                else if(this.state.showValues){
                    return(
                        <li className={"card"}>
                            <div className={"row"}>
                                <div className={"col-6"}>
                                    <p>name: {this.props.name}</p>
                                    <p>height: {this.state.height}</p>
                                    <p>weight: {this.state.weight}</p>
                                </div>
                                <div className={"col-6"}>
                                    <img src={this.state.imageURL}/>
                                </div>
                            </div>
                        </li>
                    )
                }
                else{
                    return(<div>Loading.....</div>)
                }
        */
    }
}

export default Pokemon;