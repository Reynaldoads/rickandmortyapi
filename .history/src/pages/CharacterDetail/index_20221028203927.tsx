import '../../types/singleCharacterType'
import React, { useEffect, useState } from 'react'
import { Container, Status } from './styles'
import { Link, useParams } from 'react-router-dom'
import { singleCharacterType } from '../../types/singleCharacterType'

const CharacterDetail = () => {
  const { charId } = useParams()
  const [singleCharacter, setSingleCharacter] = useState<singleCharacterType[]>([])
  var characterUrl =`https://rickandmortyapi.com/api/character/${charId}`
 
  useEffect(()=>{
    const getData = async () => {
      await fetch(characterUrl).then((response)=> response.json()).then((data)=>setSingleCharacter(data));
    }
    getData()  
    console.log(singleCharacter);
  }, [])
  
  return (
    <>
      {Object.values(singleCharacter).map((value, index)=>{
        return (
          <div key={index}>
            <h2>{value.name}</h2>
            <h3><h2>{value.gender}</h2></h3>
          </div>
        )
      })}
      <Link to='/characters'>Voltar para personagens</Link>
    </>
  )
}

export default CharacterDetail;