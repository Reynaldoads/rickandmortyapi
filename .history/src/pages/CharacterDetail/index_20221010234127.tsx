import React from 'react'
import '../../types/characterType'
import { Container, Status } from './styles'
import { Link, useParams } from 'react-router-dom'

const CharacterDetail = () => {
  // const { charId } = useParams()
  
  return (
    <>
      <h1>Teste com o {charId}</h1>
      <Link to='/characters'>Voltar para personagens</Link>
    </>
  )
}

export default CharacterDetail;