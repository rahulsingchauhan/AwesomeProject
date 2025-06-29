import React from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import Welcome from './src/screens/Welcome';
import Details from './src/screens/Details';
import FlexboxLayoutExample from './src/screens/FlexboxLayoutExample';
import FlexPropertiesExample from './src/screens/FlexPropertiesExample';
import AdvancedSpacingExample from './src/screens/AdvancedSpacingExample';
import PositioningExample from './src/screens/PositioningExample';
import ScrollableListExample from './src/screens/ScrollableListExample';
import TouchablesExample from './src/screens/TouchablesExample';
import Success from './src/screens/Success';
import Profile from './src/screens/Profile';
import FlatListExample from './src/screens/FlatListExample';
import SmallFoodCards from './src/screens/SmallFoodCards';
import TextInputExample from './src/screens/TextInputExample';
import ModalExample from './src/screens/ModalExample';
import ImageExample from './src/screens/ImageExample';
import ClickCounter from './src/screens/ClickCounter';
import StackNavigator from './Ecommerce/StackNavigator';

const App = () => {
  return (
  <NavigationContainer>
      {/* <Login /> */}
      {/* <Welcome/> */}
      {/* <Details/> */}
      {/* <Success/> */}
      {/* <Profile/> */}
      {/* <SmallFoodCards/> */}
      {/* <FlatListExample/> */}
      {/* <FlexboxLayoutExample/> */}
      {/* <FlexPropertiesExample/> */}
      {/* <AdvancedSpacingExample/> */}
      {/* <PositioningExample/> */}
      {/* <ScrollableListExample/> */}
      {/* <TouchablesExample/> */}
      {/* <TextInputExample/> */}
      {/* <ModalExample/> */}
      {/* <ImageExample/> */}

      {/* Hands on */}
      {/* <ClickCounter/> */}


        <StackNavigator />
   </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
