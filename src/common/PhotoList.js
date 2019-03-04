import React, { PureComponent } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import PhotoItem from './PhotoItem';

export default class PhotoList extends PureComponent {
  render() {
    const { photos, onPress } = this.props;

    return (
      <FlatList
        data={photos}
        renderItem={({ item }) => <PhotoItem photo={item} onPress={onPress} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        numColumns={3}
      />
    );
  }
}

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
