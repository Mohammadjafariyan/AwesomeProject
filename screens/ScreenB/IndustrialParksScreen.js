import React from "react";
import {Text, View} from "react-native-animatable";
import AnimateHome from "../home/AnimateHome";
import {Dimensions,Animated, StyleSheet, ScrollView} from "react-native";
import {Avatar, Icon} from "react-native-elements";
import {TouchableHighlight, TouchableOpacity} from "react-native-gesture-handler";
import NavigationBar from "../components/Navigation";
import {Card} from "../components/Screencards";
import {MyCarousel} from "../components/Carousel";


const cardWidth = Dimensions.get("window").width / 3;
const cardshapeWidth = (2 * cardWidth) / 3;


export default class IndustrialParksScreen extends React.Component {
    rendermine() {
    }

    componentDidMount() {
        this.state={
            toggleSliderAnimate:new Animated.Value(1),
            toggleOtherItems:new Animated.Value(1),
            

        }
    }

    tabs = [
        {
            key: 'games',
            icon: 'business',
            label: 'شهرک های صنعتی',
            barColor: '#2aebf5',
            pressColor: 'rgba(255,255,255,0.16)'
        },
        {
            key: 'games2',
            icon: 'location-city',
            label: 'صنعت',
            barColor: '#96f52a',
            pressColor: 'rgba(255,255,255,0.16)'
        }, {
            key: 'games3',
            icon: 'web',
            label: 'کارخانجات مستقر',
            barColor: '#f52a8f',
            pressColor: 'rgba(255,255,255,0.16)'
        }
    ]

    goSanatScreen() {
        this.props.navigation.navigate('IndustrialParksScreen')
    }


    render() {
        this.arr = [
            'آذربایجان شرقی', 'آذربایجان غربی',
            'اردبیل', 'قزوین',
            'تهران', 'گیلان',
            'مازندران', 'گلستان',
            'خراسان شمالی', 'خراسان رضوی',
            'خراسان جنوبی', 'فارس',
            'اصفهان', 'کردستان', 'قم', 'سیستان و بلوچستان',
            'زاهدان', 'زنجان',


        ];
        for (let i = 0; i < 32; i++) {
            this.arr.push(i);
        }
        const items = this.arr.map((a, i) => {
            return (

                <TouchableOpacity key={i}>
                    <Animated.View style={styles.listItem} key={i}>
                        <Icon name='alarm' color={'#C6C6C6'}/>
                        <Text>{a}</Text>
                    </Animated.View>
                </TouchableOpacity>
            );
        });
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <View style={{flex: 1}}>
                    <View style={styles.carousel}>
                        <MyCarousel/>
                    </View>
                    <View style={styles.listbody}>

                        <ScrollView>
                            {items}
                        </ScrollView>
                    </View>
                </View>
                <View style={{height: 60}}>
                    <NavigationBar tabs={this.tabs}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        backgroundColor: "#f6b33f",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        margin: 10,
        alignItems: "center",
        paddingRight: "5%",
        paddingTop: "5%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6
    },
    listbody: {
        flex: 3,

        justifyContent: 'space-around'
    },
    listItem: {
        height: 50,
        backgroundColor: "#fcfcfc",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        margin: 10,
        alignItems: "center",
        flexDirection: 'row-reverse',
        marginRight: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 3
    },

    color1: {
        borderRightColor: "#2aebf5"
    },
    color2: {
        borderRightColor: "#96f52a"
    },
    color3: {
        borderRightColor: "#f52a8f"
    },
    cards: {},
    bottomNavigationBar: {
        height: 200,
        backgroundColor: '#f52a8f',
    }
});