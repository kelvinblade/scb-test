import React, { PureComponent } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { Icon } from 'expo';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';

export default class RoundButton extends PureComponent {
  render() {
    const { title, icon, onPress } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.iconContainer}>
          <Icon.Ionicons name={icon} style={styles.icon} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

RoundButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginRight: 20,
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: Colors.tertiaryColor,
    borderWidth: 1,
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    color: Colors.detailText,
    fontWeight: '500',
  },
  icon: {
    fontSize: 32,
    color: Colors.tertiaryColor,
  },
});
