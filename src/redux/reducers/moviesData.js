import { MOVIES_DATA } from "../constants/actionTypes";
// import { BASE_URL } from "../../api/index"
const initialState = [];
export const moviesData = (state = initialState, action) => {
    switch (action.type) {
        case MOVIES_DATA:
            return state = action.payload.data;

        default:
            return state;
    }
};
