import React, {useState, useEffect} from 'react';
import SendSMS from 'react-native-sms';
import {View, Text, TouchableOpacity} from 'react-native';

const SendTrans = ({route}) => {
    const {contact,tranArr}=route.params
    const sendSMS = () => {
        console.log('yes');
        SendSMS.send(
          {
            body: tranArr,
            recipients: contact,
            successTypes: ['sent', 'queued'],
          },
          (completed, cancelled, error) => {
            if (completed) {
              console.log('SMS Sent Completed');
            } else if (cancelled) {
              console.log('SMS Sent Cancelled');
            } else if (error) {
              console.log('Some error occured', error);
            }
          },
        );
      };

      setTimeout(() => {
          sendSMS()
      }, 1000);

  return (
    <View>
      <Text>uwef</Text>
    </View>
  );
};

export default SendTrans;
