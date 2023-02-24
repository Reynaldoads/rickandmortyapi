import React, { useEffect } from 'react'
import '../../types/singleCharacter'
import { Container, Status } from './styles'
import useRickFetch from '../../hooks/useRickFetch'
import { Link, useParams } from 'react-router-dom'

const CharacterDetail = () => {
  const { charId } = useParams()
  var characterUrl =`https://rickandmortyapi.com/api/character/${charId}`

  useEffect(()=>{
    fetch(characterUrl).then((response)=> response.json()).then((data)=>console.log(data))  
  }, [])

  return (
    <>
      
      <Link to='/characters'>Voltar para personagens</Link>
    </>
  )
}

export default CharacterDetail;