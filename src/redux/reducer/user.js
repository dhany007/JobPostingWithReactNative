import {
  GET_USER_PENDING,
  GET_USER_FULFILLED,
  GET_USER_REJECTED,
} from '../constants/actionTypes';

const initialState = {
  data: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PENDING:
      return {
        ...state,
      };
    case GET_USER_FULFILLED:
      return {
        ...state,
        data: action.payload.data,
      };
    case GET_USER_REJECTED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default user;
