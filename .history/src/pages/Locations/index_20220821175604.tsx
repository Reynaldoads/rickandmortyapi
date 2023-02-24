import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container} from './styles'
import  Character  from '../../components/Character' 
import useRickFetch from '../../hooks/useRickFetch'

export function Locations() {

  const {characters, fetchCharacters} = useRickFetch()

  useEffect(()=>{
    fetchCharacters()
    },[])
    
  return (
    <Container>
     <ul>
        {characters.length == 0 && "Carregando"}
        {characters && characters.map((character) => (
          <Character key={character.id} char={character}/>
        ))}
     </ul>  
    </Container>
  )
}
