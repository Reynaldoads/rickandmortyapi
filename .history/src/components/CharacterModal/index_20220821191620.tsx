import React from 'react'
import './styles'
import { useParams } from 'react-router-dom'

function CharacterModal() {
    const {id} = useParams()
  return (
    <div>CharacterModal</div>
  )
}

export default CharacterModal