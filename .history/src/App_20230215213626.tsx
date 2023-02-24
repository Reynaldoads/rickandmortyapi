import React from 'react';
import { Header } from './components/Header'
import { Main } from './pages/Main';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/characters" element={<Main/>}/>
        </Routes>
      </div>
  );
}

export default App;
