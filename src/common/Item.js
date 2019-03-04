import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import AvatarWithName from './AvatarWithName';
import Colors from '../constants/Colors';

export default class Item extends PureComponent {
  render() {
    const { item, onPress } = this.props;

    return (
      <TouchableOpacity onPress={() => onPress && onPress(item)} style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <AvatarWithName name={item.user.name} />
      </TouchableOpacity>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    color: Colors.mainText,
    fontWeight: '500',
    marginBottom: 5,
  },
});
