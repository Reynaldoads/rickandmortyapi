import React from "react"
import { characterDetailed } from "../../types/characterDetailed"

type character = {
    char: characterDetailed
}

const CharacterModal: React.FC<character> = ({char}) => {
    return (
        <h1>{char.episode}</h1>
    )
}


export default CharacterModal