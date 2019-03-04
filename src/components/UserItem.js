import React, { PureComponent } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, Image, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

export default class UserItem extends PureComponent {
  render() {
    const { item, onPress, block } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => onPress(item)}
        style={[styles.container, block && styles.block]}
      >
        <Image
          source={{
            uri: `https://ui-avatars.com/api/?name=${item.name}&background=59CFE2&color=fff`,
          }}
          style={styles.avatar}
        />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.text}>{item.company.name}</Text>
      </TouchableOpacity>
    );
  }
}

UserItem.defaultProps = {
  block: false,
};

UserItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
  block: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  block: {
    width: Dimensions.get('window').width - 20,
    marginRight: 10,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    color: '#325181',
    fontWeight: '600',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    color: '#C2CBCF',
    fontWeight: '400',
  },
});
