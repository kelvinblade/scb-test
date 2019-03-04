import React, { PureComponent } from 'react';
import {
  StyleSheet, Modal, TouchableOpacity, Image, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

export default class PhotoModal extends PureComponent {
  render() {
    const { modalVisible, onClose, photoUrl } = this.props;

    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {}}
      >
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={onClose}>
          <Image source={{ uri: photoUrl }} style={styles.image} />
        </TouchableOpacity>
      </Modal>
    );
  }
}

PhotoModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  photoUrl: PropTypes.string.isRequired,
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth,
    height: windowWidth,
  },
});
