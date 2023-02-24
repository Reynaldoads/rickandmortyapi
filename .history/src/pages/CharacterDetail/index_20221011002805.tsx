import '../../types/singleCharacter'
import React, { useEffect, useState } from 'react'
import { Container, Status } from './styles'
import { Link, useParams } from 'react-router-dom'
import { singleCharacter } from '../../types/singleCharacter'

const CharacterDetail = () => {
  const { charId } = useParams()
  const [singleCharacter, setSingleCharacter] = useState<singleCharacter[]>([])
  var characterUrl =`https://rickandmortyapi.com/api/character/${charId}`
  useEffect(()=>{
    fetch(characterUrl).then((response)=> response.json()).then((data)=>setSingleCharacter(data))  
    console.log(singleCharacter);
  }, [])

  return (
    <div>
      <h1>Onde está Sauron ?</h1>
      {singleCharacter.length == 0 && "Carregando"}
      {singleCharacter && singleCharacter.map((char) => <p>Aaaa</p> )}
      <Link to='/characters'>Voltar para personagens</Link>
    </div>
  )
}

export default CharacterDetail;