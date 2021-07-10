import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {Input} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Email from 'react-native-vector-icons/Entypo';
import Pass from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import styles from './LoginStyle';
import Landing from '../AuthLanding/Landing';

const LoginScreen = props => {
  const [err, setErr] = useState(true);
  const [pass, setPass] = useState('');
  const [passValid, setPassValid] = useState(true);
  const [signinErr, setSigninErr] = useState(null);
  const [email, setemail] = useState();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function SignUser() {
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        console.log();
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
        if (error.code === 'auth/user-not-found') {
          setSigninErr(error);
        }

        console.error(error);
      });
  }

  const validation = () => {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setErr(regEmail.test(email));
    if (regEmail.test(email) === false) {
      setErr(false);
    } else {
      if (pass.length < 6) {
        setPassValid(false);
      } else if (passValid === true) {
        console.log('yes');
        SignUser();
      }
    }
  };

  const navigation = useNavigation();
  if (initializing) return null;

  if (!user) {
    return (
      <View style={styles.base}>
        <View style={{flex: 4, justifyContent: 'center'}}>
          <Text style={styles.head}>Dive Into Shisksha !!</Text>
        </View>
        <View style={{flex: 8,justifyContent:'flex-start'}}>
          {signinErr !== null ? (
            <View
              style={{
                backgroundColor: '#E65531',
                marginLeft: '5%',
                marginRight: '5%',
                borderRadius: 5,
                marginBottom: '2%',
                padding: '1%',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  paddingLeft: '2%',
                  fontWeight: 'bold',
                }}>
                Error!
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 17,
                  paddingLeft: '2%',
                }}></Text>
            </View>
          ) : null}
          <Text style={styles.title}>E-mail</Text>
          <Input
            autoCorrect={false}
            maxLength={50}
            errorMessage={!err ? 'Invalid email address' : null}
            keyboardType="email-address"
            autoCapitalize={'none'}
            placeholder="E-mail"
            onChangeText={val => {
              setErr(true);
              setemail(val);
            }}
            rightIcon={
              <Email name="email" size={40} color="black" style={styles.icon} />
            }
            style={{
              backgroundColor: '#fff',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />

          <>
            <Text style={styles.title}>Password</Text>
            <Input
              errorMessage={
                !passValid
                  ? 'Please Enter a Valid Password with Atleast 8 Characters '
                  : null
              }
              secureTextEntry={true}
              maxLength={15}
              autoCorrect={false}
              autoCapitalize={'none'}
              placeholder="Password"
              onChangeText={val => {
                setSigninErr(null);
                setPassValid(true);
                setPass(val);
              }}
              rightIcon={
                <Pass name="safe" size={40} color="black" style={styles.icon} />
              }
              style={{
                backgroundColor: '#fff',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            />
          </>
        </View>
        <View style={{flex: 2, justifyContent: 'center', paddingBottom: '2%'}}>
          <View style={{height: 20}} />
          <TouchableOpacity
            onPress={() => {
              validation();
            }}
            style={styles.button}>
            <Text style={styles.text}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <Landing user={user} />
    );
  }
};

export default LoginScreen;
