import React, { useState } from 'react'
import {Container } from './styles'

type Props = {
  handleFilter: () => void,
  showFields: boolean,
  filterValue: string;
}

function Filter(props:Props) {
  const [filterValue, setFilterValue] = useState('')

  return (
    <Container className='filter-name-container'>
      <input className="input-name" value={filterValue} onChange={(e) => setFilterValue(e.target.value)} type="text"/>
      <button onClick={props.handleFilter}>Filtrar</button>        
    </Container>
  )
}

export default Filter