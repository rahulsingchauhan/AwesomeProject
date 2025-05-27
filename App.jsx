import React from 'react';
import { View, StyleSheet } from 'react-native';
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

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      {/* <Welcome/> */}
      {/* <Details/> */}
      {/* <Success/> */}
      {/* <Profile/> */}

      {/* <FlexboxLayoutExample/> */}
      {/* <FlexPropertiesExample/> */}
      {/* <AdvancedSpacingExample/> */}
      {/* <PositioningExample/> */}
      {/* <ScrollableListExample/> */}
      {/* <TouchablesExample/> */}
      <SmallFoodCards/>
      {/* <FlatListExample/> */}

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
