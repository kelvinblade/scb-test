import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

export default class PhotoItem extends PureComponent {
  render() {
    const { item, onPress } = this.props;

    return (
      <TouchableOpacity onPress={() => onPress(item.id)} style={styles.container}>
        <Image source={{ uri: item.thumbnailUrl }} style={styles.avatar} />
      </TouchableOpacity>
    );
  }
}

PhotoItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
    flexDirection: 'column',
  },
  avatar: {
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
