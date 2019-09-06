import React, {Component} from 'react';
import {Animated, View,Image} from "react-native";
import * as Animatable from 'react-native-animatable';
import {Avatar, Button, Icon} from "react-native-elements";
import {getRandom} from "../components/shared";

//var Spinner = require('react-spinkit');

const Homegifs=[
    require('../../assets/images/homeSliderImages/anim_airplane.gif'),
    require('../../assets/images/homeSliderImages/anim_builb.gif'),
    require('../../assets/images/homeSliderImages/anim_car.gif'),
    require('../../assets/images/homeSliderImages/anim_cirle_load.gif'),
    require('../../assets/images/homeSliderImages/anim_hobab.gif'),
    require('../../assets/images/homeSliderImages/anim_hobab2.gif'),
    require('../../assets/images/homeSliderImages/anim_many_icon.gif'),
]

export default class HomeScreen extends Component {

    navigate(){
        this.props.navigation.navigate('ScreenA')
    }

    render() {

        const leng=Homegifs.length;
        const gif=  require('../../assets/images/homeSliderImages/anim_many_icon.gif');

        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Avatar
                        size="xlarge"
                        rounded
                        icon={{name: 'building', type: 'font-awesome'}}
                    />
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Button

                        onPress={() => {
                            this.navigate()
                        }}
                        raised={true}
                        type="outline"
                        title="شروع برنامه"
                    />

                </View>

                <View style={{
                    flex: 1, alignItems: 'center',
                }}>
                   <Animatable.Text animation="slideInDown" iterationCount="infinite" direction="alternate"
                                     style={{ color: 'white'}}>جهت شروع برنامه لمس نمایید</Animatable.Text>

                    <Image
                        style={{...this.props.style ,resizeMode:'contain',
                            opacity:0.5,flex:1}}
                        source={gif}
                    >
                    </Image>
                    {/* <Spinner color="white" name="ball-scale-multiple"/> */}


                </View>
            </View>


        );

    }
}