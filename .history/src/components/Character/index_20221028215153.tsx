import React from 'react'
import '../../types/characterType'
import { Container, Status, Modal } from './styles'
import { characterType } from '../../types/characterType'

type characterProps = {
  char: characterType,
  showModal: boolean
}

function handleModal(){
}

const Character: React.FC<characterProps> = ({char, showModal = true}) => {

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
      {  showModal && 
        <Modal>
          {char.location.name}
          <h1>Aaaa</h1>
        </Modal>
      }
    </Container>
  )
}

export default Character;