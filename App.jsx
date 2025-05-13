import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './src/screens/Login';

const App = () => {
  return (
    <View style={styles.container}>
      <Login />
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
