import React from 'react'
import '../../types/characterType'
import { Container, Status } from './styles'
import { characterType } from '../../types/characterType'
import { Link } from 'react-router-dom';

type characterProps = {
  char: characterType,
  showModal: boolean
}
function handleModal(){
  alert("aaaa")
}
const Character: React.FC<characterProps> = ({char, showModal = false}) => {

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
            <button onClick={handleModal}>Detalhes</button>
          </div>
        </div>
    </Container>
  )
}

export default Character;