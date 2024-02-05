import React from 'react'
import { StyleSheet, Text, View,Image, Pressable,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const RecipeDetails=({navigation, route})=>{
  const {item} = route.params;
  console.log(item);
    return (
      <View style={{backgroundColor:item.color,flex:1}}>
        <SafeAreaView style={{flexDirection:"row", marginHorizontal:15}}>
          <Pressable style={{flex:1}} onPress={()=> navigation.goBack()}>
            <Ionicons name="arrow-back-circle" marginTop={15} size={50} color="#f4dfb6"/>
          </Pressable>
          
          <Ionicons name="heart-circle" marginTop={15} size={50} color="#f4dfb6"/>
        </SafeAreaView>
        <View
        style={{
          backgroundColor:"#f4dfb6",
          flex:1,
          borderTopLeftRadius:56,
          borderTopRightRadius:56,
          marginTop:140,
          alignItems:"center",
          paddingHorizontal:16,
        }}>
        <View
        style={{
          height:300,
          width:300,
          position:"absolute",
          top:-150,
          alignItems:"center"
        }}>
          <Image 
          source={item.image}
          style={{
            width:"100%",
            height:"100%",
            resizeMode:"contain",
            borderRadius:150,
          }}/>
          {/*Recipe Name */}
        <Text style={{marginTop:5,fontSize:28,fontWeight:"bold"}}>
          {item.name}
        </Text>
        <Text style={{marginTop:1,fontSize:8}}>
        </Text>
        <View styles={{flex:1}}>
          <ScrollView>
                      {/*Recipe Time and Calories */}
            <View style={{marginTop:20,flexDirection:"row"}}>
              <View style={
                {backgroundColor:"#d6d46d",
                width:"40%",
                height:"100%",
                marginHorizontal:16,
                paddingHorizontal:15,
                paddingVertical:15,
                borderRadius:20,
                alignItems:"center",
                }}>
                <Ionicons name="time" size={30} color="#9a4444" />
                <Text style={{fontSize:16,fontWeight:400,}}>{item.time}</Text>
              </View>
              <View style={
                {backgroundColor:"#d6d46d",
                width:"40%",
                height:"100%",
                marginHorizontal:15,
                paddingHorizontal:15,
                paddingVertical:15,
                borderRadius:20,
                alignItems:"center",
                }}>
                <Ionicons name="fast-food" size={30} color="#9a4444" />
                <Text style={{fontSize:16,fontWeight:400}}>{item.calories}</Text>
              </View>
            </View>
            {/*Recipe Ingredients */}
            <View style={{alignSelf:"flex-start",marginVertical:22}}>
                <Text style={{fontSize:22,fontWeight:"600", marginBottom:6}}>Ingredients:</Text>
                {
                  item.ingredients.map((ingredients,index)=>{
                    return(
                    <View style={{
                      flexDirection:"row",
                      alignItems:"center",
                      marginVertical:4,
                      }}key={index}>
                      <View style={{
                        backgroundColor:"#9a4444",
                        marginRight:4,
                        height:10,
                        width:10,
                        borderRadius:5,
                        }}>
                      </View>
                        <Text stye={{fontSize:18,marginLeft:6}}>
                          {ingredients}
                        </Text>
                    </View>
                    )
                  })
                }
            </View>
            {/*Recipe Steps */}
            <View style={{alignSelf:"flex-start",marginVertical:22}}>
                <Text style={{fontSize:22,fontWeight:"600", marginBottom:6}}>Steps:</Text>
                {
                  item.steps.map((steps,index)=>{
                    return(
                      <Text
                      key={index}
                      style={{fontSize:18,marginLeft:6,marginVertical:6}}
                      >{`Step ${index+1}.) ${steps}`}</Text>
                    )
                  })
                }
            </View>
          </ScrollView> 
        </View>
        </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
  });
  
  export default RecipeDetails;
  