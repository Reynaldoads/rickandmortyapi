import React, { useState, useEffect } from 'react'
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
useEffect(() => {
  const charName = Array.from(document.querySelectorAll('p.character-name'))
  
  const simpleCharName = charName.filter((text)=>{
    let charNameFormatted = text.textContent?.split(" ")
    
    return charNameFormatted    
  })
  console.log(simpleCharName);
  
}, [])

  return (
    <Container onKeyUp={(e)=>{
      if(e.key === "Escape" && showModalState){
        setShowModalState(false)
      } 
    }}>
      <img src={char.image}/>
      <div className='character-content'>
          <p className="character-name">{char.name}</p>
          <span>
            <p className='title'>Status</p>
            <Status alive={char.status}>{char.status}</Status> 
          </span>
          <div className='default-box'>
            <p className='title'>Espécie <p className='status'>{char.species}</p> </p>
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
            <p>Gênero: {char.gender}</p>            
            <p>Última aparição: {char.location.name}</p>
            <p>Número de episódios: {char.episode.length}</p>
          </div>
        </Modal>
      }
    </Container>
  )
}

export default Character;