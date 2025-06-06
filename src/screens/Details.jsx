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
        <Text style={styles.center}>Details</Text>
        <View style={{ width: 32 }} />
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        <View style={styles.formContent}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Enter object name"
              placeholderTextColor="#888"
            />

            <View style={styles.spacer} />

            <TextInput
              style={styles.input}
              placeholder="Enter type"
              placeholderTextColor="#888"
            />

            <View style={styles.spacer} />

            <TextInput
              style={[styles.input, styles.textarea]}
              placeholder="Enter description"
              placeholderTextColor="#888"
              multiline={true}
              numberOfLines={4}
            />
          </View>

          {/* Photo Section */}
          <View style={styles.photoSection}>
            <Text style={styles.label}>Photos</Text>
            <View style={styles.photoGrid}>
              {[...Array(10)].map((_, index) => (
                <TouchableOpacity key={index} style={styles.photoBox}>
                  <Text style={styles.plusIcon}>＋</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Submit Button */}
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
    height: 15, // spacing between inputs
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
  textarea: {
    height: 120,
    textAlignVertical: 'top',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
    marginTop: 8,
  },
  photoSection: {
    marginTop: 6,
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  photoBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#bbb',
    borderStyle: 'dotted',
    borderRadius: 8,
    marginBottom: 8,
    marginRight: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdfdfd',
  },
  plusIcon: {
    fontSize: 24,
    color: '#999',
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
