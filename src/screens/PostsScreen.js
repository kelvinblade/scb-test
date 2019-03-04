import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPostsData, setPostData } from '../actions';
import { ItemList, Item, Spinner } from '../common';
import Colors from '../constants/Colors';
import { mapUsersIdsToUser } from '../utils/helpers';

class PostsScreen extends Component {
  componentDidMount() {
    const id = this.props.navigation.getParam('id');
    this.props.fetchPostsData(id);
  }

  selectPost = (post) => {
    const paramsId = this.props.navigation.getParam('id');
    const nextRoute = paramsId ? 'UserPost' : 'Post';
    this.props.navigation.navigate(nextRoute);
    this.props.setPostData(post);
  };

  render() {
    if (this.props.isFetching) {
      return <Spinner />;
    }

    return (
      <ScrollView style={styles.container}>
        <ItemList items={this.props.posts} onPress={this.selectPost} ItemComponent={Item} />
      </ScrollView>
    );
  }
}

PostsScreen.propTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchPostsData: PropTypes.func.isRequired,
  setPostData: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  posts: mapUsersIdsToUser(state.posts.data, state.users.data),
  isFetching: state.posts.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchPostsData: id => dispatch(fetchPostsData(id)),
  setPostData: post => dispatch(setPostData(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
