import React, { useState } from 'react'
import {Container } from './styles'

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  showFields: boolean
}

function Filter(props:Props) {
  const [state, setState] = useState('')
  return (
    <Container className='filter-name-container'>
      <input className="input-name" value={state} onChange={(e) => setState(e.target.value)} type="text"/>
      <button onClick={props.onClick}>Filtrar</button>        
    </Container>
  )
}

export default Filter