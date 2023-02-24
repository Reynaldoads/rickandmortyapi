import React from 'react'
import {locationsType} from '../../types/locationsType'

type LocationItemProps = {
    location: locationsType
}
const LocationItem:React.FC<LocationItemProps> = ({location})=> {
  return (
    <div>
        <p>Location name: {location.name}</p>
        <p>Location type:{location.type}</p>
        <p>Location dimension:{location.dimension}</p>
    </div>
  )
}

export default LocationItem