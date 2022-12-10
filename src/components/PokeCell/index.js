import React from 'react'
import './PokeCell.css'

const PokeCell = ({pokeClass, handleOnClick}) =>{
    return (
        <button handleOnClick={()=> handleOnClick(pokeClass + 1)} className='poke-cell'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeClass + 1}.png`} />
        </button>
    )
}
export default PokeCell