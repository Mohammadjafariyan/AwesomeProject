import { createStackNavigator, createAppContainer } from "react-navigation";

import AnimateHome from "./home/AnimateHome";
import React from "react";
import {View} from "react-native-animatable";
import { fromLeft, zoomIn, zoomOut } from 'react-navigation-transitions'
import ScreenA from "./ScreenA/ScreenA";
import HomeScreen from "./home/HomeScreen";

const handleCustomTransition = ({ scenes }) => {
    const prevScene = scenes[scenes.length - 2];
    const nextScene = scenes[scenes.length - 1];

   /* // Custom transitions go there
    if (prevScene
        && prevScene.route.routeName === 'Home'
        ) {
        return zoomIn();
    } else if (prevScene
        && prevScene.route.routeName === 'ScreenB'
        && nextScene.route.routeName === 'ScreenC') {
        return zoomOut();
    }*/
    return fromLeft();
}



class AppStartScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    rendermine(){

    }

    render() {
        return (
            <View style={{ flex: 1  }}   >
                <AnimateHome navigation={this.props.navigation}/>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        StartScreen: AppStartScreen,
        AnimateHomeScreen: AnimateHome,
        HomeScreen: HomeScreen,
        ScreenA:ScreenA
    },
    {
        initialRouteName: "StartScreen",
        transitionConfig: (nav) => handleCustomTransition(nav)
    }
);


export default createAppContainer(AppNavigator);