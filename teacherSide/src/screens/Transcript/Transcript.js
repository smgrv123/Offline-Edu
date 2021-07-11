import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Axios from 'axios';
import {Input} from 'react-native-elements';
import FormData from 'form-data';
import SendSMS from 'react-native-sms';
import {useNavigation} from '@react-navigation/native';

const Transcript = ({route}) => {
  const {classData} = route.params;
  const [link, setlink] = useState();
  const [tranArr, settranArr] = useState();
  let trans = '';
  let contact = [];
  let form = new FormData();
  form.append('id', link);
  const navigation = useNavigation();
  classData.forEach(res => {
    contact.push(res.Contact);
  });



  const tranc = () => {
    Axios.post('https://offline-edu.breendadas.repl.co/mp3', form)
      .then(res => {
        res.data.results.forEach(res => {
          trans.concat(res.transcript);
        });
        settranArr(trans);
        navigation.navigate('SendTrans', {
          tran: tranArr,
          contact:contact
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View style={{flex: 3, justifyContent: 'center'}}>
        <Text
          style={{
            color: '#52057B',
            fontSize: 35,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Upload Transcript
        </Text>
      </View>
      <View style={{flex: 8, justifyContent: 'center'}}>
        <Input
          placeholder="Upload drive link"
          onChangeText={res => {
            setlink(res);
          }}
          style={{backgroundColor: '#52057B', color: '#000', borderRadius: 5}}
          placeholderTextColor="#000"
        />
      </View>
      <View style={{flex: 4}}>
        <TouchableOpacity
          onPress={() => {
            tranc();
          }}
          style={{backgroundColor: '#52057B', borderRadius: 5}}>
          <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>
            Send Transcipt
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Transcript;
