import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { characterDetailed } from '../../types/characterDetailed'
import './styles'

function CharacterModal() {
    const characterUrl = 'https://rickandmortyapi.com/api/character/'

    const {id} = useParams()
    const [ character, setCharacter] = useState<characterDetailed[]>([])

    const getCharacter = async(url:string) => {
        const response = await fetch(url);
        const data = await response.json()
        setCharacter(data.results)
    }
    useEffect(()=>{
    
    }, [])

  return (
    <div>CharacterModal</div>
  )
}

export default CharacterModal