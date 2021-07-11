import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Store from '../../Store';

const Classroom = ({route}) => {
  const {user} = route.params;
  // console.log(classData);
  const [classData, setclassData] = useState();
  let contact = [];

  useEffect(() => {
    // setload(true);
    var temp = [];
    firestore()
      .collection(`class/${user.uid}/class${Store.classID}`)
      .get()
      .then(snap => {
        snap.docs.forEach(doc => {
          temp.push(doc.data());
        });
        setclassData(temp);
      });
    console.log(classData);
    // setload(false);
  }, []);

  const navigation = useNavigation();

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
          {`ClassID : Class${Store.classID}`}
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
              <Text style={{fontSize: 17}}>{item.Contact}</Text>
            </View>
          )}
          keyExtractor={item => item.Contact}
        />
      </View>
      <View style={{flex: 3, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ImagePick', {
              classData: classData,
            });
          }}
          style={{
            alignSelf: 'center',
            marginLeft: '20%',
            marginRight: '20%',
            backgroundColor: '#892CDC',
            borderRadius: 7,
          }}>
          <Text style={{fontSize: 24, padding: '4%', fontWeight: 'bold'}}>
            Upload Notes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Transcipt', {
              classData: classData,
            });
          }}
          style={{
            alignSelf: 'center',
            marginLeft: '20%',
            marginRight: '20%',
            backgroundColor: '#892CDC',
            borderRadius: 7,
            marginTop:"5%"
          }}>
          <Text style={{fontSize: 24, padding: '4%', fontWeight: 'bold'}}>
            Upload Transcript
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Classroom;
