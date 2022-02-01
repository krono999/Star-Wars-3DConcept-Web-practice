import { MOVIES_DATA } from "./../constants/actionTypes";
import * as api from "../../api/index";


export const getMovies = () => async (dispatch) => {
    try {
        const data = await api.moviesData()
        dispatch({ type: MOVIES_DATA, payload: data.data });
    } catch (error) {
        console.log(error);
    }
};