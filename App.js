import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './app/navigation/Navigator'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';



export default class App extends React.Component {
  state = {
    isFontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'SemiBold': require('./app/fonts/Montserrat-SemiBold.otf'),
      'Medium': require('./app/fonts/Montserrat-Medium.otf'),
      'Regular': require('./app/fonts/Montserrat-Regular.otf')
    });
    this.setState({ isFontLoaded: true })
  }

  render() {
    return (
      (this.state.isFontLoaded === true) ? (<AppNavigator />) : (AppLoading)


    );


    < StripeApp />
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
