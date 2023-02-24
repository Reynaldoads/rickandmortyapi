import React from 'react'
import {Container } from './styles'

type Props = {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}
function FilterName(props:Props) {

  return (
    <Container>
      <select name='Status'>
          <option value=" ">Sem filtro</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknow">Unknow</option>
      </select>
      <button onClick={props.onClick}>Filtrar</button>        
    </Container>
    
  )
}

export default FilterName