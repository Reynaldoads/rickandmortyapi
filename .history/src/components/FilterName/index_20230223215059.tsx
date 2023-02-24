import React, { useState } from 'react'
import {Container } from './styles'


const Filter:React.FC<{
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  showFields: boolean,
  name: string
}
> = ({onClick, showFields, name}) => {
  const [state, setState] = useState('')
  return (
    <Container className='filter-name-container'>
      <input className="input-name" value={name} onChange={(e) => setState(e.target.value)} type="text"/>
      <button onClick={onClick}>Filtrar</button>        
    </Container>
  )
}

export default Filter