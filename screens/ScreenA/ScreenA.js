import React from "react";
import {Text, View} from "react-native-animatable";
import AnimateHome from "../home/AnimateHome";
import { Dimensions } from 'react-native'
import StyleSheet from "react-native-web/dist/exports/StyleSheet";
import { Avatar } from "react-native-elements";

const cardWidth=Dimensions.get('window').width/3;
const cardshapeWidth=2*cardWidth/3;
var createReactClass = require('create-react-class');

const styles = StyleSheet.create({  
   card:{
    backgroundColor:'white',height:cardWidth
    ,borderTopRightRadius:10,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    margin:10,
    alignItems:'flex-end',
    paddingRight:'5%',
    paddingTop:'5%',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
   },
   eightPointBurst: {
   },
  eightPointBurst20: {
    width: cardshapeWidth, 
    height: cardshapeWidth,
    alignItems:'center',
    justifyContent:'center',
    transform: [
      {rotate: '20deg'}
    ]
  },
  eightPointBurst155: {
    width: cardshapeWidth, 
    height: cardshapeWidth,
    position: 'absolute',
    justifyContent:'center',
    alignItems:'center',
    top: 0,
    left: 0,
    transform: [
      {rotate: '155deg'}
    ]
  },
  color1:{
    backgroundColor: '#2aebf5',
  },
  color2:{
    backgroundColor: '#96f52a',
  },
  color3:{
    backgroundColor: '#f52a8f',
  }
  });

 class EightPointBurst extends React.Component {



    render() {
        return (
          <View style={styles.eightPointBurst}>
            <View style={[styles.eightPointBurst20,this.props.bgcolor]} >
            

            </View>
            <View style={[styles.eightPointBurst155,this.props.bgcolor]} >
            <Avatar
                        size="xlarge"
                        rounded
                        icon={{name: this.props.icon, type: 'font-awesome'}}
                    /> 
            </View>
          </View>   
        )
      }

}
  


export default class ScreenA extends React.Component {

    rendermine(){

    }

    render() {
        return (
            <View style={{ flex: 1,justifyContent:'space-between'
            , flexDirection: 'column', }}   >
                <View style={styles.card}>
                <View></View>
                
                   <EightPointBurst bgcolor={styles.color1} icon='home'/>
                </View>
                <View style={styles.card}>
                <EightPointBurst bgcolor={styles.color2}  icon='building'/>
                </View>
                <View style={styles.card}>
                <EightPointBurst bgcolor={styles.color3}  icon='home'/>
                </View>


            </View>
        );
    }
}