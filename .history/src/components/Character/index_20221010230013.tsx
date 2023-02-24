import React from 'react'
import '../../types/characterType'
import { Container, Status } from './styles'
import { characterType } from '../../types/characterType'
import  CharacterDetail from '../../pages/CharacterDetail'
import {Routes, Route, Link, useParams} from 'react-router-dom';

type characterProps = {
  char: characterType,
  showModal: boolean
}

const Character: React.FC<characterProps> = ({char, showModal = false}) => {
  const params = useParams()
  console.log(params);

  return (
    <Container>
      <img src={char.image}/>
      <div className='character-content'>
          <p className="title">Nome</p>
          <p className="character-name">{char.name}</p>
          
          <span>
            <p className='title'>Status</p>
            <Status alive={char.status}>{char.status}</Status> 
          </span>

          <div className='default-box'>
            <p className='title'>Espécie</p>
            <p className='species'>{char.species}</p>
            <Routes>
          
          
            <Route path="/character/:charId" element={<CharacterDetail/>}/>
              <Link to={`/character/${char.id}`}>Detalhes</Link>
            </Routes>
          </div>
        </div>
        
    </Container>
  )
}


export default Character;