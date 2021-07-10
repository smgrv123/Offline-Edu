import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Input} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const CreateClass = ({route}) => {
  const {user} = route.params;

  const navigation = useNavigation();

  const [classID, setclassID] = useState();
  const [studentName, setstudentName] = useState();
  const [contact, setcontact] = useState();
  const usersCollection = firestore().collection(
    `class/${user.uid}/class${classID}`,
  );
  const sendData = () => {
    console.log('yes');
    usersCollection
      .add({
        studentName: studentName,
        Contact: contact,
        teacherEmail: user.email,
      })
      .then(() => {
        console.log('done');
        navigation.navigate('CreateClass');
      })
      .catch(err => console.log(err));
  };
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View style={{flex: 3,justifyContent:"center"}}>
        <Text style={{color:"#BC6FF1",textAlign:'center',fontSize:35,fontWeight:"bold"}} > {`Student Details`} </Text>
      </View>
      <View style={{paddingLeft: '2.5%', paddingRight: '2.5%', flex: 8}}>
        <Input
          placeholder="ClassID"
          keyboardType="number-pad"
          onChangeText={res => {
            setclassID(res);
          }}
          style={{backgroundColor: '#BC6FF1', borderRadius: 7}}
          placeholderTextColor="#000"
        />
        <Input
          placeholder="Name of Student"
          keyboardType="ascii-capable"
          onChangeText={res => {
            setstudentName(res);
          }}
          style={{backgroundColor: '#BC6FF1', borderRadius: 7}}
          placeholderTextColor="#000"
        />
        <Input
          placeholder="Contact Number"
          keyboardType="phone-pad"
          onChangeText={res => {
            setcontact(res);
          }}
          style={{backgroundColor: '#BC6FF1', borderRadius: 7}}
          placeholderTextColor="#000"
        />
      </View>
      <View style={{flex: 4}}>
        <TouchableOpacity
          onPress={sendData}
          style={{
            backgroundColor: '#52057B',
            borderRadius: 7,
            marginLeft: '4%',
            marginRight: '4%',
            height: 35,
            marginBottom: '5%',
          }}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#BC6FF1',
            }}>
            Add Student to Classroom
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#52057B',
            borderRadius: 7,
            marginLeft: '4%',
            marginRight: '4%',
            height: 35,
          }}
          onPress={() => {
            navigation.navigate('Landing');
          }}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#BC6FF1',
            }}>
            View Classroom
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateClass;
