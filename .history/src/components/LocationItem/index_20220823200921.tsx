import React from 'react'
import {locationsType} from '../../types/locationsType'

type LocationItemProps = {
    location: locationsType
}
const LocationItem:React.FC<LocationItemProps> = ({location})=> {
  return (
    <div>
        <p>Location name: {location.name}</p>
    </div>
  )
}

export default LocationItem