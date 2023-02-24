export function handleNextPage(state, stateFunction){
    if(state === 1){
      return false
    }
    setPageState( stateFunction -= 1)
}