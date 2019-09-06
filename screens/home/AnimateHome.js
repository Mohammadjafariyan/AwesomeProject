import {StyleSheet, Text, View, Animated,TouchableOpacity} from "react-native";
import React, {Component} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Image from "react-native-web/dist/exports/Image";
import Easing from "react-native-web/dist/vendor/react-native/Animated/Easing";
import HomeScreen from "./HomeScreen";
import {getRandom} from "../components/shared";

export const gifs=[
        require('../../assets/images/barreirofreddy_tv_machine2.gif'),
        require('../../assets/images/homeSliderImages/anim_airplane.gif'),
        require('../../assets/images/homeSliderImages/anim_barq.gif'),
        require('../../assets/images/homeSliderImages/anim_builb.gif'),
        require('../../assets/images/homeSliderImages/anim_car.gif'),
        require('../../assets/images/homeSliderImages/anim_cirle_load.gif'),
        require('../../assets/images/homeSliderImages/anim_cloud_walk.gif'),
        require('../../assets/images/homeSliderImages/anim_hobab.gif'),
        require('../../assets/images/homeSliderImages/anim_hobab2.gif'),
        require('../../assets/images/homeSliderImages/anim_loading_normal.gif'),
        require('../../assets/images/homeSliderImages/anim_mostatil.gif'),
        require('../../assets/images/homeSliderImages/anim_many_icon.gif'),
    ]

export default class AnimateHome extends Component {
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





    render() {

        const gif= gifs[getRandom(0,gifs.length)];

             
        let {fadeoutIntroImage} =this.state;

        return (


            <LinearGradient
                colors={['#1BDCDC','#4659DF','#4659DF']}
                style={{flex:1,alignItems:'center' ,justifyContent:'center', height: '100%'}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ScreenA')}}>

                {this.state.showIntroImage &&
                <Animated.Image
                    style={{...this.props.style , opacity:fadeoutIntroImage
                    ,resizeMode:'contain',flex:1}}
                    source={gif}
                >
                </Animated.Image>
                }

                {!this.state.showIntroImage &&
                <HomeScreen navigation={this.props.navigation}/>
                }
                </TouchableOpacity>
            </LinearGradient>
        );
    } 
}
;