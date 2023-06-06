import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FoodScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FoodScreen</Text>
    </View>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
