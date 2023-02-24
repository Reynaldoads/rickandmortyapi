import { useState } from "react"
import { locationsType } from "../types/locationsType"

export function useLocations(url:string){
    const [state, setState] = useState<locationsType[]>()
    async function urlFetch = fetch(url)
}