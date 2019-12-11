import axios from 'axios';

const IP = 'https://freejobpost.site/company';

export const getCompany = () => {
  return {
    type: 'GET_COMPANY',
    payload: axios.get(IP),
  };
};

export const deleteCompany = id_company => {
  return {
    type: 'DELETE_COMPANY',
    payload: axios.delete(`${IP}/${id_company}`),
  };
};
