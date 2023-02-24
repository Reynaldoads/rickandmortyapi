import '../../types/singleCharacter'
import React, { useEffect, useState } from 'react'
import { Container, Status } from './styles'
import { Link, useParams } from 'react-router-dom'
import { singleCharacter } from '../../types/singleCharacter'

const CharacterDetail = () => {
  const { charId } = useParams()
  const [singleCharacter, setSingleCharacter] = useState<singleCharacter[]>([])
  var characterUrl =`https://rickandmortyapi.com/api/character/${charId}`
  useEffect(()=>{
    fetch(characterUrl).then((response)=> response.json()).then((data)=>console.log(data));
    console.log(singleCharacter);
  }, [])
  
  return (
    <>
      <h1>Preciso de ajuda!</h1>
      
      <Link to='/characters'>Voltar para personagens</Link>
    </>
  )
}

export default CharacterDetail;