
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Navbar from './components/nav/Navbar'
import Pokemones from './components/pokemones/Pokemones'
import PokemonDetails from './components/pokemonDetails/PokemonDetails'

function App() {
  

  return (
    <>
      <h1>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/pokemones' element={< Pokemones/>}/>
          <Route path='/pokemones/:name' element={< PokemonDetails/>}/>
        </Routes>

        <Footer/>
      </h1>
    </>
  )
}

export default App
