import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container} from './styles'
import { locationsType } from '../../types/locationsType'
import { useLocation } from 'react-router-dom'

export function Locations() {
  const {state, urlFetch} = useLocation()
  const locationsUrl = "https://rickandmortyapi.com/api/location"
  useEffect(()=>{
        
    },[])
    
  return (
    <Container>
     <h1>Testando</h1>
    </Container>
  )
}
