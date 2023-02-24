import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container} from './styles'
import useRickFetch from '../../hooks/useRickFetch'
import { locationsType } from '../../types/locationsType'

export function Locations() {

  const locationsUrl = "https://rickandmortyapi.com/api/location"

  useEffect(()=>{
    console.log(locationsUrl);
    
    },[])
    
  return (
    <Container>
     <h1>Testando</h1>
    </Container>
  )
}
