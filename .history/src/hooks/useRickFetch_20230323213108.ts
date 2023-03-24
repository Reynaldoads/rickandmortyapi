import { characterType } from '../types/characterType'
import { useState } from 'react';

 function useRickFetch(){
    const [characters, setCharacters] = useState<characterType[]>([]) 

    async function fetchCharacters(url:string){
      try {
        const response = await fetch(url)
        if(!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        setCharacters(data.results)
      } catch(error:any) {
        console.log(error);
      }
      
    }
    return {characters, fetchCharacters}
  }
export default useRickFetch

  