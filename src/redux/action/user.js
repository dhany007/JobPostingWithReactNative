import axios from 'axios';

const IP = 'https://freejobpost.site/auth/login';

export const loginUser = data => {
  return {
    type: 'GET_USER',
    payload: axios.post(IP, data),
  };
};
