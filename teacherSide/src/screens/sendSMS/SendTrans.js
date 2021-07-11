import React, {useState, useEffect} from 'react';
import SendSMS from 'react-native-sms';
import {View, Text, TouchableOpacity} from 'react-native';

const SendTrans = ({route}) => {
    const {contact,tran}=route.params
    console.log("tran",tran);
    const sendSMS = () => {
        console.log('yes');
        SendSMS.send(
          {
            body: tran,
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
    <View style={{flex:1,backgroundColor:"#000",justifyContent:"center"}}>
      <Text style={{textAlign:'center',color:"#52057B",fontSize:40}} >
          Loading...
      </Text>
    </View>
  );
};

export default SendTrans;
