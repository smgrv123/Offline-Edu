import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './LandingStyles';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'

const Landing = props => {
  const user = props.user;
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

const navigation=useNavigation()

  return (
    <View style={styles.base}>
      <View style={{flex: 0.5, justifyContent: 'center'}}>
        <Text style={styles.head}>Shiksha!!</Text>
      </View>
      <View style={{flex: 6, justifyContent: 'center'}}>
        {/* <View
          style={styles.welcome}>
          <Text
            style={styles.welcomeT}>
            {` Welcome ${user.email}`}
          </Text>
        </View> */}
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            navigation.navigate('Info');
          }}>
          <Icon name='plus' color='#BC6FF1' size={30} style={{padding:20}} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 2}}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            signOut();
          }}>
          <Text style={styles.text1}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;