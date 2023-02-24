import { characterType } from '../../types/characterType'

 function useRickFetch(){
    const [characters, setCharacters] = useState<characterType[]>([]) 
    
    return {characters}
  }

  