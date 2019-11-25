import axios from 'axios';

const IP = 'http://localhost:3001/auth/login';

export const loginUser = data => {
  return {
    type: 'GET_USER',
    payload: axios.post(IP, data),
  };
};
