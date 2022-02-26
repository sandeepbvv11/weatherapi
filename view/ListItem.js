import React, { useState,useEffect } from 'react';
import { AppRegistry, View,FlatList, Image, StyleSheet,Button, ActivityIndicator, Alert,Text } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import ChallengeMapComponent from './ChallengeMapComponent';
export default function ListItem({route,navigation}){
    const {icon}=route.params
    const {coord}=route.params


   
    
   
    return (
        <View style={styles.main}>
                <Text style={styles.title}>List Item</Text>
                <ChallengeMapComponent icon={icon} coord={coord}/>
               
                
         </View>        
      ); 
}

const styles=StyleSheet.create({
    main:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#ff0000',
        ...StyleSheet.absoluteFillObject
    },
    title:{
        fontSize:24,
        textAlign:'center'
    },
    itemInput:{
        height:50,
        padding:4,
        marginTop:10,
        marginRight:5,
        fontSize:23,
        borderWidth:1,
        borderColor:'white',
        borderRadius:8,
        color:'white'
    },
    button:{
        height:40,
        flexDirection:'row',
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:3,
        borderRadius:6,
        marginBottom:5,
        marginTop:5,
        alignSelf:'stretch',
        justifyContent:'center'
    }
});


