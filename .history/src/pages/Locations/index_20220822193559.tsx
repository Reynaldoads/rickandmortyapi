import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container} from './styles'
import  Character  from '../../components/Character' 
import useRickFetch from '../../hooks/useRickFetch'

export function Locations() {

  const {characters, fetchCharacters} = useRickFetch()

  useEffect(()=>{
    },[])
    
  return (
    <Container>
     <h1>Testando</h1>
    </Container>
  )
}
