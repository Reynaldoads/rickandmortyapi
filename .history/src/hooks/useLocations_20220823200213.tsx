import { useState } from "react"
import { locationsType } from "../types/locationsType"

export function useLocations(){
    const [state, setState] = useState<locationsType[]>([])
    async function urlFetch(url:string){
        const urlString = await fetch(url)
        const response = await urlString.json()
        console.log(response.results);
        
        setState(response.results)
    } 
    return {state, urlFetch}
}