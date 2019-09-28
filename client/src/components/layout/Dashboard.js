import React, { Component } from 'react';

import PokemonList from '../pokemon/PokemonList';
import SearchBar from '../search/SearchBar';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        POKEMON LIST GOES HERE
        <div className="col">
          <PokemonList search={this.props.search}/>
        </div>
      </div>
    );
  }
}