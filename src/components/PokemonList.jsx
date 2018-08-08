import React, {Component} from 'react';
import _ from 'underscore';
import ID from '../utils/auxs';
import Pokemon from './Pokemon';

class PokemonList extends Component {
    constructor() {
        super()
    }

    /**
     * FUNCTIONS
     */

    renderPokemons(){
        // console.log(this.props.pokemonList)
        // var counter = 0;
        return this.props.pokemonList.map(pokemons => {
            // console.log(pokemons);
            // counter++;
            // return <li key={ID()} className={"card"}>name: {pokemons.pokemon.name}</li>
            return <Pokemon key={ID.get()} url={pokemons.pokemon.url} name={pokemons.pokemon.name}/>
        })
    }

    render(){

        // console.log('this is the pokemon list _props: ', this.props.pokemonResult)
/*
        if(!_.isEmpty(this.props.pokemonResult)){
            return(<div>List is loaded and ready</div>)
        }

        return(<div>.......</div>)
*/
        return(
            <div>
                {_.isEmpty(this.props.pokemonList) ?
                    <b>Loading........</b> :
                    <ul>
                        {this.renderPokemons()}
                    </ul>
                }
            </div>
        )
    }
}

export default PokemonList;