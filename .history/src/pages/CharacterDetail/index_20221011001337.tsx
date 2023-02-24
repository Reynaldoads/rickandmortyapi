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
  }, [])

  return (
    <>
      { singleCharacter.map((character)=>{
        <p>{character.name}</p>
      })}
      <Link to='/characters'>Voltar para personagens</Link>
    </>
  )
}

export default CharacterDetail;