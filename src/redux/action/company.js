import axios from 'axios';

const IP = 'http://localhost:3001/company';

export const getCompany = () => {
  return {
    type: 'GET_COMPANY',
    payload: axios.get(IP),
  };
};

export const getOneCompany = id_company => {
  return {
    type: 'GET_COMPANY',
    payload: axios.get(`${IP}/company/` + id_company),
  };
};
