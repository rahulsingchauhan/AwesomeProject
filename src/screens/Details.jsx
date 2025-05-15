import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Details = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            source={{
              uri: 'https://img.icons8.com/?size=100&id=26194&format=png&color=FAB005',
            }}
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
            <Text style={styles.label}>Object Name</Text>
            <TextInput style={styles.input} placeholder="Enter object name" />

            <Text style={styles.label}>Type</Text>
            <TextInput style={styles.input} placeholder="Enter type" />

            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.textarea]}
              placeholder="Enter description"
              multiline={true}
              numberOfLines={4}
            />
          </View>
          
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
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 4,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  textarea: {
    height: 70,
    textAlignVertical: 'top',
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