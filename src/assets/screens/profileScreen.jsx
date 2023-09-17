import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import BackIcon from "../icon/back";
import ApplyIcon from "../icon/apply";
import ProfileIcon2 from "../icon/profileIcon2";

const ProfileScreen = ({ navigation, route }) => {
    return (
        <View style={styles.arkaplan}>
            <View>
                <View style={styles.topsideView}>
                    <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('Side')
                    }}
                    >
                    <BackIcon></BackIcon>
                    </TouchableOpacity>
                    <View style={styles.profileImg}>
                        <ProfileIcon2></ProfileIcon2>
                    </View>
                    <ApplyIcon></ApplyIcon>
                </View>
            </View>


            <TextInput
                placeholder="Name"
                placeholderTextColor={'white'}
                style={styles.TextInputView}>
            </TextInput>
            <View style={styles.btnView}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Upload</Text>
            </View>
            {/* BURASI FLAT LİST */}
            <View style={{marginTop:20,flexDirection:'row',justifyContent:'center'}}>
                <View style={styles.yemekView}></View>
                <View style={styles.yemekView}></View>
            </View>
             {/* BURASI FLAT LİST */}
             <View style={{marginTop:20,flexDirection:'row',justifyContent:'center'}}>
                <View style={styles.yemekView}></View>
                <View style={styles.yemekView}></View>
            </View>
             {/* BURASI FLAT LİST */}
             <View style={{marginTop:20,flexDirection:'row',justifyContent:'center'}}>
                <View style={styles.yemekView}></View>
                <View style={styles.yemekView}></View>
            </View>
        </View>
    )
}
export default ProfileScreen

const styles = StyleSheet.create({
    arkaplan: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        padding: 30,
        paddingTop: 50
    },
    topsideView: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    profileImg: {
        height: 170,
        width: 170,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent:'center'

    },
    TextInputView: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        paddingLeft: 30,
        color: 'white'
    },
    btnView: {
        borderRadius: 10,
        backgroundColor: "#F55A00",
        marginHorizontal: 60,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    yemekView:{
width:160,
height:160,
backgroundColor:"#D9D9D9",
marginRight:20,
borderRadius:10

    }

})