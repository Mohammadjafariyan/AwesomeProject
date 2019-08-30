import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimateHome from "./screens/home/AnimateHome";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { createStackNavigator, createAppContainer } from "react-navigation";
import AppNavigator from "./screens/Navigation";

const AppContainer = createAppContainer(AppNavigator);


export default function App() {
  return (
      <AppContainer/>

      /*<View style={{ flex: 1 }}   >
        <AnimateHome/>
      </View>*/
  /*    <Router >
          <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
          >
              <Route exact path="/" component={AnimateHome} />
                   <Route path="/about/" component={About}/>
              <Route path="/etc/" component={Etc}/>
          </AnimatedSwitch>
      </Router>*/
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
