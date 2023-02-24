import '../../types/singleCharacterType'
import React, { useEffect, useState } from 'react'
import { Container, Status } from './styles'
import { Link, useParams } from 'react-router-dom'
import { singleCharacterType } from '../../types/singleCharacterType'

const CharacterDetail = () => {
  const { charId } = useParams()
  const [singleCharacter, setSingleCharacter] = useState<singleCharacterType[]>([])
  var characterUrl =`https://rickandmortyapi.com/api/character/${charId}`
  const getData = async () => {
    await fetch(characterUrl).then((response)=> response.json()).then((data)=>setSingleCharacter(data));
  }
  const charValue = Object.values(singleCharacter)
  useEffect(()=>{
    getData()  
    console.log(charValue);
  }, [])
  
  return (
    <>
      <h1>Preciso de ajuda!</h1>
      {Ob}      
      <Link to='/characters'>Voltar para personagens</Link>
    </>
  )
}

export default CharacterDetail;