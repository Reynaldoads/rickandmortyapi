import React from 'react'
import { Container } from './styles.js'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/rick-and-morty.png'

export function Header() {
  return (
    <Container>
      <img src={logo}/>
      <div className="content">
      <h1>The Rick and Morty API</h1>
        <nav>
            <ul>
              <li>
                <Link to="/characters">Personagens</Link>
              </li>
            </ul>
        </nav>
      </div>
    </Container>
  )
}
