import React from "react"
import { characterDetailed } from "../../types/characterDetailed"
type character = {
    char: characterDetailed
}
const CharacterModal: React.FC<character> = ({}) => {
    return (
        <h1>Coca cola light!</h1>
    )
}


export default CharacterModal