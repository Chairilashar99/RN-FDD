import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const VerificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Verification Screen</Text>
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
