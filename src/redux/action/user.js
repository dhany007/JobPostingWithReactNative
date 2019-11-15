import  axios from 'axios';

const IP = 'http://localhost:3001/auth/login';

export const loginUser = (email, password) => {
  return {
    type: 'GET_USER',
    payload: axios.post(IP, email, password),
  };
};
