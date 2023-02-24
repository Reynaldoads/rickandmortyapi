import { characterType } from '../types/characterType'
import { useState } from 'react';

 function useRickFetch(){
    const [characters, setCharacters] = useState<characterType[]>([]) 

    async function fetchCharacters(url:string){
      const response = await fetch(url)
      const data = await response.json()
      setCharacters(data.results)
    }
    return {characters, fetchCharacters}
  }
export default useRickFetch

  