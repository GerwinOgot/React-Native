import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,View,Text, SafeAreaView,Button,Image} from "react-native";
import { useEffect,useRef,useState } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';

export default function AilutoCamera(){
    let cameraRef = useRef();
    const [hasCameraPermission,setHasCameraPermission]=useState();
    const [hasMediaLibraryPermission,setHasMediaLibraryPermission]=useState();
    const [photo,setPhoto]=useState();

    useEffect(()=>{
        (async()=>{
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermission(cameraPermission.status ==="granted");
            setHasMediaLibraryPermission(mediaLibraryPermission.status ==="granted");
        })();
    },[]);

    if (hasCameraPermission === undefined){
        return <Text>Requesting permissions...</Text>
    }else if(!hasCameraPermission){
        return<Text>Permision for the camera not granted.</Text>
    }

    let captureImage = async()=>{
        let options={
            quality:1,
            base64:true,
            exif:false,
        };
        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
    };

    if(photo){
        let savePhoto = ()=>{
            MediaLibrary.saveToLibraryAsync(photo.uri).then(()=>{
                setPhoto(undefined);
            });
        };
        return(
            <SafeAreaView style={styles.container}>
                <Image styles={styles.preview} source={{uri:"data.image/jpg;base64,"+photo.base64}}/>
                {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto}/>:undefined}
                <Button title="Discard" onPress={()=> setPhoto(undefined)}/>
            </SafeAreaView>
        );
    }

    return(
        <Camera style={styles.container} ref={cameraRef}>
            <View style={StyleSheet.buttonContainer}>
                <Button title="Capture Image" onPress={captureImage}/>
            </View>
            <StatusBar style="auto"/>
        </Camera>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonContainer:{
        backgroundColor:"#fff",
        alignSelf:"center",
    },
    preview:{
        alignSelf:'stretch',
        flex:1,
    },
});