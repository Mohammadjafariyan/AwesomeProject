import {StyleSheet, Text, View, Animated} from "react-native";
import React, {Component} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Image from "react-native-web/dist/exports/Image";
import Easing from "react-native-web/dist/vendor/react-native/Animated/Easing";
import HomeScreen from "./HomeScreen";


export default class AnimateHome extends Component {
    constructor() {
        super();
        this.state = {
            showIntroImage: true,
            fadeoutIntroImage: new Animated.Value(1)
        };
        this.styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#',
                backgroundImage: 'linear-gradient(to right top, #1bdcdc, #00bef4, #009bff, #006eff, #3812eb)',
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
                opacity: this.state.fadeoutIntroImage

            }
        })

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
        });
    }

    componentWillUnmount() {
        //  this.clearInterval(this.state.showIntroImage);
    }



    render() {


        return (

            <LinearGradient
                colors={['#384dff', '#1BDCDC']}
                style={{width: '100%', height: '100%'}}>

                {this.state.showIntroImage &&
                <Animated.Image
                    style={this.styles.image}
                    source={require('../../assets/images/barreirofreddy_tv_machine2.gif')}
                >
                </Animated.Image>
                }

                {!this.state.showIntroImage &&
                <HomeScreen/>
                }
            </LinearGradient>
        );
    }
}
;