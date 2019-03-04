import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchTodosData, setTodoData } from '../actions';
import { ItemList, Item, Spinner } from '../common';
import Colors from '../constants/Colors';
import { mapUsersIdsToUser } from '../utils/helpers';

class TodoScreen extends Component {
  componentDidMount() {
    const id = this.props.navigation.getParam('id');
    this.props.fetchTodosData(id);
  }

  selectTodo = (todo) => {
    const paramsId = this.props.navigation.getParam('id');
    const nextRoute = paramsId ? 'UserTodo' : 'Todo';
    this.props.navigation.navigate(nextRoute);
    this.props.setTodoData(todo);
  };

  render() {
    if (this.props.isFetching) {
      return <Spinner />;
    }

    return (
      <ScrollView style={styles.container}>
        <ItemList items={this.props.todos} onPress={this.selectTodo} ItemComponent={Item} />
      </ScrollView>
    );
  }
}

TodoScreen.propTypes = {
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchTodosData: PropTypes.func.isRequired,
  setTodoData: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  todos: mapUsersIdsToUser(state.todos.data, state.users.data),
  isFetching: state.todos.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchTodosData: id => dispatch(fetchTodosData(id)),
  setTodoData: todo => dispatch(setTodoData(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
