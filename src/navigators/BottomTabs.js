import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CartScreen, HomeScreen} from '../screens';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Cart" component={CartScreen} />
  </Tab.Navigator>
);
