import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Pressable} from 'react-native';
import { useNavigation } from "@react-navigation/native";


const Titles=()=>{
  const navigation = useNavigation();
    const [text, onChangeText] = React.useState('Useless Text');
    return (
        <View style={styles.container}>
        <Text style={[styles.text1]}>What is in your kitchen?</Text>
        <Pressable onPress={()=> navigation.navigate("AilutoCamera")}>
          <Image style={styles.cameraimagestyle} source={require('../screens/assets/camera.png')} />
        </Pressable>
            <Text style={[styles.text2]}>Take a photo of your ingredient</Text>
            <Text style={[styles.text3]}>or</Text>
            <Text style={[styles.text4]}>Enter some ingredients</Text>
        <SafeAreaView>  
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={Text}
          placeholder="Type your Ingredients"
        />
        </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F4DFB6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text1:{
      fontWeight:'bold',
      fontSize: 20,
      height: 30,
    },
    camerabutton: {
      width: 90,
      height: 0,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor:'#9a4444',
    },
    text2:{
      fontSize: 15,
      height:20,
    },
    text3:{
      fontSize: 15,
      height:20,
    },
    text4:{
      fontSize: 15,
      height:30,
    },
    input: {  
      borderWidth: 1,
      padding: 10,
      width:300,
      backgroundColor: '#FFFFFF',
      borderColor:'#9A4444',
      borderRadius:10,
      borderWidth:2,
    },

    cameraimagestyle:{
      width:50,
      height:50,
    },
    recipeimagestyle:{
      width:146,
      height:183,
      borderRadius:10,
      flexDirection:'column',
    },
  });
  
  export default Titles;