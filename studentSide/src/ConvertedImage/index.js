/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from './styles.js';
import {Image} from 'react-native';
// import downloadManager from 'react-native-simple-download-manager';

export default function ConvertedImage({route}) {
  const {text} = route.params;

  return (
    <View>
      <Image
        source={{
          uri: `data:image/png;base64,${text}`,
        }}
        style={{height: 200, width: 150, alignSelf: 'center'}}
      />
    </View>
  );
}
