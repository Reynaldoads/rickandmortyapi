import React, { useState } from 'react'
import {Container } from './styles'

const Filter: React.FC<{
  inputValue: string;
  showFields: boolean;
  onChange: (newText: string) => void;
}> = ({inputValue, onChange, showFields}) => {

  const [name, setName] = useState(inputValue)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newText = event.target.value;
    setName(newText);
    onChange(newText);
  };

  return (
    <Container className='filter-name-container'>
      <input className="input-name" value={name} onChange={handleInputChange} type="text"/>
    </Container>
  )
}

export default Filter