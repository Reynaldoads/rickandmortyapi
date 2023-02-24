import React, { useState } from 'react'
import {Container } from './styles'


const Filter:React.FC<{
  onClick: any,
  showFields?: boolean,
  state: string,
  handleName: any
  onChange: (newState: string) => void;
}
> = ({showFields, state, onChange, onClick}) => {
  const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <Container className='filter-name-container'>
      <input className="input-name" value={state} onChange={handleStateChange} type="text"/>
      <button onClick={onClick}>Filtrar</button>        
    </Container>
  )
}

export default Filter