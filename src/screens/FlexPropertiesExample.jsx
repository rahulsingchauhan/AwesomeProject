import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexPropertiesExample = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
        <Text style={styles.text}>flex: 1</Text>
      </View>
      <View style={[styles.box, styles.box2]}>
        <Text style={styles.text}>flex: 2</Text>
      </View>
      <View style={[styles.box, styles.box3]}>
        <Text style={styles.text}>flex: 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',  // Row layout
    padding: 10,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: 100,
  },
  box1: {
    flex: 1,
    backgroundColor: '#FF6B6B',
  },
  box2: {
    flex: 2,
    backgroundColor: '#4ECDC4',
  },
  box3: {
    flex: 3,
    backgroundColor: '#556270',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FlexPropertiesExample;
