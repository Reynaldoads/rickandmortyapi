import '../../types/singleCharacterType'
import React, { useEffect, useState } from 'react'
import { Container, Status } from './styles'
import { Link, useParams } from 'react-router-dom'
import { singleCharacterType } from '../../types/singleCharacterType'

const CharacterDetail = () => {
  const { charId } = useParams()
  const [singleCharacter, setSingleCharacter] = useState<singleCharacterType[]>([])
  var characterUrl =`https://rickandmortyapi.com/api/character/${charId}`
  useEffect(()=>{
    fetch(characterUrl).then((response)=> response.json()).then((data)=>setSingleCharacter(data[0]));
    console.log(singleCharacter);
  }, [])
  return (
    <>
      <h1>Detalhes do personagem</h1>
      { singleCharacter && singleCharacter.map((char)=> <p>{char.url}</p> )}
      <Link to='/characters'>Voltar para personagens</Link>
    </>
  )
}

export default CharacterDetail;