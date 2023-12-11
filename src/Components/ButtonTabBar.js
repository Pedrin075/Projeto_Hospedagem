import { Entypo } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet } from "react-native";

export function ButtonTab({focused, size}){
    return(
        <View style={styles.container}>
            <Entypo name="home" color={focused ? '#000' : '#fff'} size={size}/>  
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 60,
        width: 60,
        backgroundColor: '#8A2BE2',
        borderRadius: 100,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})