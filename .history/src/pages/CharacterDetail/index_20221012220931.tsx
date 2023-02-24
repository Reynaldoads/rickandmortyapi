import '../../types/singleCharacterType'
import React, { useEffect, useState } from 'react'
import { Container, Status } from './styles'
import { Link, useParams } from 'react-router-dom'
import { singleCharacterType } from '../../types/singleCharacterType'

const CharacterDetail = () => {
  const { charId } = useParams()
  const foo = false
  const [singleCharacter, setSingleCharacter] = useState<singleCharacterType[]>([])
  var characterUrl =`https://rickandmortyapi.com/api/character/${charId}`
  useEffect(()=>{
    fetch(characterUrl).then((response)=> response.json()).then((data)=>setSingleCharacter(data));
    console.log(singleCharacter);
  }, [])
  return (
    <div>
      <h1>Detalhes do personagem</h1>
      {singleCharacter && singleCharacter.map(user => (
          <li key={user.url}>{user.name} - {user.gender}</li>
        ))}
      <Link to='/characters'>Voltar para personagens</Link>
    </div>
  )
}

export default CharacterDetail;