import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants';

const RestaurantCard = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: Colors.DEFAULT_BLACK}}>{name}</Text>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
