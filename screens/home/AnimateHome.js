import {StyleSheet, Text, View, Animated} from "react-native";
import React, {Component} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Image from "react-native-web/dist/exports/Image";
import Easing from "react-native-web/dist/vendor/react-native/Animated/Easing";
import HomeScreen from "./HomeScreen";


export default class stylAnimateHome extends Component {
    constructor() {
        super();
        this.state = {
            showIntroImage: true,
            fadeoutIntroImage: new Animated.Value(1)
        };

       

    }


    componentDidMount() {
        /* setTimeout(()=>{

             this.setState({showIntroImage:false});

  

         },1800);*/ 
        Animated.timing(                  // Animate over time
            this.state.fadeoutIntroImage,            // The animated value to drive
            {
                toValue: 0,                   // Animate to opacity: 1 (opaque)
                duration: 2800,
            }
        ).start(()=>{
            this.setState({showIntroImage:false})
            this.styles = StyleSheet.create({
                container: {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                image: { 
                    flex: 1,
                    // remove width and height to override fixed static size
                    width: null,
                    height: null,
                    resizeMode: 'cover', // or 'stretch'
                    alignSelf: 'stretch', 
    
                }
            })
        });

        
    }

    componentWillUnmount() {
        //  this.clearInterval(this.state.showIntroImage);
    }



    render() {
             
        let {fadeoutIntroImage} =this.state;

        return (

            <LinearGradient
                colors={['#384dff', '#1BDCDC']}
                style={{flex:1,justifyContent:'center', height: '100%'}}>

                {this.state.showIntroImage &&
                <Animated.Image
                    style={{...this.props.style , opacity:fadeoutIntroImage
                    ,resizeMode:'cover',flex:1}} 
                    source={require('../../assets/images/barreirofreddy_tv_machine2.gif')}
                >
                </Animated.Image>
                }

                {!this.state.showIntroImage &&
                <HomeScreen navigation={this.props.navigation}/>
                }
            </LinearGradient>
        );
    } 
}
;