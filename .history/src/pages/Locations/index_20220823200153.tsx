import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container} from './styles'
import { locationsType } from '../../types/locationsType'
import { useLocations } from '../../hooks/useLocations'

export function Locations() {
  const {state, urlFetch} = useLocations()
  const locationsUrl = "https://rickandmortyapi.com/api/location"
  useEffect(()=>{
      urlFetch(locationsUrl)
    },[])
    
  return (
    <Container>
     <h1>Testando</h1>
    </Container>
  )
}
