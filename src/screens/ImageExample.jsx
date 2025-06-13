import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const ImageExample = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>🖼️ Remote Image</Text>
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.title}>🗂️ Local Image</Text>
      <Image
        source={require('../assets/images/image9.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>🌄 Background Image</Text>
      <ImageBackground
        source={{ uri: 'https://picsum.photos/600/300' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Text style={styles.bgText}>Text on Background</Text>
      </ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    backgroundColor: '#ddd',
  },
  backgroundImage: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    overflow: 'hidden',
  },
  bgText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(37, 37, 37, 0.5)',
    padding: 6,
    borderRadius: 6,
  },
});

export default ImageExample;
