import '../../types/singleCharacter'
import React, { useEffect, useState } from 'react'
import { Container, Status } from './styles'
import { Link, useParams } from 'react-router-dom'
import { singleCharacter } from '../../types/singleCharacter'

const CharacterDetail = () => {
  const { charId } = useParams()
  var characterUrl =`https://rickandmortyapi.com/api/character/${charId}`
  const [singleCharacter, setSingleCharacter] = useState<singleCharacter[]>([])
  useEffect(()=>{
    fetch(characterUrl).then((response)=> response.json()).then((data)=>setSingleCharacter(data))  
    console.log(singleCharacter);
  }, [])

  return (
    <div>
      {singleCharacter}
      <h1>Onde está Sauron ?</h1>
      <Link to='/characters'>Voltar para personagens</Link>
    </div>
  )
}

export default CharacterDetail;