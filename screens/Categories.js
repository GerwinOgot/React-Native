import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';

const Categories=()=>{
    const [text, onChangeText] = React.useState('Useless Text');
    const buttonClickedHandler = () => {
      console.log('You have been clicked a button!');
    };
    return (
      <View style={styles.container}>
        <Text style={[styles.text1]}>Categories</Text>
        <Pressable style={styles.breakfastbutton} onPress={()=> buttonClickedHandler('Simple Button pressed')}>
            <Text style={styles.save}>Breakfast</Text>
        </Pressable>
        <Text style={[styles.inbetweenspace]}></Text>
        <Pressable style={styles.lunchbutton} onPress={()=> buttonClickedHandler('Simple Button pressed')}>
            <Text style={styles.save}>Lunch</Text>
        </Pressable>
        <Text style={[styles.inbetweenspace]}></Text>
        <Pressable style={styles.dinnerbutton} onPress={()=> buttonClickedHandler('Simple Button pressed')}>
            <Text style={styles.save}>Dinner</Text>
        </Pressable>
        <Text style={[styles.space]}></Text>
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
    breakfastbutton:{
      shadowColor:"#111",
      shadowRadius:10,
      elevation:6,
      shadowOffset:{width:56,height:13},
      shadowOpacity:5,
      height:50,
      width:300,
      padding: 10,
      backgroundColor: '#FFFFFF',
      borderColor:'#9A4444',
      borderRadius:10,
      borderWidth:2,
    },
    lunchbutton:{
        shadowColor:"#111",
        shadowRadius:10,
        elevation:6,
        shadowOffset:{width:56,height:13},
        shadowOpacity:5,
        height:50,
        width:300,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderColor:'#9A4444',
        borderRadius:10,
        borderWidth:2,
      },
      dinnerbutton:{
        shadowColor:"#111",
        shadowRadius:10,
        elevation:6,
        shadowOffset:{width:56,height:13},
        shadowOpacity:5,
        height:50,
        width:300,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderColor:'#9A4444',
        borderRadius:10,
        borderWidth:2,
      },
    save:{
        fontWeight:'bold',
        fontSize: 20,
        height: 30,
        justifyContent:"center"
    },
    space:{
        height:450,
    },
    inbetweenspace:{
        height:10,
    },
  });
  
  export default Categories;
  