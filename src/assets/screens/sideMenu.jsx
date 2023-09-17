import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import ProfileIcon from "../icon/profile";
import SideBack from '../png/sideback.png'
import Arka from "../icon/deneme";
import HomeIcon from "../icon/home";
import SideFav from "../icon/sideFav";
import LogOutIcon from "../icon/logout";


const SideMenuScreen = ({navigation,route}) => {
    return (
        <ImageBackground source={SideBack} style={styles.arkaplan}>
            <View style={styles.background}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.profile}>
                        <ProfileIcon></ProfileIcon>
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                        <Text style={styles.nameTxt}>Denny</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewProfileTxt}>View Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.btnTxtView}>
                    <TouchableOpacity
                    onPress={()=>{
navigation.navigate('Main')
                    }}
                    >
                    <HomeIcon></HomeIcon>
                    </TouchableOpacity>
                <Text style={styles.txtIcon}>H o m e</Text>
                </View>
                <View style={styles.btnTxtView}>
                    <TouchableOpacity
                      onPress={()=>{
                        navigation.navigate('Favourite')
                    }}
                    >
                    <SideFav></SideFav>
                    </TouchableOpacity>
                <Text style={styles.txtIcon}>F a v o u r i t e</Text>
                </View>
                <View style={styles.btnTxtView}>
                    <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('Login')
                    }}
                    >
                    <LogOutIcon></LogOutIcon>
                    </TouchableOpacity>
                <Text style={styles.txtIcon}>L o g o u t</Text>
                </View>
                
            </View>

        </ImageBackground>
    )
}
export default SideMenuScreen
const styles = StyleSheet.create({
    arkaplan: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        resizeMode: 'stretch'
    },
    background: {
        paddingHorizontal: 30,
        paddingVertical: 60
    },

    profile: {
        borderRadius: 100,
        backgroundColor: 'black',
        width: 70,
        height: 70,
    },
    nameTxt: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    viewProfileTxt: {
        fontSize: 12,
        color: '#FF6B00'
    },
    btnTxtView:{
        width:'100%',
flexDirection:'row',
height:40,
     alignItems:'center',
     
     marginTop:50
    },
    txtIcon:{
       fontSize:24,
       fontWeight:'bold',
       color:'white',
       marginLeft:60
    }
})