import axios from 'axios';
import { apiBaseURL } from '../constants/Api';
import {
  FETCHING_TODOS_DATA,
  FETCHING_TODOS_DATA_SUCCESS,
  FETCHING_TODOS_DATA_FAIL,
  SET_TODO_DATA,
} from '../constants/ActionTypes';

export const fetchTodosData = id => (dispatch) => {
  dispatch({ type: FETCHING_TODOS_DATA });

  const query = id ? `?userId=${id}` : '';

  return axios
    .get(`${apiBaseURL}/todos${query}`)
    .then(res => dispatch({ type: FETCHING_TODOS_DATA_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_TODOS_DATA_FAIL, payload: err }));
};

export const setTodoData = data => (dispatch) => {
  dispatch({ type: SET_TODO_DATA, payload: data });
};
