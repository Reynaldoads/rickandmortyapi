import React from "react"
import { characterDetailed } from "../../types/characterDetailed"

type character = {
    char: characterDetailed
}

const CharacterModal: React.FC<character> = ({char}) => {
    return (
        <>
            <h1>Episódios:{char.episode}</h1>
            <div>Genero:{char.gender}</div>
            <div>Local:{char.location.name}</div>
            <div>Origem:{char.origin.name}</div>
        </>
        
    )
}


export default CharacterModal