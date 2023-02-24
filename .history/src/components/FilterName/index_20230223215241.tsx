import React, { useState } from 'react'
import {Container } from './styles'


const Filter:React.FC<{
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  showFields: boolean,
  name: string,
  handleName: any
}
> = ({onClick, showFields, name, handleName}) => {
  
  return (
    <Container className='filter-name-container'>
      <input className="input-name" value={name} onChange={(e) => handleName(e.target.value)} type="text"/>
      <button onClick={onClick}>Filtrar</button>        
    </Container>
  )
}

export default Filter