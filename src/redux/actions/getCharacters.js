import { CHARACTER_DATA } from "./../constants/actionTypes";
import * as api from "../../api/index";


export const getCharacter = () => async (dispatch) => {
    try {
        const data = await api.characterData()
        dispatch({ type: CHARACTER_DATA, payload: data.data });
    } catch (error) {
        console.log(error);
    }
};

