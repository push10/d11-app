import {
    LOAD_ALL_CONTEST
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? { isLoggedIn: true, user , contests :[]}
    : { isLoggedIn: false, user: null , contests :[] };

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_ALL_CONTEST: 
        console.log("in reducer payload",payload);
            return {
                ...state, 
                contests: payload.data,
            };
        default:
            return state;
    }
}
