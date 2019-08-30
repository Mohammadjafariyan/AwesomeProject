import React, {Component} from 'react';
import {View} from "react-native";
import * as Animatable from 'react-native-animatable';
import {Avatar, Button, Icon} from "react-native-elements";

var Spinner = require('react-spinkit');


export default class HomeScreen extends Component {

    navigate(){
        this.props.navigation.navigate('ScreenA')
    }

    render() {
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
                    flexDirection: 'center',
                    alignItems: 'center',
                }}>
                    <Button

                        onPress={() => {
                            this.navigate()
                        }}
                        raised="true"
                        type="outline"
                        title="شروع برنامه"
                    />

                </View>

                <View style={{
                    flex: 1, alignItems: 'center',
                }}>
                   <Animatable.Text animation="slideInDown" iterationCount="infinite" direction="alternate"
                                     style={{ color: 'white'}}>جهت شروع برنامه لمس نمایید</Animatable.Text>

                    <Spinner color="white" name="ball-scale-multiple"/>


                </View>
            </View>


        );

    }
}