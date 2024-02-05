import { StyleSheet,Text,View,FlatList,Image ,Pressable} from "react-native";
import React from "react";
import { recipeList } from "../Constant"; 
import { useNavigation } from "@react-navigation/native";

const RecipeCard =()=>{
    const navigation = useNavigation();
    return(
        <View>
            <FlatList 
            data={recipeList} 
            renderItem={({ item })=> (
            <Pressable 
            onPress={()=> navigation.navigate("Details",{item: item})}
            style={{
                backgroundColor:"white",
                shadowColor:"#000",
                shadowOffset:{width:0,height:4},
                shadowOpacity:0.1,
                shadowRadius:10,
                borderRadius:16,
                marginVertical:5,
                marginHorizontal:8,
                alignItems:"center",
                paddingHorizontal:10,
                paddingVertical:20,
                borderColor:'#9A4444',
                borderRadius:15,
                borderWidth:2,
            }}>
                <Image source={item.image} style={{width:150, height:150, resizeMode:"center"}}/>
                <Text>{item.name}</Text>
                <View style={{flexDirection:"row"}}>
                    <Text>{item.time}</Text>
                    <Text> | </Text>
                    <View>
                        <Text>{item.calories}</Text>
                    </View>
                </View>
            </Pressable>
            )}
            numColumns={2}
            columnWrapperStyle={{
                justifyContent:"space-between",
            }}
            showsVerticalScrollIndicator={false}
        />
        </View>
    );
};

export default RecipeCard;

const styles = StyleSheet.create({});