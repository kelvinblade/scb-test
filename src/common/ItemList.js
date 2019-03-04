import React, { PureComponent } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';

export default class ItemList extends PureComponent {
  render() {
    const {
      items, onPress, ItemComponent, numColumns,
    } = this.props;

    return (
      <FlatList
        data={items}
        renderItem={({ item }) => <ItemComponent item={item} onPress={onPress} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        numColumns={numColumns}
      />
    );
  }
}

ItemList.defaultProps = {
  numColumns: 1,
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onPress: PropTypes.func,
  ItemComponent: PropTypes.elementType.isRequired,
  numColumns: PropTypes.number,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
