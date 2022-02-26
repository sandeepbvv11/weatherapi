import React, { useState } from 'react';
import { AppRegistry, View,FlatList, Image, StyleSheet,Button, ActivityIndicator, Alert,Text } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
export default function AddItem({navigation}){
    const [name, setName] = useState('');
    const [src,setSrc]=useState([]);
    const [status, setStatus] = useState({});
   function handleChange(e){
        
        setName(e.nativeEvent.text);
        
    }
   function handleSubmit(){
       let ret=name.split(" ");
       let retv='';
       let i=0;
       for(i=0;i<ret.length;i++){
            retv+=ret[i]+',';
       }
       console.log("searchstring"+retv);
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+retv+'&appid=859c99c090c906e7e10cd8ace25122e4')
    .then((response)=>response.json())
      .then((s)=>{
          console.log("length"+s.list.length);
          setSrc(s.list);
          setStatus(s.city.coord);
          console.log("Status"+status);
      })
      
        
    }
    
   function renderItem({item}){
        return(
            <View style={styles.row}>
                <Text style={styles.text}>{item.dt_txt}</Text>
            <View style={styles.subrow}>    
                <Image
           
            source={{
              uri:
                "https://openweathermap.org/img/wn/"+item.weather[0].icon+"@2x.png",
            }}
            style={{ width: 150, height: 150 }}
          />
          <Text style={[styles.subtext]}>{item.weather[0].description}</Text>
          </View>
          <Button
        title="Go to ListItem"
        onPress={() => navigation.navigate('ListItem',{icon:item.weather[0].icon,coord:status})}
      />
            </View>
        );
    }
    return (
        <View style={styles.main}>
                <Text style={styles.title}>Search Place</Text>
                <TextInput style={styles.itemInput} onChange={handleChange}/>
                <TouchableHighlight
                 style={styles.button}
                 onPress={handleSubmit}
                 >
                     <Text style={styles.title}>Search</Text>
                 </TouchableHighlight>
                 
      <FlatList style={styles.container}
            data={src}
            renderItem={renderItem}
            keyExtractor={item=>item.dt}
            
            />
          

         </View>        
      ); 
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        padding:30,
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#e2ecf0'
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
        color:'black'
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
    },
    row: {
        borderRadius: 15,
        backgroundColor: '#ecc9b8',
        marginBottom: 20,
        overflow: 'hidden',
    },
    subrow:{
        flexDirection:'row',          
        
    },
    text:{
        fontSize:18,
        textAlign:'left',
        paddingLeft:5,
        backgroundColor:'#a76bc9',
    }, 
    subtext:{
        fontSize:30,
        textAlign:'center',
        width:150,
        height:150,
        paddingTop:40,
        fontWeight:'100'
    }
    
});