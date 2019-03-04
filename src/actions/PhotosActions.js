import axios from 'axios';
import { apiBaseURL } from '../constants/Api';
import {
  FETCHING_PHOTOS_DATA,
  FETCHING_PHOTOS_DATA_SUCCESS,
  FETCHING_PHOTOS_DATA_FAIL,
} from '../constants/ActionTypes';

export const fetchPhotosData = id => (dispatch) => {
  dispatch({ type: FETCHING_PHOTOS_DATA });

  return axios
    .get(`${apiBaseURL}/photos?albumId=${id}`)
    .then(res => dispatch({ type: FETCHING_PHOTOS_DATA_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_PHOTOS_DATA_FAIL, payload: err }));
};
