import Carousel from 'react-native-snap-carousel';
import React, {Component} from "react";
import { Dimensions }from "react-native";
import {Image, Text, View} from "react-native-animatable";
import StyleSheet from "react-native-web/dist/exports/StyleSheet";

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(viewportWidth);
}

const itemHorizontalMargin=wp(2);



export class MyCarousel extends Component {

    _renderItem({item, index}) {
        return (
            <View style={styles.slide}>
                {/*<Text style={styles.title}> {item.title}</Text>*/}
               <Image style={{resizeMode:'cover'}} source={require('../../assets/images/1186294-mass-production.png')}/>
            </View>
        );
    }

    render() {
        return (
            <Carousel
                ref={(c) => {
                    this._carousel = c;
                }}

                layout={'stack'}
                data={ENTRIES1}
                renderItem={this._renderItem}
                sliderWidth={viewportWidth}
                itemWidth={viewportWidth}
            />
        );
    }
}

export const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        image: '../../assets/images/barreirofreddy_tv_machine.gif'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        image: '../../assets/images/1186294-mass-production.png'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        image: '../../assets/images/barreirofreddy_tv_machine.gif'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        image: '../../assets/images/barreirofreddy_tv_machine.gif'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        image: '../../assets/images/barreirofreddy_tv_machine.gif'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        image: '../../assets/images/barreirofreddy_tv_machine.gif'
    }
];


const styles = StyleSheet.create({
    slide: {}, title: {}
});