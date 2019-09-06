import React from "react";
import {View, Text} from "react-native";
import {Button} from "react-native-elements";
import {SearchBar} from 'react-native-elements';


export class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {comp: this};
    }

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({search});
    };
    static navigationOptions = (state) => ({

        header: (
            <View style={{flexDirection: 'row'}}>

                <View style={{flex: 1}}>
                    <Button
                        onPress={() => state.navigation.goBack()}
                        type='clear'
                        title='بازگشت  ← '
                        color='#333'
                    />
                </View>
                <View style={{flex: 9}}>

                    <SearchBar
                        platform='android'
                        placeholder="به دنبال چه می گردید..."
                        onChangeText={() => state.comp.updateSearch()}
                        value={state.search}
                    />

                </View>
            </View>
        )
    });

    render() {
        return (
            <View style={{flex:1}}>

                <Text>
                    چیزی یافت نشد
                </Text>

            </View>
        );
    }
}