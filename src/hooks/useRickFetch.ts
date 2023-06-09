import { characterType } from '../types/characterType'
import { useState } from 'react';

 function useRickFetch(){
    const [characters, setCharacters] = useState<characterType[]>([]) 
    const [pagesAmount, setPagesAmount] = useState<number>(0)
    async function fetchCharacters(url:string){
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(response?.statusText)
        }
        const data = await response.json()
        setPagesAmount(parseInt(data?.info?.pages))
        setCharacters(data?.results)
      } catch(error:any) {
        console.log(error);
      }
    }
    return {characters, fetchCharacters, pagesAmount}
  }
export default useRickFetch

  