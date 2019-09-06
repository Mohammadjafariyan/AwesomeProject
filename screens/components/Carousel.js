import Carousel from 'react-native-snap-carousel';
import React, {Component} from "react";
import { Dimensions ,Image, Text, View}from "react-native";
import StyleSheet from "react-native-web/dist/exports/StyleSheet";
import { SliderBox } from 'react-native-image-slider-box';



const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(viewportWidth);
}

const itemHorizontalMargin=wp(2);



export class MyCarousel extends Component {

    constructor(p){
        super(p);
        this.state = {
            images: [
               require("../../assets/images/homeSliderImages/aggriculture_tractor.jpg"),
                require('../../assets/images/homeSliderImages/industrialCity.png'),
                require('../../assets/images/homeSliderImages/industrialCity3.png')

            ]
        };
    }

    _renderItem({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}> {item.title}</Text>
               <Image style={{ borderTopRightRadius: 10,
                   borderTopLeftRadius: 10,
                   borderBottomRightRadius: 10,
                   borderBottomLeftRadius: 10,
                   margin: 50,
                   shadowColor: "#000",
                   shadowOffset: {
                       width: 0,
                       height: 3
                   },
                   shadowOpacity: 0.27,
                   shadowRadius: 4.65,

                   elevation: 'display',resizeMode:'stretch'}} source={item.image}/>
            </View>
        );
    }

    render() {
        return(
            <View style={{backgroundColor:'red'}}>

        <SliderBox images={this.state.images} />
            </View>
        );
    }
}

export const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        image: require('../../assets/images/homeSliderImages/aggriculture_tractor.jpg')
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        image: require('../../assets/images/homeSliderImages/industrialCity.png')
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        image: require('../../assets/images/homeSliderImages/industrialCity2.png')
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        image: require('../../assets/images/homeSliderImages/industrialCity3.png')
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        image: require('../../assets/images/homeSliderImages/tractor.jpg')
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        image: require('../../assets/images/homeSliderImages/industrial_city4.gif')
    }
];


const styles = StyleSheet.create({
    slide: {
flex:1,
    }, title: {},

});