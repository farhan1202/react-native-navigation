import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import Contack from './component/contack'
import Home from './component/home'
import Home2 from './component/home2'
import Favorite from './component/favorite'
import Setting from './component/setting'

import Tab1 from './component/tabs/tab1'
import Tab2 from './component/tabs/tab2'
import Tab3 from './component/tabs/tab3'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();


createHomeStack = () =>
  <Stack.Navigator>
    <Stack.Screen name="Main" component={Home} />
    <Stack.Screen name="Menu" component={Home2} />
    <Stack.Screen name="Bottom Tab" children={createBottomTabs} />
    <Stack.Screen name="Top Tab" children={createTopTabs} />
  </Stack.Navigator>

createTopTabs = (ahay) => {
  return (
    <MaterialTopTabs.Navigator >
      <MaterialTopTabs.Screen name="TAB 1" initialParams={{nama : ahay.route.params.title}} component={Tab1} options={{title: ahay.route.params.title}} />
      <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
      <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
    </MaterialTopTabs.Navigator>
  )
}

createBottomTabs = (ahay) => {
  return(
    <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen name="Tab 1" initialParams={{nama : ahay.route.params.title}} component={Tab1} />
      <MaterialBottomTabs.Screen name="Tab 2" component={Tab2} />
      <MaterialBottomTabs.Screen name="Tab 3" component={Tab3} />
    </MaterialBottomTabs.Navigator>
  )
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer >
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={createHomeStack} />
          <Drawer.Screen name="Contack" component={Contack} />
          <Drawer.Screen name="Favorite" component={Favorite} />
          <Drawer.Screen name="Settings" component={Setting} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})
