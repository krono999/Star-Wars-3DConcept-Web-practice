//React
import React, { Suspense, useEffect, useState } from 'react'
import Scene from './components/Scene/Scene'
import { OrbitControls, Stars } from '@react-three/drei';
//Components
import MilleniumFalcon from '../src/components/MilleniumFalcon/MilleniumFalcon'
import Planet from './components/Planet/Planet';
import SideBar from './components/SideBar/SideBar'
import CharactersCatalog from './components/CharactersCatalog/CharactersCatalog';
import MoviesCatalog from './components/MoviesCatalog/MoviesCatalog';
// import NavBar from '../src/components/NavBar/NavBar'
// import StarShip from './components/StarShip/StarShip';


function App() {
  const [characters, setCharacters] = useState()
  const [movies, setMovies] = useState()

  useEffect(() => {
    async function getCharacters() {
      let res = await fetch('https://swapi.dev/api/people/')
      let data = await res.json()
      setCharacters(data.results)
    }
    getCharacters()
    async function getMovies() {
      let res = await fetch('https://swapi.dev/api/films/')
      let data = await res.json()
      setMovies(data.results)
    }
    getMovies()
    getCharacters()
  }, [])
  // console.log('characters', characters)
  // console.log('movies', movies)


  return (
    <div style={{ height: '100vh', overflow: 'hideen' }} >
      <SideBar />
      <CharactersCatalog data={characters} />
      <MoviesCatalog data={movies} />
      <Scene >
        <color attach={'background'} args={['black']} />
        <Suspense fullback={'null'} >
          <MilleniumFalcon />
        </Suspense>
        <Suspense fullback={'null'} >
          <Planet />
        </Suspense>
        <Stars count={900} />
        <directionalLight intensity={4} color={'purple'} />
        <ambientLight color="#ffffff" intensity={0.2} position={[-1, 2, 4]} />
        <pointLight
          intensity={1}
          castShadow
          color={'red'}
        />
        <OrbitControls autoRotate />
      </ Scene >


    </div>
  );
}

export default App;
