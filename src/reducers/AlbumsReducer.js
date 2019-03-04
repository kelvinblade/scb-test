import {
  FETCHING_ALBUMS_DATA,
  FETCHING_ALBUMS_DATA_SUCCESS,
  FETCHING_ALBUMS_DATA_FAIL,
} from '../constants/ActionTypes';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCHING_ALBUMS_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_ALBUMS_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_ALBUMS_DATA_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: true,
        errorMessage: action.err,
      });

    default:
      return state;
  }
}
