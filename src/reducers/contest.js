import {
    LOAD_ALL_CONTEST, LOAD_ALL_MATCHES, JOIN_LEAGUE, LOAD_USER_LEAGUES, LOAD_LEAGUES_USER_DETAILS
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? { isLoggedIn: true, user, data: [], leagues: [] }
    : { isLoggedIn: false, user: null, data: [], leagues: [] };

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

        case LOAD_USER_LEAGUES:
            return {
                ...state,
                leagues: payload
            };
        case LOAD_LEAGUES_USER_DETAILS:
            return {
                ...state,
                leagues: payload
            };

        default:
            return state;
    }
}
