import { CHARACTER_DATA } from "../constants/actionTypes";
import { BASE_URL } from "../../api/index"
const initialState = [
];
export const charactersData = (state = initialState, action) => {
    switch (action.type) {
        case CHARACTER_DATA:
            return state = action.payload.data.map((e) => { return { ...e, urlImage: BASE_URL + e.urlImage } });

        default:
            return state;
    }
};
