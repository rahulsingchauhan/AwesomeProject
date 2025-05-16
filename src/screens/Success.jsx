import {Image, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';

const Details = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            source={require('../assets/images/image9.png')}
            style={styles.leftBackButton}
          />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.centerImage}>
          <Image
            source={require('../assets/images/done.png')}
            style={styles.doneImage}
          />
        </View>

        <View style={styles.centerText}>
          <Text style={styles.centerdBold}>Data Uploaded Successfully !</Text>
          <Text style={styles.centerGrey}>Upload Complete, Ready to go!</Text>
        </View>
      </View>

      {/* Bottom Button */}
      <View style={styles.bottomButtonWrapper}>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
    justifyContent: 'center',
  },
  iconWrapper: {
    padding: 8,
  },
  leftBackButton: {
    width: 24,
    height: 24,
  },
  centerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  doneImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  centerText: {
    alignItems: 'center',
    paddingTop : 70,
  },
  centerdBold: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
  },
  centerGrey: {
    fontSize: 14,
    color: '#888',
  },
  bottomButtonWrapper: {
    marginBottom: 30,
  },
  submitButton: {
    backgroundColor: '#535c74',
    borderRadius: 25,
    padding: 16,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
