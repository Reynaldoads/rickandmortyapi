import React, { useState } from 'react'
import '../../types/characterType'
import { Container, Status, Modal } from './styles'
import { characterType } from '../../types/characterType'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

type characterProps = {
  char: characterType,
  showModal: boolean
}

const Character: React.FC<characterProps> = ({char}) => {
const [showModalState, setShowModalState] = useState(false)

  return (
    <Container onKeyUp={(e)=>{
      if(e.key === "Escape" && showModalState){
        setShowModalState(false)
      } 
    }}>
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
          <FontAwesomeIcon onClick={()=> setShowModalState(false)} icon={faXmark} />
            <img src={char.image}/>
            <p>Nome: {char.name}</p>
            <p>Última aparição: {char.location.name}</p>
            <p>Número de episódios: {char.episode.length}</p>            

          </div>
        </Modal>
      }
    </Container>
  )
}

export default Character;