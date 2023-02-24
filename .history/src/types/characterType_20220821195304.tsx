export type characterType = {
   id : number,
   name: string,
   status: string,
   species: string,
   image: string,
   gender: string,
   origin:{
      name: string,
       url: string
   },
   location: {
       name: string,
       url: string
   },
   episode:string[],
   showModal: boolean
}