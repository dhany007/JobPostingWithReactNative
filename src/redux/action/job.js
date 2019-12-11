import axios from 'axios';

const IP = 'https://freejobpost.site/job';

export const getJob = () => {
  return {
    type: 'GET_JOB',
    payload: axios.get(IP),
  };
};

export const deleteJob = id_job => {
  return {
    type: 'DELETE_JOB',
    payload: axios.delete(`${IP}/${id_job}`),
  };
};

export const addJob = data => {
  return {
    type: 'ADD_JOB',
    payload: axios.post(IP, data),
  };
};

export const updatedJob = (id_job, data) => {
  return {
    type: 'UPDATE_JOB',
    payload: axios.patch(`${IP}/${id_job}`, data),
  };
};
