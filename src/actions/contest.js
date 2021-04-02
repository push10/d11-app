import {
  LOAD_ALL_CONTEST,LOAD_ALL_MATCHES, REGISTER_FAIL, SET_MESSAGE, JOIN_LEAGUE
} from "../actions/types";


import ContestService from "../services/contest.service";


export const loadAllMatches = (contestId) => (dispatch) => {
  return ContestService.getAllMatches(contestId).then(
    (response) => { 
      dispatch({
        type: LOAD_ALL_MATCHES,
        payload: response.data
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};



export const loadAllContest = () => async dispatch => {
  return await ContestService.getAllContest().then(
    (response) => {
      dispatch({
        type: LOAD_ALL_CONTEST,
        payload: response.data
      });

    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

    }
  );
};

export const joinContest = ( joiningCode) => (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(`joining league for user id ${user}`);
  return ContestService.joinContest(user.id,{joiningCode}).then(
    (response) => { 
      dispatch({
        type: JOIN_LEAGUE,
        payload: response.data
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

