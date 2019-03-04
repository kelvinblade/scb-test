import axios from 'axios';
import { apiBaseURL } from '../constants/Api';
import {
  FETCHING_USERS_DATA,
  FETCHING_USERS_DATA_SUCCESS,
  FETCHING_USERS_DATA_FAIL,
  SET_USER_DATA,
} from '../constants/ActionTypes';

export const fetchUsersData = () => (dispatch) => {
  dispatch({ type: FETCHING_USERS_DATA });

  return axios
    .get(`${apiBaseURL}/users`)
    .then(res => dispatch({ type: FETCHING_USERS_DATA_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_USERS_DATA_FAIL, payload: err }));
};

export const setUserData = data => (dispatch) => {
  dispatch({ type: SET_USER_DATA, payload: data });
};
