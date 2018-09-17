import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Text, View, ScrollView, StyleSheet, } from 'react-native'
import { setLocalNotification } from './utils/helper'
import { DeckStack } from './components/Navigation'
import {AdMobBanner} from 'react-native-admob'

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
        <AdMobBanner
          adSize="fullBanner"
          adUnitId="ca-app-pub-7325718702070526/4800641329" />
          <DeckStack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
