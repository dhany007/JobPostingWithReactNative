import axios from 'axios';

const IP = 'http://localhost:3001';

export const getJob = () => {
  return {
    type: 'GET_JOB',
    payload: axios.get(IP),
  };
};

export const getJobId = id_job => {
  return {
    type: 'GET_JOB',
    payload: axios.get(`${IP}/` + id_job),
  };
};
