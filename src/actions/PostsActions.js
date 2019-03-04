import axios from 'axios';
import { apiBaseURL } from '../constants/Api';
import {
  FETCHING_POSTS_DATA,
  FETCHING_POSTS_DATA_SUCCESS,
  FETCHING_POSTS_DATA_FAIL,
  SET_POST_DATA,
} from '../constants/ActionTypes';

export const fetchPostsData = id => (dispatch) => {
  dispatch({ type: FETCHING_POSTS_DATA });

  const query = id ? `?userId=${id}` : '';

  return axios
    .get(`${apiBaseURL}/posts${query}`)
    .then(res => dispatch({ type: FETCHING_POSTS_DATA_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_POSTS_DATA_FAIL, payload: err }));
};

export const setPostData = data => (dispatch) => {
  dispatch({ type: SET_POST_DATA, payload: data });
};
