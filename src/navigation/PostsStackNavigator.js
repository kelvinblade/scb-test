import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { TabBarIcon } from '../components';
import PostScreen from '../screens/PostScreen';
import PostsScreen from '../screens/PostsScreen';

import Colors from '../constants/Colors';

const PostsStackNavigator = createStackNavigator({
  Posts: {
    screen: PostsScreen,
    navigationOptions: () => ({
      title: 'Posts',
      headerTitleStyle: {
        color: Colors.headerText,
      },
    }),
  },
  Post: {
    screen: PostScreen,
    navigationOptions: () => ({
      headerBackTitleStyle: {
        color: Colors.tintColor,
      },
      headerTintColor: Colors.tintColor,
    }),
  },
});

PostsStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: 'Posts',
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-create" />,
  };
};

export default PostsStackNavigator;
