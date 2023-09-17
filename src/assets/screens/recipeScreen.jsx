import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import BackIcon from "../icon/back";
import BellIcon from "../icon/bell";
import UnLikeIcon from "../icon/unlike";
import ClockIcon from "../icon/clock";
import ServiceIcon from "../icon/service";
import Toast from "../icon/toast";
const RecipeScreen = ({ navigation, route }) => {
    return (
        <View style={styles.arkaplan}>
            <View style={styles.topsideView}>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Main')
                }}
                >
                <BackIcon></BackIcon>
                </TouchableOpacity>
                <BellIcon></BellIcon>
            </View>
            <Text style={{ color: '#128FAE', paddingLeft: 30, paddingTop: 30 }}>Breakfast</Text>
            <View style={styles.nameTxt}>
                <Text style={{ color: 'white', fontSize: 25 }}>French Toast with Berries</Text>
                <UnLikeIcon></UnLikeIcon>
            </View>
            <Text style={{ color: 'white', paddingLeft: 30 }}>4.5/5</Text>
            <View style={{ marginTop:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                <View>
                <View style={{ paddingLeft: 30, flexDirection: 'row' }}>
                    <ClockIcon></ClockIcon>
                    <Text style={{ color: '#7B7B7B', paddingLeft: 10 }}>10 Mins</Text>
                </View>
                <View style={{ padding: 30, flexDirection: 'row' }}>
                    <ServiceIcon></ServiceIcon>
                    <Text style={{ color: '#7B7B7B', paddingLeft: 10 }}>10 Mins</Text>
                </View>
                </View>
              <Toast></Toast>
            </View>
            <View style={{flexDirection:'row',marginTop:15}}>
                <View style={styles.materialsView}></View>
                <View style={styles.materialsView}></View>
                <View style={styles.materialsView}></View>
                <View style={styles.materialsView}></View>
                <View style={styles.materialsView}></View>
                <View style={styles.materialsView}></View>
            </View>
            <View style={{width:'100%',marginTop:75,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={styles.buttonView}>
                    <Text style={styles.buttonTxt}>Tutorial</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonView}>
                    <Text style={styles.buttonTxt}>Tutorial</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default RecipeScreen
const styles = StyleSheet.create({
    arkaplan: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    topsideView: {
        paddingHorizontal: 30,
        paddingTop: 60,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    nameTxt: {
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    materialsView:{
        width:55,
        height:55,
        borderRadius:15,
        marginHorizontal:10,
        backgroundColor:'white'
    },
    buttonView: {
        backgroundColor: '#FF6B00',
        width: '75%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginTop: 40
    },
    buttonTxt: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
})