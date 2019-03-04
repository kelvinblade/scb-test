import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPhotosData } from '../actions';
import { ItemList, Spinner } from '../common';
import { PhotoItem } from '../components';
import Colors from '../constants/Colors';

class AlbumScreen extends Component {
  componentDidMount() {
    const id = this.props.navigation.getParam('id');
    this.props.fetchPhotosData(id);
  }

  selectPhoto = (id) => {
    // Open Modal to Show Enlarged Photo
  };

  render() {
    if (this.props.isFetching) {
      return <Spinner />;
    }

    return (
      <ScrollView style={styles.container}>
        <ItemList
          items={this.props.photos}
          onPress={this.selectPhoto}
          ItemComponent={PhotoItem}
          numColumns={3}
        />
      </ScrollView>
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
