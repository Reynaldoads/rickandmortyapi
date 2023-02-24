import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { characterDetailed } from '../../types/characterDetailed'

import './styles'

function CharacterModal() {
    const {id} = useParams()
    const [ character, setCharacter] = useState<characterDetailed[]>([])

    const getCharacter = async(url:string) => {
        const response = await fetch(url);
        const data = await response.json()

    }

  return (
    <div>CharacterModal</div>
  )
}

export default CharacterModal