import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPhotosData } from '../actions';
import { ItemList, Spinner } from '../common';
import { PhotoItem, PhotoModal } from '../components';
import Colors from '../constants/Colors';

class AlbumScreen extends Component {
  state = {
    modalVisible: false,
    photoUrl: '',
  };

  componentDidMount() {
    const id = this.props.navigation.getParam('id');
    this.props.fetchPhotosData(id);
  }

  selectPhoto = (photo) => {
    this.setState({ modalVisible: true, photoUrl: photo.url });
  };

  closePhotoModal = () => this.setState({ modalVisible: false });

  render() {
    if (this.props.isFetching) {
      return <Spinner />;
    }

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <ItemList
            items={this.props.photos}
            onPress={this.selectPhoto}
            ItemComponent={PhotoItem}
            numColumns={3}
          />
        </ScrollView>
        <PhotoModal
          modalVisible={this.state.modalVisible}
          onClose={this.closePhotoModal}
          photoUrl={this.state.photoUrl}
        />
      </View>
    );
  }
}

AlbumScreen.propTypes = {
  photos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchPhotosData: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  photos: state.photos.data,
  isFetching: state.photos.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchPhotosData: id => dispatch(fetchPhotosData(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
