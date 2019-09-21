import React from 'react'

export default function PokemonList(props) {
    return (
        <div>
            {props.pokemon.filter(el => {
                return el.name.toLowerCase().includes(this.props.seach.toLowerCase().trim());
            }).map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}