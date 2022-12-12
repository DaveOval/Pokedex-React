import React from 'react'
import './DetailView.css'

const DetailView = ({ pokemon }) => {
    const {id, name, type, sprite, height, weight} = pokemon
    return (
        <section className='detail-view'>
            <img src={sprite} className='sprite-image' alt={sprite} />
            <div className='data-wrapper'>
                <h1 className='data-name'>{name}</h1>
                <h2 className='data-char'>ID: {id}</h2>
                <h2 className='data-char'>Type:{type}</h2>
                <h2 className='data-char'>Height: {height}</h2>
                <h2 className='data-char'>Weight: {weight}</h2>
            </div>
        </section>
    )
}

export default DetailView