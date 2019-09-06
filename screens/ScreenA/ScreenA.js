import React from "react";
import { Text, View } from "react-native-animatable";
import AnimateHome from "../home/AnimateHome";
import { Dimensions } from "react-native";
import StyleSheet from "react-native-web/dist/exports/StyleSheet";
import { Avatar } from "react-native-elements";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import NavigationBar from "../components/Navigation";
import { Card } from "../components/Screencards";


const cardWidth = Dimensions.get("window").width / 3;
const cardshapeWidth = (2 * cardWidth) / 3;
var createReactClass = require("create-react-class");



export default class ScreenA extends React.Component {
  rendermine() {}


  tabs=[
    {
      key:'games',
      icon:'movie',
      label:'نیازمندی ها',
      barColor:'#2aebf5',
      pressColor:'rgba(255,255,255,0.16)'
    },
    {
      key:'games2',
      icon:'movie',
      label:'نیازمندی ها',
      barColor:'#96f52a',
      pressColor:'rgba(255,255,255,0.16)'
    }, {
      key:'games3',
      icon:'movie',
      label:'نیازمندی ها',
      barColor:'#f52a8f',
      pressColor:'rgba(255,255,255,0.16)'
    }
  ]

  goSanatScreen(){
    this.props.navigation.navigate('IndustrialParksScreen')
  }

  render() {
    return ( 
      <View
        style={{
          justifyContent:'flex-end',
          flex:1
        }}
      >
        <View style={{flex: 1,
          justifyContent:'space-around' }}>
         <View style={styles.card}>
            <TouchableOpacity  onPress={()=>{this.goSanatScreen()}}>
              <Card bgcolor='#2aebf5' title='صنعت' desc="در این مکان توضیحاتی در باره این قسمت داده می شود"
                    icon="home" />
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <TouchableOpacity  onPress={this.goSanatScreen}>
              <Card bgcolor='#96f52a' title='کارگاه ها' desc="در این مکان توضیحاتی در باره این قسمت داده می شود"
                    icon="keyboard" />
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <TouchableOpacity  onPress={this.goSanatScreen}>
              <Card bgcolor='#f52a8f' title='نمایشگاه ها' desc="در این مکان توضیحاتی در باره این قسمت داده می شود"
                    icon="computer" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height:60}}>
          <NavigationBar tabs={this.tabs}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        height: cardWidth,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        margin: 10,
        alignItems: "flex-end",
        paddingRight: "5%",
        paddingTop: "5%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6
    },
    eightPointBurst: {},
    eightPointBurst20: {
        width: cardshapeWidth,
        height: cardshapeWidth,
        alignItems: "center",
        justifyContent: "center",
        transform: [{ rotate: "20deg" }]
    },
    eightPointBurst155: {
        width: cardshapeWidth,
        height: cardshapeWidth,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        transform: [{ rotate: "155deg" }]
    },
    color1: {
        borderRightColor: "#2aebf5"
    },
    color2: {
        borderRightColor: "#96f52a"
    },
    color3: {
        borderRightColor: "#f52a8f"
    },
    cards: {

    },
    bottomNavigationBar: {
        height: 200,
        backgroundColor:'#f52a8f',
    }
});