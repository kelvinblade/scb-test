import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { SectionTitle, Button } from '../common';
import Colors from '../constants/Colors';

export default class UserDetails extends PureComponent {
  render() {
    const { user, showAddress, onPress } = this.props;
    const {
      street, suite, city, zipcode,
    } = user.address;

    return (
      <View style={styles.container}>
        {showAddress && (
          <View style={styles.sectionContainer}>
            <SectionTitle title="Address" />
            <Text style={styles.text}>{street}</Text>
            <Text style={styles.text}>{suite}</Text>
            <Text style={styles.text}>{city}</Text>
            <Text style={styles.text}>{zipcode}</Text>
          </View>
        )}
        <Button title={showAddress ? 'Hide Address' : 'Show Address'} onPress={onPress} />
      </View>
    );
  }
}

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  showAddress: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: Colors.detailText,
    fontWeight: '400',
  },
  sectionContainer: {
    marginVertical: 15,
  },
});
