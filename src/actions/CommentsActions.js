import axios from 'axios';
import { apiBaseURL } from '../constants/Api';
import {
  FETCHING_COMMENTS_DATA,
  FETCHING_COMMENTS_DATA_SUCCESS,
  FETCHING_COMMENTS_DATA_FAIL,
} from '../constants/ActionTypes';

export const fetchCommentsData = id => (dispatch) => {
  dispatch({ type: FETCHING_COMMENTS_DATA });

  return axios
    .get(`${apiBaseURL}/comments?postId=${id}`)
    .then(res => dispatch({ type: FETCHING_COMMENTS_DATA_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_COMMENTS_DATA_FAIL, payload: err }));
};
