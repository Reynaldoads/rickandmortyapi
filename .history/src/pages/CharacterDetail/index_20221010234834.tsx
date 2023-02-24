import React, { useEffect } from 'react'
import '../../types/characterType'
import { Container, Status } from './styles'
import useRickFetch from '../../hooks/useRickFetch'
import { Link, useParams } from 'react-router-dom'

const CharacterDetail = () => {
  const { charId } = useParams()
  const {characters, fetchCharacters} = useRickFetch()
  var characterUrl =`https://rickandmortyapi.com/api/character/${charId}}`

  useEffect(()=>{
    console.log(fetchCharacters(characterUrl));
  }, [])

  return (
    <>
      <h1>Teste com o {charId}</h1>
      <Link to='/characters'>Voltar para personagens</Link>
    </>
  )
}

export default CharacterDetail;