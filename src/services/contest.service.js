import axios from "axios"; 
import {BASE_URL} from '../common/constant';


const joinContest = (contestId) => {
  console.log('join contest ---->');
};

const getAllContest = async () => {
  // return axios.get(BASE_URL + "user", { headers: authHeader() });
  try {
    return await axios.get(`${BASE_URL}/contests/listAllContest`)
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
};