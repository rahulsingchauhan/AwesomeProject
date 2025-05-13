import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const Login = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.boldText}>What's Your Email?</Text>
        <Text style={styles.lightText}>We'll send you a code to verify it.</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput style={styles.input} placeholder="Enter your email" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
          <Text style={styles.loginText}>Login with phone</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  boldText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  lightText: {
    color: 'grey',
    marginBottom: 25,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    color: '#f2aa00',
    marginBottom: 6,
    fontSize: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: '#f2aa00',
    padding: 12,
    borderRadius: 15,
    fontSize: 16,
    color: 'black',
  },
  loginButton: {
    backgroundColor: '#535c74',
    padding: 18,
    alignItems: 'center',
    width: '100%',
    borderRadius: 20,
    marginTop: 30,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
