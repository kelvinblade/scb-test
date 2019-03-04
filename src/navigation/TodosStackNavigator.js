import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { TabBarIcon } from '../components';
import TodoScreen from '../screens/TodoScreen';
import TodosScreen from '../screens/TodosScreen';

import Colors from '../constants/Colors';

const TodosStackNavigator = createStackNavigator({
  Todos: {
    screen: TodosScreen,
    navigationOptions: () => ({
      title: 'Todos',
      headerTitleStyle: {
        color: Colors.headerText,
      },
    }),
  },
  Todo: {
    screen: TodoScreen,
    navigationOptions: () => ({
      headerBackTitleStyle: {
        color: Colors.tintColor,
      },
      headerTintColor: Colors.tintColor,
    }),
  },
});

TodosStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: 'Todos',
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-list" />,
  };
};

export default TodosStackNavigator;
