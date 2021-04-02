import {
    LOAD_ALL_CONTEST, LOAD_ALL_MATCHES, JOIN_LEAGUE
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? { isLoggedIn: true, user, data: [] }
    : { isLoggedIn: false, user: null, data: [] };

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_ALL_CONTEST:
            return {
                ...state,
                data: payload
            };
        case LOAD_ALL_MATCHES:
            return {
                ...state,
                data: payload
            };
        case JOIN_LEAGUE:
            return {
                ...state,
                data: payload
            };
            
        default:
            return state;
    }
}
