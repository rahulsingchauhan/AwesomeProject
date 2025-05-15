import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg',
      }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.mainView}>
          {/* Profile Card */}
          <View style={styles.profileCard}>
            <Image
              source={{
                uri: 'https://ik.imagekit.io/sti8lrsqsa/image.png?updatedAt=1684849005090',
              }}
              style={styles.userImage}
            />
            <Text style={styles.userName}>Jenny Wilson</Text>
            <Text style={styles.userId}>@jennywilson</Text>
          </View>

          {/* Info Section */}
          <View style={styles.infoSection}>
            <Text style={styles.infoText}>
              From your account dashboard you can edit your{' '}
              <TouchableOpacity>
                <Text style={styles.signOutLink}>Profile Details</Text>
              </TouchableOpacity>{'       '}
              and{' '}
              <TouchableOpacity>
                <Text style={styles.signOutLink}>Edit your password</Text>
              </TouchableOpacity>.
            </Text>
          </View>

          {/* Sign Out */}
          <View style={styles.signOutSection}>
            <Text style={styles.signOutText}>
              Not Jenny Wilson?{' '}
              <TouchableOpacity>
                <Text style={styles.signOutLink}>Sign Out</Text>
              </TouchableOpacity>
            </Text>
          </View>

          {/* Login Button */}
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.login}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cart}>
              <Text style={styles.loginText}>Add To Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.agent}>
              <Text style={styles.loginText}>Request an agent</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.agent}>
              <Text style={styles.loginText}>Request an agent</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    margin: 10,
    borderRadius: 12,
  },
  profileCard: {
    alignItems: 'center',
    padding: 25,
    shadowRadius: 5,
    marginBottom: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  userId: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  infoSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    lineHeight: 24,
    flexWrap: 'wrap',
  },
  signOutSection: {
    marginTop: 10,
  },
  signOutText: {
    fontSize: 16,
    color: '#555',
  },
  signOutLink: {
    color: '#007bff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  buttons: {
    width: '100%', // make sure the button container is full width
    paddingHorizontal: 20,
  },
  login: {
    backgroundColor: '#5ccecd',
    marginVertical: 15,
    padding: 15,
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  cart:{
backgroundColor: '#3e7bde',
    marginVertical: 15,
    padding: 15,
    alignItems: 'center',
marginLeft: '25%',
    width: '50%',
    borderRadius: 10,
  },
  agent:{
backgroundColor: '#e53563',
    marginVertical: 15,
    padding: 15,
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
  },
});
