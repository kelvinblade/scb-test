import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export default function Spinner() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
