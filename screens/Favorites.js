import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';

const Favorites=()=>{
    const [text, onChangeText] = React.useState('Useless Text');
    return (
      <View style={styles.container}>
        <Text style={[styles.text1]}>Favorites</Text>
        <StatusBar style="auto" /> 
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4DFB6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1:{
      fontWeight:'bold',
      fontSize: 25,
      height: 50,
    },
    recipeimagestyle:{
        width:146,
        height:183,
        borderRadius:10,
        flexDirection:'column',
    },
    space:{
        height:450,
    },
  });
  
  export default Favorites;
  