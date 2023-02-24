import React, { useState } from 'react'
import { Container } from './styles'

const handleFilterAction = () => {

}

function Filter() {
  const [state, setState] = useState('')
  return (
    <Container className='filter-name-container'>
      <input className="input-name" value={state} onChange={(e) => setState(e.target.value)} type="text"/>
      <button onClick={handleFilterAction}>Filtrar</button>        
    </Container>
  )
}

export default Filter