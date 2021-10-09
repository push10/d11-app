import axios from "axios"; 
import {BASE_URL} from '../common/constant';

/*
const joinLeauge = async (userId, league) => { 
  try { 
    return await axios.put(`${BASE_URL}/leagues/joinContest/${userId}`,league)
  } catch (error) {
    console.error('----------------eroror --------->', error);
  }
};
*/
const loadTodaysMatches = async()=> { 
  try {
    return await axios.get(`${BASE_URL}/matches/loadTodaysMatch`)
  } catch (error) {
    console.error('----------------eroror --------->', error);
  }
};




export default {
  loadTodaysMatches
};