import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';

export default class SectionTitle extends PureComponent {
  render() {
    const { title } = this.props;

    return <Text style={styles.title}>{title}</Text>;
  }
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    color: Colors.headerText,
    fontWeight: '600',
    marginBottom: 10,
  },
});
