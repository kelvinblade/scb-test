import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCommentsData } from '../actions';
import { ItemList, Item, Spinner } from '../common';
import { CommentItem } from '../components';

class PostScreen extends Component {
  componentDidMount() {
    this.props.fetchCommentsData(this.props.post.id);
  }

  render() {
    if (this.props.isFetching) {
      return <Spinner />;
    }

    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Item item={this.props.post} />
        <ItemList items={this.props.comments} ItemComponent={CommentItem} />
      </ScrollView>
    );
  }
}

PostScreen.propTypes = {
  comments: PropTypes.array.isRequired,
  post: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchCommentsData: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  comments: state.comments.data,
  post: state.post,
  isFetching: state.comments.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchCommentsData: id => dispatch(fetchCommentsData(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
