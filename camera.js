import { View, Text, Button,StatusBar, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import {useCameraDevices, Camera } from 'react-native-vision-camera';
import { request,PERMISSIONS } from 'react-native-permissions'
import { useState } from 'react';
const camera = () => {

   request(PERMISSIONS.ANDROID.CAMERA).then(e => console.log(e) )
  

  const devices =  useCameraDevices();
  console.log(devices[0])
  const [CameraState, setCameraState] = useState(true);
  const [CameraPosition,setCameraPosition] = useState(devices[0]);
  return (
    <View style={{flex:1}}>


    <Camera device={CameraPosition} isActive={CameraState} style={{flex:1}} />
  
      <Pressable style={{width:70,height:70,backgroundColor:'white',position:'absolute',bottom:90,alignSelf:'center',borderRadius:75,borderColor:'black',borderWidth:6}} title='click' onPress={()=> CameraState?setCameraState(false):setCameraState(true)}/>
  <Button title='switch camera' onPress={()=> CameraPosition==devices[0]?setCameraPosition(devices[1]):setCameraPosition(devices[0])  }/>
    </View>

  )
}

export default camera;