import axios from "axios"; 
import {BASE_URL} from '../common/constant';

const register = ( user) => { 
  try {
    return axios.post(`${BASE_URL}/users/register`,user )
    
  } catch (error) {
    console.error('----------------eroror --------->',error);
  }
};


const login = (user) => { 
  return axios
    .post(`${BASE_URL}/users/login`, user)
    .then((response) => { 
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }   

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};


const loadAllMatches = () => { 
  try {
    return axios.get(`${BASE_URL}/matches` )
    .then((response) =>{
      return response.data;
    });
    
  } catch (error) {
    console.error('----------------eroror --------->',error);
  }
};
export default {
  register,
  login,
  logout,
  loadAllMatches,
};
