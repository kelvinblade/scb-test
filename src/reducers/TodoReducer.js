import { SET_TODO_DATA } from '../constants/ActionTypes';

const INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_TODO_DATA:
      return action.payload;
    default:
      return state;
  }
}
