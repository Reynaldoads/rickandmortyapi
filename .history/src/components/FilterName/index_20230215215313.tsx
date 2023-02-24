import React, { useState } from 'react'
import { Container } from './styles'

const Filter: React.FC<{
  showFields: boolean
}> = () =>{
  const [state, setState] = useState('')
  const handleFilterAction = (  ) => {

  }
  
  return (
    <Container className='filter-name-container'>
      <input className="input-name" value={state} onChange={(e) => setState(e.target.value)} type="text"/>
      <button onClick={handleFilterAction}>Filtrar</button>        
    </Container>
  )
}

export default Filter