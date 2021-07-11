import LottieView from 'lottie-react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import styles from './LandingStyles';

const Landing = props => {
  return (
    <View style={styles.background}>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <Text style={styles.heading}>Offline EDU</Text>
      </View>
      <View style={{flex: 8, justifyContent: 'center'}}>
        <LottieView
          source={require('../../assests/education.json')}
          autoPlay={true}
          loop={true}
        />
      </View>
      <View style={{flex: 4,flexDirection:"row",justifyContent:"space-around"}}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            props.navigation.navigate('SignUp');
          }}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => {
            props.navigation.navigate('Login');
          }}>
          <Text style={styles.signupText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Landing;
