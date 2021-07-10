import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native'

const Classroom = ({route}) => {
  const {classData} = route.params;
  console.log(classData);
  let contact=[]
  classData.forEach((res)=>{
    console.log(res);
    contact.push(res.contact)
  })
  const navigation=useNavigation()

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <Text
          style={{
            color: '#892CDC',
            fontSize: 35,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {`ClassID : ${classData[0].classID}`}
        </Text>
      </View>
      <View style={{flex: 9}}>
        <FlatList
          data={classData}
          renderItem={({item}) => (
            <View
              style={{
                marginLeft: '25%',
                marginRight: '25%',
                borderRadius: 4,
                backgroundColor: '#892CDC',
                paddingTop: '2.5%',
                paddingBottom: '2.5%',
                alignItems: 'center',
                marginBottom: '2%',
              }}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                {item.studentName.toUpperCase()}
              </Text>
              <Text style={{fontSize: 17}}>{item.contact}</Text>
            </View>
          )}
          keyExtractor={item => item.contact}
        />
      </View>
      <View
        style={{flex: 3, justifyContent: 'center'}}>
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate('ImagePick',{
            contact:contact
          })
        }}
          style={{
            alignSelf: 'center',
            marginLeft: '20%',
            marginRight: '20%',
            backgroundColor: '#892CDC',
            borderRadius:7
          }}>
          <Text style={{fontSize:24,padding:"4%",fontWeight:"bold"}} >Upload Notes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Classroom;
