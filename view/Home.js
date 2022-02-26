import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Button,StyleSheet, Text, View,Image,Dimensions, ImageBackground } from 'react-native';
import AddItem from './AddItem';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
const screen = Dimensions.get("screen");
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
    <ImageBackground
        source={{
              uri:
                "https://tinyurl.com/earthimageurl",
            }}
            style={styles.backgroundImage}
          >
      <Text style={styles.maintitle}>Welcome to the weather app </Text>
      <Text style={styles.maintext}>A place where you can get forecast for 5 days with every 3 hours from the current date</Text>
      <StatusBar style="auto" />
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate('AddItem')}
      >
        <Text style={styles.title}>Click to Search Location</Text>
      </TouchableHighlight>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    height:40,
    flexDirection:'row',
    backgroundColor:'#dbc6a9',
    borderColor:'black',
    borderWidth:3,
    borderRadius:6,
    marginBottom:5,
    marginTop:5,
    alignSelf:'stretch',
    justifyContent:'center'
},
maintitle:{
  fontWeight:'100',
  fontSize:22,
  textAlign:'left',
  color:'black',
  
},
maintext:{
  fontSize:18,
  textAlign:'center',
  color:'black'
},
title:{
  fontSize:24,
  textAlign:'center',
  color:'black'
},
text:{
  color:'white'
},
backgroundImage:{
  flex: 1,
  width: '100%',
  height: '100%',
  justifyContent: "center",
  alignItems: "center",
  
},
});