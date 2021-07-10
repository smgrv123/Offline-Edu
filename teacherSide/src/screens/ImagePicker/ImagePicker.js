import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Entypo';
import FormData from 'form-data';
import Axios from 'axios';
import Store from '../../Store';
import {useNavigation} from '@react-navigation/native'

const ImagePick = () => {
  const [imageValue, setimageValue] = useState();

const navigation=useNavigation()

  let data = new FormData();
  data.append('string', imageValue);
  data.append('height', 0.08);
  data.append('width', 0.08);

  useEffect(() => {
    Axios.post('https://offline-edu.breendadas.repl.co/bs4string', data)
      .then(res => {
        Store.setSMSString(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }, [imageValue]);

  const openCam = () => {
    const option = {
      storageOptions: {
        path: 'image',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchCamera(option, res => {
      if (res.errorCode) {
        console.log(errorCode);
      }
      if (!res.didCancel) {
        setimageValue(res.assets[0].base64);
      }
    });
  };
  return (
    <View style={{backgroundColor: '#000', flex: 1}}>
      <View style={{flex: 8}}>
        {imageValue ? (
          <View>
            <Image
              source={{
                uri: `data:image/png;base64,${imageValue}`,
              }}
              style={{
                height: '70%',
                width: '90%',
                alignSelf: 'center',
                borderRadius: 5,
                marginTop: '10%',
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setimageValue('');
              }}>
              <Icon
                name="cross"
                color="#52057B"
                size={70}
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{justifyContent: 'center', flex: 1}}>
            <Icon
              name="images"
              color="#52057B"
              size={70}
              style={{alignSelf: 'center'}}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
                color: '#52057B',
              }}>
              Please Upload an Image
            </Text>
          </View>
        )}
      </View>
      <View style={{flex: 2}}>
        {!imageValue ? (
          <TouchableOpacity
            style={{
              backgroundColor: '#52057B',
              paddingTop: '2%',
              paddingBottom: '2%',
              borderRadius: 5,
              marginBottom: '4%',
            }}
            onPress={() => {
              openCam();
            }}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
              Click Image
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: '#52057B',
              paddingTop: '2%',
              paddingBottom: '2%',
              borderRadius: 5,
              marginBottom: '4%',
            }}
            onPress={() => {
              navigation.navigate('SendScreen')
            }}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
              Send
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ImagePick;
