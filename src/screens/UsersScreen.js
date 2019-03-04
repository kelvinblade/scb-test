import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUsersData, setUserData } from '../actions';
import { ItemList, Spinner } from '../common';
import { UserItem } from '../components';
import Colors from '../constants/Colors';

class UsersScreen extends Component {
  componentDidMount() {
    this.props.fetchUsersData();
  }

  selectUser = (user) => {
    this.props.navigation.navigate('User');
    this.props.setUserData(user);
  };

  render() {
    if (this.props.isFetching) {
      return <Spinner />;
    }

    return (
      <ScrollView style={styles.container}>
        <ItemList items={this.props.users} onPress={this.selectUser} ItemComponent={UserItem} />
      </ScrollView>
    );
  }
}

UsersScreen.propTypes = {
  users: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchUsersData: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  users: state.users.data,
  isFetching: state.users.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchUsersData: () => dispatch(fetchUsersData()),
  setUserData: user => dispatch(setUserData(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
