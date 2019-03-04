import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { TabBarIcon } from '../components';
import AlbumScreen from '../screens/AlbumScreen';
import AlbumsScreen from '../screens/AlbumsScreen';

import Colors from '../constants/Colors';

const AlbumsStackNavigator = createStackNavigator({
  Albums: {
    screen: AlbumsScreen,
    navigationOptions: () => ({
      title: 'Albums',
      headerTitleStyle: {
        color: Colors.headerText,
      },
    }),
  },
  Album: {
    screen: AlbumScreen,
    navigationOptions: () => ({
      headerBackTitleStyle: {
        color: Colors.tintColor,
      },
      headerTintColor: Colors.tintColor,
    }),
  },
});

AlbumsStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: 'Albums',
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-images" />,
  };
};

export default AlbumsStackNavigator;
