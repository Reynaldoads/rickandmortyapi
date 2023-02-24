import React, { useState } from 'react'
import './styles'
import { useParams } from 'react-router-dom'

function CharacterModal() {
    const {id} = useParams()
    const [ character, setCharacter] = useState<>([])

    const getCharacter = async(url:string) => {
        const response = await fetch(url);
        const data = await response.json()

    }

  return (
    <div>CharacterModal</div>
  )
}

export default CharacterModal