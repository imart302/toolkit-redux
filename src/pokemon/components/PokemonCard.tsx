import React from 'react'

export const PokemonCard = ({name, url}: {name: string, url: string} ) => {
  return (
    <li>
      <h5>{name}</h5>
    </li>
  )
}
