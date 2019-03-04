import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import UsersStackNavigator from './UsersStackNavigator';
import PostsStackNavigator from './PostsStackNavigator';
import AlbumsStackNavigator from './AlbumsStackNavigator';
import TodosStackNavigator from './TodosStackNavigator';

import Colors from '../constants/Colors';

const MainTabNavigator = createBottomTabNavigator(
  {
    UsersStackNavigator,
    AlbumsStackNavigator,
    PostsStackNavigator,
    TodosStackNavigator,
  },
  {
    tabBarOptions: { activeTintColor: Colors.tintColor },
  },
);

export default MainTabNavigator;
