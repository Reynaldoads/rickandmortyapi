import React, { useState, useMemo } from 'react'
import { useEffect } from 'react'
import { Container, PagesContainer, BackToInit} from './styles'
import Character  from '../../components/Character' 
import useRickFetch from '../../hooks/useRickFetch'
import usePagination from '../../hooks/usePagination'
import Filter from '../../components/Filter'
import FilterName from '../../components/FilterName'

export function Main() {
  var [pageState, setPageState] = useState(1)
  const { characters, fetchCharacters } = useRickFetch()
  const {page, fetchPages} = usePagination()
  const [status, setStatus] = useState('')
  const [name, setName] = useState('')
  const [showFieldsState, setFieldsState] = useState(false)
  
  const characterUrl =`https://rickandmortyapi.com/api/character?status=${status}&page=${pageState}&name=${name}`
  
  const handleNextPage = () => {
    if(pageState === page?.pages){
      return false
    }
    setPageState( pageState += 1)
  }
  const handlePrevPage = () => {
    if(pageState === 1){
      return false
    }
    setPageState( pageState -= 1)
  }
  const handleSelection = () => {
    const select = document.querySelector('select')
    const selectValue = select?.value
    if (selectValue){
      setStatus(select.value)
    }
  }
  const handleInputChange = (newText: string) => {
    setName(newText);
  }
  function showFilterName(){
    const clickFilter = document.querySelector('.click-filter')
    if( showFieldsState == true ) {
      setFieldsState(false)
    }
    if(clickFilter && showFieldsState === false){
      setFieldsState(true)
    } 
  }
  function handleInitPage(){
    setPageState(1)
  }

  const isDisabled = useMemo(()=> pageState == 1, [pageState])
  useEffect(()=>{
      fetchCharacters(characterUrl)
      fetchPages()
    }, [pageState, status, name])

  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Filter onClick={handleSelection}/>
          </li>
          <p className='click-filter' onClick={showFilterName}>{showFieldsState ? "Clique para esconder" : "Clique aqui para filtrar por nome" }</p>
          <li>
            { showFieldsState && 
              <FilterName onChange={handleInputChange} inputValue={name} showFields={showFieldsState}/>
            }
          </li>
        </ul>
      </nav>
      {characters?.length == 0 && <h1>Não foi possível encontrar nenhum personagem</h1>}
      <ul>
        {characters && characters.map((character) => (
          <Character showModal={false} key={character.id} char={character}/>
        ))}
     </ul> 
    <PagesContainer>
      <div className='p-box'>
        <p className='page-number'> Número de paginas: {page?.count}</p>
        <p className='current-page'> Página atual: {pageState}</p>
      </div>
      <div className="button-box">
        <button className='back-button'
          disabled={isDisabled}
          onClick={handlePrevPage}>Voltar</button>
        <button onClick={handleNextPage}>Avançar</button>
        {pageState > 1 && <BackToInit onClick={handleInitPage}>Voltar ao inicio?</BackToInit> }
      </div>
    </PagesContainer>
    </Container>
  )
}
