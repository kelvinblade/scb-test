import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { AvatarWithName } from '../common';
import Colors from '../constants/Colors';

export default class CommentItem extends PureComponent {
  render() {
    const { item } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.body}</Text>
        <AvatarWithName name={item.name} />
      </View>
    );
  }
}

CommentItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 14,
    color: Colors.mainText,
    fontWeight: '500',
    marginBottom: 5,
  },
});
