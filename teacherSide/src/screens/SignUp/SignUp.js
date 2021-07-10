import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import Email from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
import Pass from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
// import EntryDone from '../LogIn/EntryDone';
import styles from './SignUpStyles';
import Landing from '../AuthLanding/Landing';

const SignUp = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [errfirst, setErrFirst] = useState(false);
  const [lastName, setLastName] = useState('');
  const [contactE, setContactE] = useState(false);
  const [pass, setPass] = useState('');
  const [errPass, setErrPass] = useState(false);
  const [phone, setPhone] = useState('');
  const [errphone, setErrPhone] = useState(false);
  const [errEmail, seterrEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const validation = () => {
    if (firstName !== '' || lastName !== '' || pass !== '' || phone !== '') {
      let regName = /^[a-z ,.'-]+$/i;
      let regEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let regPhone =
        /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
      if (!regPhone.test(phone)) {
        setErrPhone(true);
      }
      if (!regName.test(firstName)) {
        setErrFirst(true);
      }
      if (!regPhone.test(lastName)) {
        console.log('yes');
        setContactE(true);
      }
      if (pass.length < 8) {
        setErrPass(true);
      }
      if (!regEmail.test(email)) {
        seterrEmail(true);
      }
      if (
        regPhone.test(phone) &&
        regName.test(firstName) &&
        regPhone.test(lastName) &&
        pass.length >= 8
      ) {
        sendData();
      }
    } else {
      if (firstName === '') {
        setErrFirst(true);
      }
      if (lastName === '') {
        setContactE(true);
      }
      if (pass === '') {
        setErrPass(true);
      }
      if (phone === '') {
        setErrPhone(true);
      }
      if (email === '') {
        seterrEmail(true);
      }
    }
  };

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  const usersCollection = firestore().collection('Users');

  const SignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

  const sendData = () => {
    console.log('yes');
    usersCollection
      .add({
        Name: firstName,
        Email: email,
        Contact: phone,
        EmergencyContact: lastName,
      })
      .then(() => {
        console.log('done');
        SignUp();
      })
      .catch(err => console.log(err));
  };
  if (initializing) return null;
  if (!user) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#000',
        }}>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text style={styles.head}>Welcome To Shiksha !!</Text>
        </View>
        <View style={{flex: 8}}>
          <Text style={styles.title}>Name of Teacher</Text>
          <Input
            errorMessage={errfirst ? 'Please Enter a Valid First Name' : null}
            autoCorrect={false}
            maxLength={50}
            keyboardType="default"
            style={{
              backgroundColor: '#fff',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            placeholder="Name of Teacher"
            rightIcon={
              <Icon name="user" size={40} color="black" style={styles.icon} />
            }
            onChangeText={val => {
              setErrFirst(false);
              setFirstName(val);
            }}
          />

          <Text style={styles.title}>E-mail</Text>
          <Input
            autoCorrect={false}
            maxLength={50}
            errorMessage={errEmail ? 'Invalid email address' : null}
            keyboardType="email-address"
            autoCapitalize={'none'}
            placeholder="Enter Email"
            style={{
              backgroundColor: '#fff',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            placeholder="Email ID"
            rightIcon={
              <Email name="email" size={40} color="black" style={styles.icon} />
            }
            onChangeText={inp => {
              setEmail(inp);
            }}
          />
          <Text style={styles.title}>Password</Text>
          <Input
            errorMessage={
              errPass
                ? 'Please Enter a Valid Password with atleast 8 Characters'
                : null
            }
            autoCorrect={false}
            maxLength={15}
            secureTextEntry={true}
            autoCapitalize={'none'}
            style={{
              backgroundColor: '#fff',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            placeholder="Password"
            rightIcon={
              <Pass name="safe" size={40} color="black" style={styles.icon} />
            }
            onChangeText={val => {
              setErrPass(false);
              setPass(val);
            }}
          />
          <Text style={styles.title}>Contact</Text>
          <Input
            errorMessage={errphone ? 'Please Enter a Valid Phone Number' : null}
            autoCorrect={false}
            keyboardType="number-pad"
            style={{
              backgroundColor: '#fff',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            placeholder="Contact Number"
            rightIcon={
              <Icon name="phone" size={40} color="black" style={styles.icon} />
            }
            maxLength={10}
            onChangeText={val => {
              setErrPhone(false);
              setPhone(val);
            }}
          />
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              validation();
            }}
            style={styles.button}>
            <Text
              style={{
                color: '#BC6FF1',
                textAlign: 'center',
                fontSize: 22,
                fontWeight: 'bold',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } 
  else {
    return (
      <Landing user={user} />
    );
  }
};


export default SignUp;