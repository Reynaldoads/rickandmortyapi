import React from 'react'
import { locationsType } from '../../types/locationsType'
import { Li } from './styles.js'

type LocationItemProps = {
    location: locationsType
}

const LocationItem:React.FC<LocationItemProps> = ({location})=> {
  return (
    <Li>
        <div className='name-box'>
            <h2>Location name:</h2>
            <p>{location.name}</p>
        </div>
        <div className='type-box'>
            <h2>Location type:</h2>    
            <p>{location.type}</p>
        </div>
        <div className='dimension-box'>
            <h2>Location dimension:</h2>    
            <p>{location.dimension}</p>
        </div>
    </Li>
  )
}

export default LocationItem