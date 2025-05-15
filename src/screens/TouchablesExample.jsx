import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, TouchableHighlight, Pressable, StyleSheet, Alert } from 'react-native';

const TouchablesExample = () => {
  const [count, setCount] = useState(0);

  const showAlert = (type) => {
    Alert.alert(`${type} Pressed`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Touchable Examples</Text>

      <Button title="Button" onPress={() => showAlert('Button')} />

      <TouchableOpacity style={styles.btn} onPress={() => showAlert('TouchableOpacity')}>
        <Text style={styles.btnText}>TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={styles.btn}
        underlayColor="#FFB703"
        onPress={() => showAlert('TouchableHighlight')}
      >
        <Text style={styles.btnText}>TouchableHighlight</Text>
      </TouchableHighlight>

      <Pressable
        style={({ pressed }) => [styles.btn, pressed && styles.pressedBtn]}
        onPress={() => setCount((prev) => prev + 1)}
      >
        <Text style={styles.btnText}>Pressable (Count: {count})</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#219EBC',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  pressedBtn: {
    backgroundColor: '#023047',
  },
});

export default TouchablesExample;
