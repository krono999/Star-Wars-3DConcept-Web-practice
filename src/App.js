import axios from 'axios'
import React, { Suspense, useEffect, useState } from 'react'
import Scene from './components/Scene/Scene'
import { OrbitControls, Stars } from '@react-three/drei';
//Components
import SideBar from './components/SideBar/SideBar'
import Planet from './components/Planet/Planet';
import PlanetMars from '../src/components/PlanetMars/PlanetMars.js'
import CharacterList from './components/CharactersList/CharacterList';
// import MilleniumFalcon from '../src/components/MilleniumFalcon/MilleniumFalcon'
// import CharactersButton from './components/CharactersButton/CharactersButton';
// import MoviesButton from './components/MoviesButton/MoviesButton';
// import NavBar from '../src/components/NavBar/NavBar'


function App() {
  const [characters, setCharacters] = useState([])
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getCharacters() {
      let { data } = await axios.get('https://swapi.dev/api/people/')

      setCharacters(data.results)
    }

    async function getMovies() {
      let { data } = await axios.get('https://swapi.dev/api/films/')

      setMovies(data.results)
    }

    getCharacters()
    getMovies()
  }, [])
  // console.log('characters', characters)
  // console.log('movies', movies)

  if (characters.length && movies.length) {
    return <div style={{ height: '100vh', overflow: 'hideen' }} >
      <SideBar />
      <CharacterList characters={characters} />
      <Scene >
        <Suspense fullback={"loading"} >
          <color attach={'background'} args={['black']} />
          {/* <Suspense fullback={"loading"} >
            <MilleniumFalcon />
          </Suspense> */}
          <Suspense fullback={"loading"} >
            <Planet />

            <PlanetMars />
          </Suspense>
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

  } else {
    return 'loading data'
  }
}

export default App;
