
import React from "react";
import {Text, View} from "react-native-animatable";
import AnimateHome from "../home/AnimateHome";
<<<<<<< Updated upstream



export default class IndustrialParksScreen extends React.Component {

    rendermine(){
=======
import {Dimensions, Animated, StyleSheet, ScrollView, Image, TouchableOpacity, BackHandler} from "react-native";
import {Avatar, Icon} from "react-native-elements";
import NavigationBar, {EveryNavigationBar} from "../components/Navigation";
import {Card} from "../components/Screencards";
import {MyCarousel} from "../components/Carousel";


const cardWidth = Dimensions.get("window").width / 3;
const cardshapeWidth = (2 * cardWidth) / 3;
import {HeaderBackButton} from 'react-navigation';
import {getRandom} from "../components/shared";


const imagearr = [
    require('../../assets/images/homeSliderImages/tractor.jpg'),
    require('../../assets/images/homeSliderImages/industrial_city4.gif'),
    require('../../assets/images/homeSliderImages/industrialCity3.png'),
    require('../../assets/images/homeSliderImages/industrialCity2.png'),
    require('../../assets/images/homeSliderImages/industrialCity.png'),
    require('../../assets/images/homeSliderImages/aggriculture_tractor.jpg'),
    require('../../assets/images/homeSliderImages/b.33817-8603_factory_futura_park.jpg'),
    require('../../assets/images/homeSliderImages/Exhibition1.jpg'),
    require('../../assets/images/homeSliderImages/plexus1.gif'),
];


export default class IndustrialParksScreen extends React.Component {
    rendermine() {
    }
    static navigationOptions =(props) => ( {
        headerRight: (
            <EveryNavigationBar  navigation={props.navigation}/>
        ),
    });


    constructor(props) {
        super(props);
        this.state = {
            toggleSliderAnimate: new Animated.Value(1),
            toggleOtherItems: new Animated.Value(1),
            isOnItemVisible: false,
            selectedItem: null,
            subItems: []
        }

        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    }


    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    resetOneItem() {

        Animated.timing(                  // Animate over time
            this.state.toggleSliderAnimate,            // The animated value to drive
            {
                toValue: 1,                   // Animate to opacity: 1 (opaque)
                duration: 500,
            }
        ).start();

        Animated.timing(                  // Animate over time
            this.state.toggleOtherItems,            // The animated value to drive
            {
                toValue: 1,                   // Animate to opacity: 1 (opaque)
                duration: 500,
            }
        ).start(() => {
            this.setState({isOnItemVisible: false});

        });
    }

    handleBackButtonClick() {

        if (this.state.isOnItemVisible) {

            this.resetOneItem();
            return true;
        }
        this.props.navigation.goBack(null);
        return true;
    }

    animated_styles = StyleSheet.create({
        cardPanel: {
            backgroundColor: "#fcfcfc",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            marginRight: 30,
            marginLeft: 30,
            marginTop: 7,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 3,
        },
        listItem: {
            backgroundColor: "#fcfcfc",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
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

        },
        sublistItem: {
            height: 50,
            backgroundColor: "#fcfcfc",
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
            elevation: 3,

        }
    });

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
>>>>>>> Stashed changes

    }

<<<<<<< Updated upstream
    render() {
        return (
            <View style={{ flex: 1}}   >
                <Text >سلام</Text>
            </View>
        );
    }
}
=======
    itemSelected(item, i) {
        //console.error('toggle');
        this.setState({selectedItem: item});

        Animated.timing(                  // Animate over time
            this.state.toggleSliderAnimate,            // The animated value to drive
            {
                toValue: 0,                   // Animate to opacity: 1 (opaque)
                duration: 500,
            }
        ).start();

        Animated.timing(                  // Animate over time
            this.state.toggleOtherItems,            // The animated value to drive
            {
                toValue: 0,                   // Animate to opacity: 1 (opaque)
                duration: 500,
            }
        ).start(() => {
            this.setState({isOnItemVisible: true});
            this.setSubItems();
        });

    }

    setSubItems() {
        const subItems = [
            "شهرک  صنعتی اسکو (واقع در اسکو)",
            , "شهرک  صنعتی اهر (واقع دراهر)"
            , "شهرک  صنعتی بستان‌آباد (واقع در بستان آباد)"
            , "شهرک  صنعتی بناب (واقع در بناب)"
            , "شهرک  صنعتی بیلوردی (واقع در)"
            , "شهرک  صنعتی پتروشیمی (واقع در تبریز)"
            , "شهرک  صنعتی جلفا (واقع در جلفا)"
            , "شهرک  صنعتی چاراویماق (واقع در چاراویماق)"
            , "شهرک  صنعتی چرم‌شهر (واقع در تبریز)"
            , "شهرک  صنعتی ریحانه (واقع در تبریز)"
            , "شهرک  صنعتی سراب (واقع درسراب)"
            , "شهرک  صنعتی سرامیکی مرند (واقع در مرند)"
            , "شهرک  صنعتی سرمایه‌گذاری خارجی (واقع در شبستر)"
            , "شهرک  صنعتی سعیدآباد (واقع در تبریز)"
            , "شهرک  صنعتی سهند (واقع در تبریز)"
            , "شهرک  صنعتی شبستر (واقع در شبستر)"
            , "شهرک  صنعتی شهید رجایی (واقع در تبریز)"
            , "شهرک  صنعتی شهید سلیمی (واقع در آذرشهر-بخش ممقان)"
            , "شهرک  صنعتی صنایع ساختمانی (واقع در شبستر)"
            , "شهرک  صنعتی عجب‌شیر (واقع در عجبشیر)"
            , "شهرک  صنعتی فناوری خودرو (واقع در تبریز)"
            , "شهرک  صنعتی کاغذکنان (واقع در تبریز)"
            , "شهرک  صنعتی کلیبر (واقع در کلیبر)"
            , "شهرک  صنعتی چرم‌شهر (واقع در تبریز)"
            , "شهرک  صنعتی مراغه (واقع درمراغه)"
            , "شهرک  صنعتی مرند (واقع در مرند)"
            , "شهرک  صنعتی میانه ۱ (واقع درمیانه)"
            , "شهرک  صنعتی میانه ۲ (واقع درمیانه)"
            , "شهرک  صنعتی هشترود (واقع در هشترود)"
            , "شهرک  صنعتی ورزقان (واقع در ورزقان)"
            , "شهرک  صنعتی عالی نسب (واقع در تبریز)"
            , "شهرک  صنعتی سرمایه گذاری خارجی (واقع در شبستر)"
            , "شهرک  صنعتی مصنوعات فلزی (واقع در تبریز)"
        ];


        const items = subItems.map((a, i) => {
            const item = a;
            const index = i;
            return (
                <TouchableOpacity key={i}>

                    <Animated.View style={[this.animated_styles.sublistItem,
                        {}]} key={i}>
                        <Icon name='location-city' type='material' color={'#C6C6C6'}/>
                        <Text>{a}</Text>
                    </Animated.View>

                </TouchableOpacity>
            );
        });

        this.setState({subItems: items});
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

        const images = [];

        for (let i = 0; i < this.arr.length; i++) {
            images.push(imagearr[getRandom(0, imagearr.length)])
        }

        for (let i = 0; i < 32; i++) {
            this.arr.push(i);
        }
        const items = this.arr.map((a, i) => {
            const item = a;
            const index = i;
            return (
                <TouchableOpacity
                    onPress={() => this.state.isOnItemVisible ? this.resetOneItem() : this.itemSelected(item, index)}
                    key={i}>

                    {
                        !this.state.isOnItemVisible &&
                        a != this.state.selectedItem
                        &&

                        <View style={[this.animated_styles.cardPanel ]}>
                            <Image style={[ {resizeMode: 'cover',width:'auto'}]}
                                   source={imagearr[i]}/>
                            <Animated.View style={[this.animated_styles.listItem,
                                {opacity: a == this.state.selectedItem ? 1 : this.state.toggleOtherItems}]} key={i}>

                                <Icon name='room' type='material' color={'#c60d08'}/>
                                <Text>{a}</Text>
                            </Animated.View>
                        </View>
                    }

                    {
                        a == this.state.selectedItem
                        &&
                        <Animated.View
                            style={[this.animated_styles.listItem,
                                {opacity: a == this.state.selectedItem ? 1 : this.state.toggleOtherItems}]} key={i}>


                            <View style={{flex: 9, flexDirection: 'row-reverse', alignItems: 'center'}}>
                                <Icon name='room' type='material' color={'#c60d08'}/>
                                <Text>{a}</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Icon name='down' type='antdesign' color={'#C6C6C6'}/>
                            </View>


                        </Animated.View>
                    }


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
                    {
                        !this.state.isOnItemVisible &&
                        <View style={[styles.carousel, {opacity: this.state.toggleSliderAnimate}]}>
                            <MyCarousel/>
                        </View>
                    }

                    <Text  style={{fontWeight:'900',margin:15}}>
                        لیست استان ها
                    </Text>

                    <View style={styles.listbody}>

                        <ScrollView>
                            {items}
                        </ScrollView>

                        {
                            this.state.isOnItemVisible &&
                            <ScrollView>
                                <View style={{margin: 20}}>

                                    {this.state.subItems}
                                </View>
                            </ScrollView>
                        }
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

    },
    listbody: {
        flex: 3,
        marginTop: 5,

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
>>>>>>> Stashed changes
