import {
  GET_JOB_PENDING,
  GET_JOB_FULFILLED,
  GET_JOB_REJECTED,
  ADD_JOB_PENDING,
  ADD_JOB_FULFILLED,
  ADD_JOB_REJECTED,
  UPDATE_JOB_PENDING,
  UPDATE_JOB_FULFILLED,
  UPDATE_JOB_REJECTED,
  DELETE_JOB_PENDING,
  DELETE_JOB_FULFILLED,
  DELETE_JOB_REJECTED,
} from '../constants/actionTypes';

const initialState = {
  data: [],
  totalData: 0,
  isLoading: false,
  isError: false,
  isLoged: false,
  next: '',
  prev: '',
};

const job = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_JOB_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.result,
        next: action.payload.data.info.next,
        prev: action.payload.data.info.prev,
        totalData: action.payload.data.info.totalData,
      };
    case GET_JOB_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // add job
    case ADD_JOB_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_JOB_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload.data],
      };
    case ADD_JOB_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // update category
    case UPDATE_JOB_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_JOB_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isFinish: true,
        data: state.notes.map(
          data =>
            (data.id = action.payload.data.id_job ? action.payload.data : data),
        ),
      };
    case UPDATE_JOB_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    //delete
    case DELETE_JOB_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_JOB_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter(
          data => data.id_job !== action.payload.data.id_job,
        ),
      };
    case DELETE_JOB_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default job;
