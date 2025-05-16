import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
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
        <Text style={styles.center}>Profile</Text>
        <View style={{ width: 32 }} />
      </View>

      {/* User Image in Circle */}
      <View style={styles.userImageWrapper}>
        <Image
          source={require('../assets/images/done.png')}
          style={styles.userImage}
        />
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        <View style={styles.formContent}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#888"
            />

            <View style={styles.spacer} />

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#888"
            />

            <View style={styles.spacer} />

            <TextInput
              style={styles.input}
              placeholder="Mobile No."
              placeholderTextColor="#888"
            />
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Update</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  iconWrapper: {
    width: 32,
    alignItems: 'flex-start',
  },
  leftBackButton: {
    width: 24,
    height: 24,
  },
  center: {
    fontSize: 20,
    fontWeight: '800',
    color: '#333',
    textAlign: 'center',
    flex: 1,
  },
  userImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  userImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ccc',
    resizeMode: 'cover',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  formContent: {
    flex: 1,
  },
  form: {
    marginTop: 5,
  },
  spacer: {
    height: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: 'black',
  },
  submitButton: {
    backgroundColor: '#535c74',
    borderRadius: 25,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
