import React, { PureComponent } from 'react';
import {
  StyleSheet, Text, Image, View,
} from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';

export default class AvatarWithName extends PureComponent {
  render() {
    const { name } = this.props;

    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: `https://ui-avatars.com/api/?name=${name}&background=59CFE2&color=fff`,
          }}
          style={styles.avatar}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
    );
  }
}

AvatarWithName.propTypes = {
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 5,
  },
  text: {
    fontSize: 12,
    color: Colors.subText,
    fontWeight: '400',
  },
});
