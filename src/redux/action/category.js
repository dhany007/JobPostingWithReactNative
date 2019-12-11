import axios from 'axios';

const IP = 'https://freejobpost.site/category';

export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: axios.get(IP),
  };
};

export const deleteCategory = id_category => {
  return {
    type: 'DELETE_CATEGORY',
    payload: axios.delete(`${IP}/${id_category}`),
  };
};

export const addCategory = data => {
  return {
    type: 'ADD_CATEGORY',
    payload: axios.post(IP, data),
  };
};
