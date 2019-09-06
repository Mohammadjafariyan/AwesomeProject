import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = {
    stickToBottom: {
      position: 'absolute',
      bottom: 0,
    },
  };

import BottomNavigation, {
    FullTab
  } from 'react-native-material-bottom-navigation'
import {Button, Icon} from 'react-native-elements';
   
  export default class NavigationBar extends React.Component {
   
   
    renderIcon = icon => ({ isActive }) => (
      <Icon size={24} color="white" name={icon} />
    )
   
    renderTab = ({ tab, isActive }) => (
      <FullTab
        isActive={isActive}
        key={tab.key}
        label={tab.label}
        renderIcon={this.renderIcon(tab.icon)}
      />
    )
   
    render() {
      return (
      
          <BottomNavigation  style={{ flex: 1}}
            onTabPress={newTab => this.setState({ activeTab: newTab.key })}
            renderTab={this.renderTab}
            tabs={this.props.tabs}
          />
      )
    }
  }

  export class EveryNavigationBar extends React.Component{
      render() {
          return(
              <View>
                  <Button
                      onPress={()=>this.props.navigation.navigate('SearchScreen')}
                      icon={{
                          name: "search",
                          size: 20,
                          color: "#d1d1d1"
                      }}
                      type='clear'
                  />
              </View>

          );
      }
  }