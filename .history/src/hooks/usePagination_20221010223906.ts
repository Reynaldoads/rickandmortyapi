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
      const response = await fetch(characterUrl)
      const data = await response.json()
      setPage(data.info)
    }
    return {page, fetchPages}
  }
export default usePagination
  