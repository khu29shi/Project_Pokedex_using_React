import React from 'react'

const Pokemon = ({name, image}) => {
  return (
    <div className='pokemon'>
      <div className="pokemon-name">{name}</div>
      <div><img src={image} alt="" className="pokemon-img" /></div>
    </div>
  )
}

export default Pokemon
