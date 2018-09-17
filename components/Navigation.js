import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import DeckList from './DeckList'

const Tabs = createBottomTabNavigator({
  All: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'All Recipes',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-card' size={30} color={tintColor} />
    }
  }
})

export const DeckStack = createStackNavigator({
  DeckList: {
    screen: Tabs,
    navigationOptions: {
      title: 'Kerala Recipes'
    }
  }
})
