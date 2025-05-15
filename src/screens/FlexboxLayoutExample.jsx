import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexboxLayoutExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}><Text>Box 1</Text></View>
      <View style={styles.box2}><Text>Box 2</Text></View>
      <View style={styles.box3}><Text>Box 3</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',            // row-wise layout
    justifyContent: 'space-between', // equal spacing between items
    alignItems: 'center',            // vertically center
    padding: 20,
    backgroundColor: '#eee',
  },
  box1: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    width: 80,
    height: 80,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    width: 80,
    height: 80,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FlexboxLayoutExample;
