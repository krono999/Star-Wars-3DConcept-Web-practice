//React
import React, { Suspense, useEffect, useState } from 'react'
import Scene from './components/Scene/Scene'
import { OrbitControls, Stars } from '@react-three/drei';
//Components
import SideBar from './components/SideBar/SideBar'
import CharacterList from './components/CharactersList/CharacterList';
import MilleniumFalcon from '../src/components/MilleniumFalcon/MilleniumFalcon'
import Planet from './components/Planet/Planet';
import CharactersButton from './components/CharactersButton/CharactersButton';
import MoviesButton from './components/MoviesButton/MoviesButton';
import PlanetMars from '../src/components/PlanetMars/PlanetMars.js'
import StarWarsLogo from './components/StarWarsLogo/StarWarsLogo';
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
  console.log('characters', characters)
  console.log('movies', movies)


  return (
    <div style={{ height: '100vh', overflow: 'hideen' }} >
      <SideBar />
      {/* <CharactersButton data={characters} /> */}
      <MoviesButton data={movies} />
      <CharacterList data={characters} />
      <Scene >
        <Suspense fullback={"loading"} >
          <color attach={'background'} args={['black']} />
          {/* {<MilleniumFalcon /> ? <Suspense fullback={"loading"} >
            <MilleniumFalcon />
          </Suspense> : <StarWarsLogo />} */}
          {<Planet /> ? <Suspense fullback={"loading"} >
            <Planet />
          </Suspense> : <StarWarsLogo />}
          {<PlanetMars /> ? <Suspense fullback={"loading"} >
            <PlanetMars />
          </Suspense> : <StarWarsLogo />}
          <Stars Radius of stars={1000} factor={4} saturation={0} fade count={1000} />
          <directionalLight intensity={4} color={'purple'} />
          <ambientLight color="#ffffff" intensity={0.2} position={[-1, 2, 4]} />
          <pointLight
            intensity={1}
            castShadow
            color={'red'}
          />
          <OrbitControls autoRotate />
        </Suspense>
      </ Scene >


    </div>
  );
}

export default App;
