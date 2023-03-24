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
const completeName = char?.name.split(' ');

  return (
    <Container onKeyUp={(e)=>{
      if(e.key === "Escape" && showModalState){
        setShowModalState(false)
      } 
    }}>

      <img src={char.image}/>
      <div className='character-content'>
          <p className={`character-name ${completeName.length > 2 ? "smallCharacterName" : ""} `}>{char?.name}</p>
          <span>
            <p className='title'>Status</p>
            <Status alive={char?.status}>{char?.status}</Status> 
          </span>
          <div className='default-box'>
            <p className='title'>Espécie <p className='status'>{char?.species}</p> </p>
            <button onClick={()=>{
              setShowModalState(true)
            }}>Detalhes</button>
          </div>
        </div>
        {  showModalState && 
        <Modal>
          <div className="modal-content">
            <FontAwesomeIcon onClick={()=> setShowModalState(false)} icon={faXmark} />
            <img src={char?.image}/>
            <div className="text-content">
              <p><strong>Nome: </strong>{char?.name}</p> 
              <p><strong>Gênero: </strong>{char?.gender}</p>            
              <p><strong>Última aparição: </strong> {char?.location.name}</p>
              <p><strong>Número de episódios:</strong> {char?.episode.length}</p>
            </div>
          </div>
        </Modal>
      }
    </Container>
  )
}

export default Character;