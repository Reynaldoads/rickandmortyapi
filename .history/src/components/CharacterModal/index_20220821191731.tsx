import React from 'react'
import './styles'
import { useParams } from 'react-router-dom'

function CharacterModal() {
    const {id} = useParams()

    const getCharacter = async(url:string){
        const response = await fetch(url);
        

    }

  return (
    <div>CharacterModal</div>
  )
}

export default CharacterModal