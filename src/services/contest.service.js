import axios from "axios"; 
import {BASE_URL} from '../common/constant';


const joinContest = async (userId, league) => {
  console.log('joining contest ---->',userId, league);
  try {
    return await axios.put(`${BASE_URL}/leagues/joinContest/${userId}`,league)
  } catch (error) {
    console.error('----------------eroror --------->', error);
  }
};

const getAllContest = async () => {
  try {
    return await axios.get(`${BASE_URL}/contests/listAllContest`)
  } catch (error) {
    console.error('----------------eroror --------->', error);
  }
};
const getAllMatches = async (contestId) => {
  try {
    return await axios.get(`${BASE_URL}/matches/contest/1`)
  } catch (error) {
    console.error('----------------eroror --------->', error);
  }
};
const getContest = (contestId) => {
  //return axios.get(BASE_URL + "mod", { headers: authHeader() });
};

export default {
  joinContest,
  getAllContest,
  getContest,
  getAllMatches
};