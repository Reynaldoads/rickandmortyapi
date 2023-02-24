export type characterDetailed  = {
    id: number,
    gender: string
    origin:{
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    episode:string[],
}