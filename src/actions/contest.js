import {
  LOAD_ALL_CONTEST, LOAD_ALL_MATCHES, REGISTER_FAIL, SET_MESSAGE,
} from "../actions/types";


import ContestService from "../services/contest.service";

/*
export const loadAllMatches = () => (dispatch) => {
  return ContestService.getAllContest().then(

    (response) => {
      console.log("response from loadAllMatches =============>", response);
      dispatch({
        type: LOAD_ALL_MATCHES,
        payload: response
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

  /*
export const loadAllContest = () => {
return dispatch => {
return ContestService.getAllContest().then(
  (response) =>{
    dispatch({
      type: LOAD_ALL_CONTEST,
      payload: response
    })
  }
)
}
}
*/

  export const loadAllContest = () => async dispatch => {
    return await ContestService.getAllContest().then(
      (response) => {
        console.log("response from loadAllMatches =============>", response);
        dispatch({
          type: LOAD_ALL_CONTEST,
          payload: response
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

  