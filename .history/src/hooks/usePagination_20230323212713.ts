import { useState } from 'react';
const characterUrl = 'https://rickandmortyapi.com/api/character';

 function usePagination(){
    const [page, setPage] = useState<{
        count: number,
        pages: number,
        next: string,
        prev: string
    }>()
    async function fetchPages(){
      try {
        const response = await fetch(characterUrl)
        if (!response.ok){
          throw new Error(response.statusText)
        }
        const data = await response.json()
        setPage(data.info)
      } catch (error:any) {
        console.log(error.message);
        
      }
      
    }
    return {page, fetchPages}
  }
export default usePagination
  