 import React from "react";
import View from "react-native-web/dist/exports/View";
import { Text, SearchBar } from "react-native-elements";
export default class Header extends React.Component {
    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
    

    render() {
        return (
            <SearchBar
        placeholder="جستجو"
        lightTheme={true}
        round={true}
        containerStyle={{backgroundColor:'white'}}
        inputContainerStyle={{flexDirection:'row-reverse',justifyContent:'flex-start' ,backgroundColor:'#e8e7e6'}}
        cancelButtonTitle='لغو'
        onChangeText={this.updateSearch}
        value={this.state.search}
      
      />
        )
    }

}

// import React from "react";

// import StyleSheet from "react-native-web/dist/exports/StyleSheet";

// const styles = StyleSheet.create({  
//     withradious:{
//       borderTopRightRadius:10, 
//       borderTopLeftRadius:10,
//       borderBottomRightRadius:10,
//       borderBottomLeftRadius:10,
//       margin:10,
//       padding:5,
//       shadowColor: "#000",
//   shadowOffset: {
//       width: 0,
//       height: 3,
//   },
//   shadowOpacity: 0.27,
//   shadowRadius: 4.65,
  
//   elevation: 6,
//      }
//     });


//   const  imgs=[ set REACT_NATIVE_PACKAGER_HOSTNAME=192.168.1.6 9
//     require('../../assets/images/homeSliderImages/b.33817-8603_factory_futura_park.jpg')
//   ];
  
//   import Carousel from 'react-native-snap-carousel';

// export class MyCarousel extends Component {

//     _renderItem ({item, index}) {
//         return (
//             <View style={styles.slide}>
//                 <Text style={styles.title}>{ item.title }</Text>
//             </View>
//         );
//     }

//     render () {
//         return (
//             <Carousel
//               ref={(c) => { this._carousel = c; }}
//               data={this.state.entries}
//               renderItem={this._renderItem}
//               sliderWidth={sliderWidth}
//               itemWidth={itemWidth}
//             />
//         );
//     }
// }