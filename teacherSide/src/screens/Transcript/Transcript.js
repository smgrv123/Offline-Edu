import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Axios from 'axios';
import {Input} from 'react-native-elements';

const Transcript = () => {
  const [link, setlink] = useState();
  // useEffect(()=>{
  //     Axios.post()
  // },[])

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
      <View style={{flex: 8,justifyContent:"center"}}>
        <Input
          placeholder="Upload drive link"
          onChangeText={res => {
            setlink(res);
          }}
          style={{backgroundColor: '#52057B', color: '#000',borderRadius:5}}
          placeholderTextColor="#000"
        />
      </View>
      <View style={{flex: 4}}>
        <TouchableOpacity onPress={()=>{
            
        }} style={{backgroundColor: '#52057B', borderRadius: 5}}>
          <Text style={{textAlign: 'center',fontSize:25,fontWeight:'bold'}}>Send Transcipt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Transcript;
