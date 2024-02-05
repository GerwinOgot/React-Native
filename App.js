import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen, Favorites, Categories, RecipeDetails} from "./screens";
import { Ailuto, AilutoCamera } from "./components";
import {Entypo} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const tabOptions ={
  title:'Ailuto',
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position:"absolute",
    bottom:0,
    right:0,
    left:0,
    elevation:0,
    height:60,
    backgroundColor:"#9a4444",
    borderRadius: 8,
  }
}
const stackOptions={
  headerStyle:{backgroundColor:"#9a4444"},
  showLabel:false,
  headerShown:false,
}


function TabNavigator(){
  return(
    <Tab.Navigator screenOptions={tabOptions}>
        <Tab.Screen 
        name ="Ailuto" 
        component={StackNavigator}
        options={{
          tabBarIcon:({focused})=>{
            return(
            <View style={{alignItems:"center",justifyContent:"center"}}>
                <Entypo name="home" size={24} color={focused ? "#fddfb6" : "#de8f5f"}/>
            </View>
            )
          }
        }}/>
        <Tab.Screen 
        name ="Favorites" 
        component={Favorites}
        options={{
          tabBarIcon:({focused})=>{
            return(
            <View style={{alignItems:"center",justifyContent:"center"}}>
                <Entypo name="heart" size={24} color={focused ? "#fddfb6" : "#de8f5f"}/>
            </View>
            )
          }
        }}/>
        <Tab.Screen 
        name ="Categories" 
        component={Categories}
        options={{
          tabBarIcon:({focused})=>{
            return(
            <View style={{alignItems:"center",justifyContent:"center"}}>
                <MaterialIcons name="category" size={24} color={focused ? "#fddfb6" : "#de8f5f"}/>
            </View>
            )
          }
        }}/>
      </Tab.Navigator>
  )
}

function StackNavigator(){
  return(
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen name="Home"component={HomeScreen}/>
      <Stack.Screen name="Details" component={RecipeDetails}
      />
      <Stack.Screen name="AilutoCamera" component={AilutoCamera}
      />
    </Stack.Navigator>
  )
}


export default function App(){
  return(
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  )
}