import React, { Component,useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, TextInput, StatusBar,Button,Text,Dimensions, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import MapView,{ Marker,Callout,CalloutSubview } from 'react-native-maps';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };
export default class MapComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            region:{
                latitude:50.2196449,
                latitudeDelta:LATITUDE_DELTA,
                longitude:77.9297786,
                longitudeDelta:LONGITUDE_DELTA,
            },
            text:"",
	    l1:50.2196449,
        l2:77.9297786,
        
        };
        this.onRegionChange=this.onRegionChange.bind(this);
    }

    onRegionChange(region){
        console.log("Sent data"+this.props.icon+"-"+this.props.coord);
        console.log(region);
        this.setState({
            region
        });
    }
    animate(){
        let r = {
            latitude: Number(this.props.coord.lat),
            longitude: Number(this.props.coord.lon),
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        };
        this.mapView.animateToRegion(this.state.region, 2000);
        console.log("Animate"+this.state.l1+"-"+this.state.l2);
    }
    fitPadding() {
        this.mapView.fitToCoordinates([{latitude:this.state.l1,longitude:this.state.l2}, {latitude:this.state.l3,longitude:this.state.l4}], {
          edgePadding: DEFAULT_PADDING,
          animated: true,
        });
      }
      
    render(){
        return(
	   
            <View style={styles.container}>
        <MapView 
        region={this.state.region}
        onRegionChangeComplete={this.onRegionChange}
         ref = {(ref)=>this.mapView=ref}
       style={styles.map}
       onPress={()=>this.animate()}
       onMarkerDeselect={()=>{console.log("Marker deselect event")}}
       >
       
   <Marker coordinate={{ latitude: Number(this.props.coord.lat), longitude: Number(this.props.coord.lon) }}  
   image={{uri: "https://openweathermap.org/img/wn/"+this.props.icon+"@2x.png"}}
   >
            
   </Marker>
   
   

</MapView>
        <View style={styles.buttonContainer}>
           
         <TouchableOpacity
         style={[styles.bubble, styles.button]}
         onPress={() => {
             this.setState({l1:Number(this.props.coord.lat),l2:Number(this.props.coord.lon)});this.onRegionChange({
                latitude:Number(this.props.coord.lat),
                latitudeDelta:LATITUDE_DELTA,
                longitude:Number(this.props.coord.lon),
                longitudeDelta:LONGITUDE_DELTA,
            });
               console.log("change"+this.state.l1+""+this.state.l2+"-r"+this.state.region);
               this.animate();}}
      >
          <Text>Mark Location on map</Text>
      </TouchableOpacity>
      
        </View>
    </View>
		
		
	    
        );
    }
}
const styles = StyleSheet.create({
    container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#F5FCFF',
        },
        map: {
            flex: 1,
        },
        inputView: {
            backgroundColor: 'rgba(0,0,0,0)',
            position: 'absolute', 
            top: 0,
            left: 5,
            right: 5
        },
        input: {
            height: 36,
            padding: 10,
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
            fontSize: 18,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#48BBEC',
            backgroundColor: 'white',
        },
        plainView: {
            width: 60,
        },
        bubble: {
            backgroundColor: 'rgba(255,255,255,0.7)',
            paddingHorizontal: 18,
            paddingVertical: 12,
            borderRadius: 20,
          },
          button: {
            marginTop: 12,
            paddingHorizontal: 12,
            alignItems: 'center',
            marginHorizontal: 10,
          },
          buttonContainer: {
            flexDirection: 'column',
            marginVertical: 20,
            backgroundColor: 'transparent',
          },
  });
