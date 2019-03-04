import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchAlbumsData } from '../actions';
import { ItemList, Item, Spinner } from '../common';
import Colors from '../constants/Colors';
import { mapUsersIdsToUser } from '../utils/helpers';

class AlbumsScreen extends Component {
  componentDidMount() {
    const id = this.props.navigation.getParam('id');
    this.props.fetchAlbumsData(id);
  }

  selectAlbum = (album) => {
    const paramsId = this.props.navigation.getParam('id');
    const nextRoute = paramsId ? 'UserAlbum' : 'Album';
    this.props.navigation.navigate(nextRoute, { id: album.id });
  };

  render() {
    if (this.props.isFetching) {
      return <Spinner />;
    }

    return (
      <ScrollView style={styles.container}>
        <ItemList items={this.props.albums} onPress={this.selectAlbum} ItemComponent={Item} />
      </ScrollView>
    );
  }
}

AlbumsScreen.propTypes = {
  albums: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchAlbumsData: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  albums: mapUsersIdsToUser(state.albums.data, state.users.data),
  isFetching: state.albums.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchAlbumsData: id => dispatch(fetchAlbumsData(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
