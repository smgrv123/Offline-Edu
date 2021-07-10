/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Button, Text} from './styles.js';
import {Image} from 'react-native';
// import downloadManager from 'react-native-simple-download-manager';

export default function ConvertedImage({route}) {
  const {text} = route.params;

  // const url =
  //   'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.9ZvAvUtuLbwQyGQxnKmxOgHaHa%26pid%3DApi&f=1';
  // const headers = {Authorization: 'Bearer abcsdsjkdjskjdkskjd'};
  // const config = {
  //   downloadTitle: 'Title that should appear in Native Download manager',
  //   downloadDescription:
  //     'Description that should appear in Native Download manager',
  //   saveAsName: 'File name to save',
  //   allowedInRoaming: true,
  //   allowedInMetered: true,
  //   showInDownloads: true,
  //   external: false, //when false basically means use the default Download path (version ^1.3)
  //   path: 'Download/', //if "external" is true then use this path (version ^1.3)
  // };

  return (
    <View>
      <Image
        source={{
          uri: `data:image/png;base64,${text}`,
        }}
        style={{height: 200, width: 150, alignSelf: 'center'}}
      />
      {/* <Button
        title="Download"
        onPress={() =>
          downloadManager
            .download(url, headers, config)
            .then(response => {
              console.log('Download success!', response);
            })
            .catch(err => {
              console.log('Download failed!', err);
            })
        }>
        <Text>Download Image</Text>
      </Button> */}
    </View>
  );
}
