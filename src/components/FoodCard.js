import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FoodCard = ({name}) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
