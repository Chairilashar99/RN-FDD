import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Cart Screen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: Colors.DEFAULT_BLACK,
  },
});
