import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PositioningExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Main Box</Text>
        <View style={styles.absoluteBox}>
          <Text style={styles.text}>Absolute Box</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#FFB703',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // default
  },
  absoluteBox: {
    width: 100,
    height: 100,
    backgroundColor: '#219EBC',
    position: 'absolute',
    top: -20,
    right: -20,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PositioningExample;
