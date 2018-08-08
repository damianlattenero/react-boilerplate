import React, {Component} from 'react';
import PokemonList from './PokemonList'

/*
this is a posibility also
const App = () =>  {
    return (
        <div>Hello everyone</div>
    );
}

export default App;
*/

class App extends Component {
    constructor() {
        super();

        this.state = {
            type: "1",
            pokemons: []
        }

    }

    onSelectTypeChange(event){
        //console.log(event.target.value)
        this.setState({type: event.target.value})
    }

    onButtonClick(event) {
        // console.log(this.state.type, "button has been clicked")
        event.preventDefault();
        var type = this.state.type;

        fetch(`https://pokeapi.co/api/v2/type/${type}/`)
            .then(result => {
                return result.json()
            })
            .then(data => {
                // console.log(data.pokemon)
                this.setState({pokemons: data.pokemon})
            }).catch(error => console.log(error))

    }

    render(){

        // console.log(this.state)

        return(
            <div
                className={"container app-container"}
            >
                <div>
                    <h4>our small pokemon gotta catch'em all</h4>
                      <form>
                          <label>choose type</label>
                          <select
                              onChange={this.onSelectTypeChange.bind(this)}
                          >
                              <option value={"1"}>normal</option>
                              <option value={"2"}>fighting</option>
                              <option value={"3"}>flying</option>
                          </select>
                          {/*HTML buttons has a bug, forces to reload the whole page, changing to div instead*/}
                          <button
                              onClick={this.onButtonClick.bind(this)}
                              className={"btn btn-success"}
                          >search for type</button>


                      </form>

                </div>

                <PokemonList pokemonList={this.state.pokemons}/>

            </div>
        )
    }
}

export default App;