import React, { Component } from 'react';
import {
  StyleSheet, View, FlatList, Dimensions,
} from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setUserData } from '../actions';
import { UserItem } from '../components';
import Colors from '../constants/Colors';

const CARD_WIDTH = Dimensions.get('window').width - 10;

const INITIAL_REGION = {
  latitude: -43.9509,
  longitude: -34.4618,
  latitudeDelta: 10.2,
  longitudeDelta: 10.2,
};

class MapScreen extends Component {
  onScrollEnd = (e) => {
    const { users } = this.props;
    const offset = e.nativeEvent.contentOffset.x;
    const index = parseInt(offset / CARD_WIDTH);
    this.map.animateToCoordinate(
      {
        latitude: parseFloat(users[index].address.geo.lat),
        longitude: parseFloat(users[index].address.geo.lng),
      },
      1500,
    );
  };

  selectUser = (user) => {
    this.props.navigation.navigate('User');
    this.props.setUserData(user);
  };

  renderMarker = () => <View style={styles.marker} />;

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={(map) => {
            this.map = map;
          }}
          style={{ flex: 1 }}
          initialRegion={INITIAL_REGION}
        >
          {this.props.users.map(user => (
            <MapView.Marker
              key={user.id}
              coordinate={{
                latitude: parseFloat(user.address.geo.lat),
                longitude: parseFloat(user.address.geo.lng),
              }}
            >
              {this.renderMarker()}
            </MapView.Marker>
          ))}
        </MapView>
        <FlatList
          data={this.props.users}
          renderItem={({ item }) => <UserItem item={item} onPress={this.selectUser} block />}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          style={styles.listContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          snapToAlignment="start"
          decelerationRate="fast"
          onMomentumScrollEnd={this.onScrollEnd}
        />
      </View>
    );
  }
}

MapScreen.propTypes = {
  users: PropTypes.array.isRequired,
  setUserData: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  users: state.users.data,
});

const mapDispatchToProps = dispatch => ({
  setUserData: user => dispatch(setUserData(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContainer: {
    position: 'absolute',
    bottom: 30,
    marginHorizontal: 10,
  },
  marker: {
    backgroundColor: Colors.highlightColor,
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
