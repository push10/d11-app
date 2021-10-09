import {
  LOAD_TODAYS_MATCHES
} from "./types";


import BettinService from "../services/betting.service";

export const loadTodaysMatches = () => (dispatch) => {
  return BettinService.loadTodaysMatches().then(
    (response) => { 
      dispatch({
        type: LOAD_TODAYS_MATCHES,
        payload: response.data
      });

      return Promise.resolve();
    }
  );
};

/*
export const joinLeauge = ( joiningCode) => (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user")) 
  return ContestService.joinLeauge(user.id,{joiningCode}).then(
    (response) => { 
      dispatch({
        type: JOIN_LEAGUE,
        payload: response.data
      });
      return Promise.resolve();
    }
  );
};

export const loadUserLeauges = () => async dispatch => {
  const user = JSON.parse(localStorage.getItem("user")) 
  return ContestService.loadUserLeauges(user.id).then(
    (response) => {  
      dispatch({
        type: LOAD_USER_LEAGUES,
        payload: response.data
      });
      return Promise.resolve();
    }
  );
};

*/