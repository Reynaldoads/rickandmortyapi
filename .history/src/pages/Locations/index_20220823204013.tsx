import React from 'react'
import { useEffect } from 'react'
import { Container} from './styles'
import { useLocations } from '../../hooks/useLocations'
import LocationItem from '../../components/LocationItem'

export function Locations() {
  const {state, urlFetch} = useLocations()
  const locationsUrl = "https://rickandmortyapi.com/api/location"
  useEffect(()=>{
      urlFetch(locationsUrl)
    },[])
    
  return (
    <Container>
      <ul>
        {state.map((item)=>{
          return (
            <LocationItem location={item}/>
          )
        })}
      </ul>
    </Container>
  )
}
