import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './HomeScreen';
// future screens (you'll add later)
// import ProductDetailScreen from '.ProductDetailScreen';
// import CartScreen from './CartScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'All Products'}}
        />
        {/* 
        <Stack.Screen 
          name="ProductDetail" 
          component={ProductDetailScreen} 
          options={{ title: 'Product Detail' }}
        />
        <Stack.Screen 
          name="Cart" 
          component={CartScreen} 
          options={{ title: 'Your Cart' }}
        />
        */}
      </Stack.Navigator>
  );
};

export default StackNavigator;
