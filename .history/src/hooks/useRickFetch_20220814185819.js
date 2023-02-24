import { characterType } from '../../types/characterType'

 const characterUrl = 'https://rickandmortyapi.com/api/character';
 function useRickFetch(){
    const [characters, setCharacters] = useState<any>([]) 

    async function fetchCharacters(){
        const response = await fetch(characterUrl)
        const data = await response.json()
        setCharacters(data.results)
        console.log(data.results);
    }
    return {characters, fetchCharacters}
  }
export default useRickFetch

  