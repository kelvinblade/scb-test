import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';

export default class ItemListButton extends PureComponent {
  render() {
    const { icon, onPress } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Icon.Ionicons name={icon} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}

ItemListButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    backgroundColor: Colors.button,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    shadowOffset: { width: 1, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    elevation: 3,
  },
  icon: {
    fontSize: 32,
    color: '#FFF',
    marginTop: 5,
  },
});
