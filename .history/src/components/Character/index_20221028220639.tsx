import React, { useState } from 'react'
import '../../types/characterType'
import { Container, Status, Modal } from './styles'
import { characterType } from '../../types/characterType'

type characterProps = {
  char: characterType,
  showModal: boolean
}


const Character: React.FC<characterProps> = ({char, showModal = false}) => {
  const [showModal, setShowModal] = useState(false)
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
            <button onClick={()=>{
              setShowModal(true)
            }}>Detalhes</button>
          </div>
        </div>
        {  showModal && 
        <Modal>
          <h1>Aaaa</h1>
        </Modal>
      }
    </Container>
  )
}

export default Character;