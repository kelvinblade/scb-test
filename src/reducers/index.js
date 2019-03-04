import { combineReducers } from 'redux';

import user from './UserReducer';
import users from './UsersReducer';
import albums from './AlbumsReducer';
import post from './PostReducer';
import posts from './PostsReducer';
import todo from './TodoReducer';
import todos from './TodosReducer';
import photos from './PhotosReducer';
import comments from './CommentsReducer';

export default combineReducers({
  user,
  users,
  albums,
  post,
  posts,
  todo,
  todos,
  photos,
  comments,
});
