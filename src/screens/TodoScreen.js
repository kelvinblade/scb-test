import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'expo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AvatarWithName } from '../common';
import Colors from '../constants/Colors';

class TodoScreen extends PureComponent {
  render() {
    const { todo } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.statusContainer}>
          <Icon.Ionicons
            name={todo.completed ? 'ios-checkmark-circle' : 'ios-close-circle'}
            style={styles.icon}
            color={todo.completed ? '#79D31F' : '#FC642D'}
          />
          <Text style={[styles.statusText, { color: todo.completed ? '#79D31F' : '#FC642D' }]}>
            {todo.completed ? 'Completed' : 'Incomplete'}
          </Text>
        </View>
        <Text style={styles.title}>{todo.title}</Text>
        <AvatarWithName name={todo.user.name} />
      </View>
    );
  }
}

TodoScreen.propTypes = {
  todo: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  todo: state.todo,
});

export default connect(
  mapStateToProps,
  null,
)(TodoScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
    fontSize: 24,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: Colors.mainText,
    fontWeight: '500',
    marginBottom: 5,
  },
});
