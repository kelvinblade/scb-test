import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { UserDetails, UserAddress } from '../components';

class UserScreen extends Component {
  state = {
    showAddress: false,
  };

  navigateTo = route => this.props.navigation.navigate(route, { id: this.props.user.id });

  toggleAddress = () => this.setState({ showAddress: !this.state.showAddress });

  render() {
    return (
      <ScrollView style={styles.container}>
        <UserDetails user={this.props.user} navigateTo={this.navigateTo} />
        <UserAddress
          user={this.props.user}
          showAddress={this.state.showAddress}
          onPress={this.toggleAddress}
        />
      </ScrollView>
    );
  }
}

UserScreen.propTypes = {
  user: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  null,
)(UserScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
});
