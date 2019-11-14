import {
  GET_CATEGORY_PENDING,
  GET_CATEGORY_FULFILLED,
  GET_CATEGORY_REJECTED,
  ADD_CATEGORY_PENDING,
  ADD_CATEGORY_FULFILLED,
  ADD_CATEGORY_REJECTED,
  UPDATE_CATEGORY_PENDING,
  UPDATE_CATEGORY_FULFILLED,
  UPDATE_CATEGORY_REJECTED,
  DELETE_CATEGORY_PENDING,
  DELETE_CATEGORY_FULFILLED,
  DELETE_CATEGORY_REJECTED,
} from '../constants/actionTypes';

const initialState = {
  data: [],
  totalData: 0,
  isLoading: false,
  isError: false,
  isLoged: false,
};

const category = (state = initialState, action) => {
  switch (action.type) {
    // Get category
    case GET_CATEGORY_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CATEGORY_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.result,
        totalData: action.payload.data.info.count,
      };
    case GET_CATEGORY_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // Add category
    case ADD_CATEGORY_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_CATEGORY_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload.data],
      };
    case ADD_CATEGORY_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // update category
    case UPDATE_CATEGORY_PENDING:
      return null;
    case UPDATE_CATEGORY_FULFILLED:
      return null;
    case UPDATE_CATEGORY_REJECTED:
      return null;
    // delete category
    case DELETE_CATEGORY_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_CATEGORY_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter(
          data => data.id_category !== action.payload.data.id_category,
        ),
      };
    case DELETE_CATEGORY_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default category;
