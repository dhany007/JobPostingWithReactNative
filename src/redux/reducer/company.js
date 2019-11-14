import {
  GET_COMPANY_PENDING,
  GET_COMPANY_FULFILLED,
  GET_COMPANY_REJECTED,
  ADD_COMPANY_PENDING,
  ADD_COMPANY_FULFILLED,
  ADD_COMPANY_REJECTED,
  UPDATE_COMPANY_PENDING,
  UPDATE_COMPANY_FULFILLED,
  UPDATE_COMPANY_REJECTED,
  DELETE_COMPANY_PENDING,
  DELETE_COMPANY_FULFILLED,
  DELETE_COMPANY_REJECTED,
} from '../constants/actionTypes';

const initialState = {
  data: [],
  totalData: 0,
  isLoading: false,
  isError: false,
  isLoged: false,
};

const company = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COMPANY_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.result,
        totalData: action.payload.data.info.count,
      };
    case GET_COMPANY_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ADD_COMPANY_PENDING:
      return null;
    case ADD_COMPANY_FULFILLED:
      return null;
    case ADD_COMPANY_REJECTED:
      return null;
    case UPDATE_COMPANY_PENDING:
      return null;
    case UPDATE_COMPANY_FULFILLED:
      return null;
    case UPDATE_COMPANY_REJECTED:
      return null;
    case DELETE_COMPANY_PENDING:
      return null;
    case DELETE_COMPANY_FULFILLED:
      return null;
    case DELETE_COMPANY_REJECTED:
      return null;
    default:
      return state;
  }
};

export default company;
