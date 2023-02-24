import { useState } from "react"
import { locationsType } from "../types/locationsType"

export function useLocations(url:string){
    const [state, setState] = useState<locationsType[]>()
    async function urlFetch(){
        const urlString = await fetch(url)
        const response = await urlString.json()
        setState(response.data)
    } 
}