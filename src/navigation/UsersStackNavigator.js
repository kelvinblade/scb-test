import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { TabBarIcon } from '../components';
import UserScreen from '../screens/UserScreen';
import UsersScreen from '../screens/UsersScreen';
import UserAlbumsScreen from '../screens/AlbumsScreen';
import UserAlbumScreen from '../screens/AlbumScreen';
import UserPostsScreen from '../screens/PostsScreen';
import UserPostScreen from '../screens/PostScreen';
import UserTodosScreen from '../screens/TodosScreen';
import UserTodoScreen from '../screens/TodoScreen';

import Colors from '../constants/Colors';

const UsersStackNavigator = createStackNavigator({
  Users: {
    screen: UsersScreen,
    navigationOptions: () => ({
      title: 'Friends',
      headerTitleStyle: {
        color: Colors.headerText,
      },
    }),
  },
  User: {
    screen: UserScreen,
    navigationOptions: () => ({
      headerBackTitleStyle: {
        color: Colors.tintColor,
      },
      headerTintColor: Colors.tintColor,
    }),
  },
  UserAlbums: {
    screen: UserAlbumsScreen,
    navigationOptions: () => ({
      headerBackTitleStyle: {
        color: Colors.tintColor,
      },
      headerTintColor: Colors.tintColor,
    }),
  },
  UserAlbum: {
    screen: UserAlbumScreen,
    navigationOptions: () => ({
      headerBackTitleStyle: {
        color: Colors.tintColor,
      },
      headerTintColor: Colors.tintColor,
    }),
  },
  UserPosts: {
    screen: UserPostsScreen,
    navigationOptions: () => ({
      headerBackTitleStyle: {
        color: Colors.tintColor,
      },
      headerTintColor: Colors.tintColor,
    }),
  },
  UserPost: {
    screen: UserPostScreen,
    navigationOptions: () => ({
      headerBackTitleStyle: {
        color: Colors.tintColor,
      },
      headerTintColor: Colors.tintColor,
    }),
  },
  UserTodos: {
    screen: UserTodosScreen,
    navigationOptions: () => ({
      headerBackTitleStyle: {
        color: Colors.tintColor,
      },
      headerTintColor: Colors.tintColor,
    }),
  },
  UserTodo: {
    screen: UserTodoScreen,
    navigationOptions: () => ({
      headerBackTitleStyle: {
        color: Colors.tintColor,
      },
      headerTintColor: Colors.tintColor,
    }),
  },
});

UsersStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: 'Friends',
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-heart" />,
  };
};

export default UsersStackNavigator;
