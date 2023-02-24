import React, { useState } from 'react'
import { Container } from './styles'

const Filter: React.FC<{
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  showFields: boolean
}> = () =>{
  const [state, setState] = useState('')
  return (
    <Container className='filter-name-container'>
      <input className="input-name" value={state} onChange={(e) => setState(e.target.value)} type="text"/>
      <button onClick>Filtrar</button>        
    </Container>
  )
}

export default Filter