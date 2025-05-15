import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdvancedSpacingExample = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}><Text>Box 1</Text></View>
      <View style={[styles.box, styles.box2]}><Text>Box 2</Text></View>
      <View style={[styles.box, styles.box3]}><Text>Box 3</Text></View>
      <View style={[styles.box, styles.box4]}><Text>Box 4</Text></View>
      <View style={[styles.box, styles.box5]}><Text>Box 5</Text></View>
      <View style={[styles.box, styles.box6]}><Text>Box 6</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',        // Wrap items to next line
    gap: 10,                 // Works in RN 0.71+, else use margin
    justifyContent: 'center',
    padding: 10,
  },
  box: {
    width: 100,
    height: 100,
    margin: 5,               // Spacing between boxes (in case gap not supported)
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B388EB',
  },
  box1: { alignSelf: 'auto' },
  box2: { alignSelf: 'flex-start' },
  box3: { alignSelf: 'center' },
  box4: { alignSelf: 'flex-end' },
  box5: { backgroundColor: '#FF9A8B' },
  box6: { backgroundColor: '#88E1F2' },
});

export default AdvancedSpacingExample;
