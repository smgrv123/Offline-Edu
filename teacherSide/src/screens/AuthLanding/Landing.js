import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './LandingStyles';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';

const Landing = props => {
  const [classData, setclassData] = useState();
  const [load, setload] = useState(true);

  const user = props.user;

  useEffect(() => {
    setload(true);
    var temp = [];
    firestore()
      .collection('class')
      .get()
      .then(snap => {
        snap.docs.forEach(doc => {
          temp.push(doc.data());
        });
        setclassData(temp);
      });
    console.log(classData);
    setload(false);
  }, []);

  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const navigation = useNavigation();
  
  return (
    <View style={styles.base}>
      <View style={{flex: 0.5, justifyContent: 'center'}}>
        <Text style={styles.head}>SHIKSHA</Text>
      </View>
      <View style={{flex: 6, justifyContent: 'center'}}>
        {classData ? (
          <View>
            <FlatList
              data={classData}
              renderItem={({item}) => (
                <View style={styles.class}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Classroom', {
                        classData: classData,
                      });
                    }}>
                    <Text style={styles.classText}>
                      {`ClassID : ${item.classID}`}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.contact}
            />
          </View>
        ) : null}
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            navigation.navigate('CreateClass',{
              user:user
            })
          }}>
          <Icon name="plus" color="#BC6FF1" size={30} style={{padding: 15}} />
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
