import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Welcome = () => {
const icons = [
  {
    label: 'Caution',
    uri: 'https://cdn-icons-png.flaticon.com/512/4539/4539472.png',
  },
  {
    label: 'Work in Progress',
    uri: 'https://cdn-icons-png.flaticon.com/512/5578/5578703.png',
  },
  {
    label: 'Trashbin',
    uri: 'https://cdn-icons-png.flaticon.com/512/11641/11641591.png',
  },
  {
    label: 'Pin Board',
    uri: 'https://cdn-icons-png.flaticon.com/512/14759/14759527.png',
  },
  {
    label: 'Siren',
    uri: 'https://cdn-icons-png.flaticon.com/512/9567/9567898.png',
  },
  {
    label: 'Radar',
    uri: 'https://cdn-icons-png.flaticon.com/512/18260/18260456.png',
  },
];
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.text1}>Hi Daniel</Text>
          <Text style={styles.text2}>Welcome</Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1827/1827312.png',
          }}
          style={styles.bellIcon}
        />
      </View>
       <View style={styles.dashboard}>
      {icons.map((item, index) => (
        <View key={index} style={styles.iconBox}>
          <Image source={{ uri: item.uri }} style={styles.iconImage} />
          <Text style={styles.iconLabel}>{item.label}</Text>
        </View>
      ))}
    </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f2aa00',
  },
  text2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  bellIcon: {
    width: 30,
    height: 30,
    backgroundColor : 'white',
  },
   dashboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,

  },
  iconBox: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 16,
    padding: 16,
    backgroundColor : 'white',
  },
  iconImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain',

  },
  iconLabel: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
    fontWeight: '600',
  },
});
