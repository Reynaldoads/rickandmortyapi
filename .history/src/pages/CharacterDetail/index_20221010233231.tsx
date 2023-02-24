import React from 'react'
import '../../types/characterType'
import { Container, Status } from './styles'
import { useParams } from 'react-router-dom'

const CharacterDetail = () => {
  const { charId } = useParams()

  return (
    <h1>Teste</h1>
  )
}

export default CharacterDetail;