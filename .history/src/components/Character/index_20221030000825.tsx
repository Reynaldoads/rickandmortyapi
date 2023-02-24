import React, { useState } from 'react'
import '../../types/characterType'
import { Container, Status, Modal } from './styles'
import { characterType } from '../../types/characterType'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type characterProps = {
  char: characterType,
  showModal: boolean
}

const Character: React.FC<characterProps> = ({char, showModal = false}) => {
  const [showModalState, setShowModalState] = useState(false)

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
              setShowModalState(true)
            }}>Detalhes</button>
          </div>
        </div>
        {  showModalState && 
        <Modal>
          <div className="modal-content">
          <FontAwesomeIcon icon={"fa-solid fa-xmark"} />
            <img src={char.image}/>
            <p>{char.name}</p>
          </div>
        </Modal>
      }
    </Container>
  )
}

export default Character;