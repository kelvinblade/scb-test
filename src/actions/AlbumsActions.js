import axios from 'axios';
import { apiBaseURL } from '../constants/Api';
import {
  FETCHING_ALBUMS_DATA,
  FETCHING_ALBUMS_DATA_SUCCESS,
  FETCHING_ALBUMS_DATA_FAIL,
} from '../constants/ActionTypes';

export const fetchAlbumsData = id => (dispatch) => {
  dispatch({ type: FETCHING_ALBUMS_DATA });

  const query = id ? `?userId=${id}` : '';

  return axios
    .get(`${apiBaseURL}/albums${query}`)
    .then(res => dispatch({ type: FETCHING_ALBUMS_DATA_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_ALBUMS_DATA_FAIL, payload: err }));
};
