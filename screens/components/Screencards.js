import React, { Component } from "react";
import { Avatar } from "react-native-elements";
import { Text, View } from "react-native";
import { Dimensions,StyleSheet } from "react-native";


const cardWidth = Dimensions.get("window").width / 3;

export class Card extends React.Component {
  render() {
    return (
      <View style={this.styles.container}>
       
        {/* view2 */}
        <View style={[this.styles.avatarView]}>
          <Avatar
            size="xlarge"
            rounded
            icon={{ name: this.props.icon, type: "material" }}
          />
        </View>
        {/* view1 */}
        <View style={[this.styles.textView]}>


            <Text style={this.styles.title}>
                {this.props.title}
            </Text>

            <Text style={this.styles.description}  >
                {this.props.desc}
            </Text>


        </View>


      
      </View>
    );
  }

    styles = StyleSheet.create({
        container: {
            flexDirection: 'row-reverse',
            backgroundColor: "white",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            margin: 10,
            paddingRight: "5%",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            borderRightWidth:10,
            borderRightColor :this.props.bgcolor,
            elevation: 6
        },
        textView: {
            flexDirection: 'column',
            padding: "5%",

        },
        avatarView: {
            padding:'5%',
            borderLeftWidth:1,
            borderLeftColor:'#ffb25f',
        },
        description:{

            flexWrap:'wrap',
            flex:5,
        },
        title:{
            flex:1,

        }
    });
}


