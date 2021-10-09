import {
    LOAD_TODAYS_MATCHES
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? { isLoggedIn: true, user, data: [] }
    : { isLoggedIn: false, user: null, data: [] };

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_TODAYS_MATCHES: 
            return {
                ...state,
                data: payload
            };

        default:
            return state;
    }
}
