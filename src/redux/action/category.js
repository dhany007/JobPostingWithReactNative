import axios from 'axios';

const IP = 'http://localhost:3001/category';

export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: axios.get(IP),
  };
};
