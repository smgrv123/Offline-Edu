import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './LandingStyles';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Store from '../../Store';
import {Input} from 'react-native-elements';

const Landing = props => {
  const [classID, setclassID] = useState();
  const [load, setload] = useState(true);

  const user = props.user;

  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const navigation = useNavigation();

  return (
    <View style={styles.base}>
      <View style={{flex: 0.5, justifyContent: 'center'}}>
        <Text style={styles.head}>OFFLINE EDU</Text>
      </View>
      <View style={{flex: 6, justifyContent: 'center'}}>
        <Input
          placeholder="Please Enter ClassID"
          onChangeText={res => {
            setclassID(res);
          }}
          keyboardType="number-pad"
          style={{backgroundColor: '#52057B', borderRadius: 5, color: '#000'}}
          placeholderTextColor="#000"
        />
        <TouchableOpacity
          onPress={() => {
            Store.setClassID(classID);
            console.log(classID);
            if (classID ) {
              navigation.navigate('Classroom', {
                user: user,
              });
            }
          }}
          style={styles.button1}>
          <Text style={styles.text1}>View Class Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            navigation.navigate('CreateClass', {
              user: user,
            });
          }}>
          <Icon
            name="plus"
            color="#BC6FF1"
            size={30}
            style={{paddingLeft: 15, paddingRight: 15}}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
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
