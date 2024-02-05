import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, KeyboardAvoidingView} from 'react-native';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';

const HomeScreen=()=>{
    return (
      <SafeAreaView style={{flex:1,marginHorizontal:0,backgroundColor:"#f4dfb6"}}>
        <View style={{marginTop:30}}>
            <Header/>
        </View> 
        <View style={{marginTop:30,flex:1, marginBottom:60}}>
            <RecipeCard/>
        </View>
        <StatusBar style="auto" />   
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
  });
  
  export default HomeScreen;
  