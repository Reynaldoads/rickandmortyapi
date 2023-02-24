export type characterType = {
   id : number,
   name: string,
   status: string,
   species: string,
   location?: {
    name: string,
    url: string
   },
   image: string
}