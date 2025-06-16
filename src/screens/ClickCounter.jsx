import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
const colors = ['red', 'green', 'blue', 'orange', 'purple', 'teal', 'pink', 'black', 'yellow'];

const ClickCounter = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {colors.map((color, index) => (
        <View key={index} style={[styles.box, { backgroundColor: color }]}>
          <Text style={styles.text}>{color.toUpperCase()}</Text>
        </View>
      ))}
    </ScrollView>
  );
};


export default ClickCounter;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  box: {
    width: '90%',
    height: 100,
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
