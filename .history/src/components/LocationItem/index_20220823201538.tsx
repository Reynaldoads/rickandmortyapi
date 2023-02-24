import React from 'react'
import { locationsType } from '../../types/locationsType'
import { Li } from './styles.js'

type LocationItemProps = {
    location: locationsType
}

const LocationItem:React.FC<LocationItemProps> = ({location})=> {
  return (
    <Li>
        <span>
            <h2>Location name: {location.name}</h2>
        </span>
        
        <p>Location type:{location.type}</p>
        <p>Location dimension:{location.dimension}</p>
    </Li>
  )
}

export default LocationItem