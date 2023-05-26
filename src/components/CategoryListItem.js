import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../constants';

const CategoryListItem = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryText}>{name}</Text>
    </View>
  );
};

export default CategoryListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_YELLOW,
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
  },
  categoryText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
});
