import React from 'react';
import { Header } from './components/Header'
import { Main } from './pages/Main';
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {

  const RedirectCharacters = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
      navigate('/characters');
    }, []);
  
    return null;
  };
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route  path="/" element={<RedirectCharacters/>} />
          <Route path="/characters" element={<Main/>}/>
        </Routes>
      </div>
  );
}

export default App;
