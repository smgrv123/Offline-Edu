import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Entypo';

const ImagePick = () => {
  const [imageValue, setimageValue] = useState();
  const picker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

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
          <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
            Click Image
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#52057B',
            paddingTop: '2%',
            paddingBottom: '2%',
            borderRadius: 5,
            marginBottom: '4%',
          }}
          onPress={() => {
            picker();
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
            Upload Image
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImagePick;
