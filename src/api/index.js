import axios from "axios";

export const BASE_URL = "https://swapi.dev/api/";
const CHARACTERS_DATA = BASE_URL + "characters/info";
const MOVIES_DATA = BASE_URL + "movies/info";


export const characterData = () => axios.get(CHARACTERS_DATA);
export const moviesData = () => axios.get(MOVIES_DATA);
