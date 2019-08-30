import { createStackNavigator, createAppContainer } from "react-navigation";

import AnimateHome from "./home/AnimateHome";
import React from "react";
import {View} from "react-native-animatable";

class AppStartScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    rendermine(){

    }

    render() {
        return (
            <View style={{ flex: 1,height:100  }}   >
                <AnimateHome/>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: AppStartScreen,
    },
    {
        initialRouteName: "Home"
    }
);


export default createAppContainer(AppNavigator);