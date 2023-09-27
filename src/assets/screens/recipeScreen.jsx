import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image, FlatList } from 'react-native'
import BackIcon from "../icon/back";
import BellIcon from "../icon/bell";
import UnLikeIcon from "../icon/unlike";
import LikeIcon from "../icon/like";
import ClockIcon from "../icon/clock";
import ServiceIcon from "../icon/service";
import Toast from "../icon/toast";
import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";
const MMKV = new MMKVLoader().initialize()

const RecipeScreen = ({ navigation, route }) => {
    const [tarifler, SetTarifler] = useMMKVStorage('yemek',MMKV,[])
    const index = route.params.index
    const malzeme = tarifler[index].ingredients
    console.log(malzeme)
    console.log(index)
    
    
    const  imageResources = (imageName) =>{
        const staticImage = {
            'toast_with_berries':require('../png/toast.png'),
            'chicken_burger':require('../png/chickenburger.png'),
            'chocolate_cake':require('../png/chocolatecake.png'),
            'cup_cake':require('../png/cupcake.png'),
        }
    if (staticImage[imageName]){
        return(staticImage[imageName])
    }
    return  {uri: imageName} }

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
            <Text style={{ color: '#128FAE', paddingLeft: 30, paddingTop: 30 }}>{tarifler[index].category}</Text>
            <View style={styles.nameTxt}>
                <Text style={{ color: 'white', fontSize: 25 }}>{tarifler[index].name}</Text>
                <TouchableOpacity
                onPress={()=>{
                    SetTarifler([
                        ...tarifler.slice(0, index),
                    {
                        name:tarifler[index].name,
                        like:!tarifler[index].like,
                        time:tarifler[index].time,
                        rate:tarifler[index].rate,
                        category:tarifler[index].category,
                        pngName:tarifler[index].pngName, 
                        ingredients:tarifler[index].ingredients
                    },
                    ...tarifler.slice(index + 1)
                    ])
                    console.log(tarifler)
                }}
                >
{tarifler[index].like ? (<LikeIcon></LikeIcon>):(<UnLikeIcon></UnLikeIcon>)}
                </TouchableOpacity>
                
            </View>
            <Text style={{ color: 'white', paddingLeft: 30 }}>{tarifler[index].rate}/5</Text>
            <View style={{ marginTop:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                <View>
                <View style={{ paddingLeft: 30, flexDirection: 'row' }}>
                    <ClockIcon></ClockIcon>
                    <Text style={{ color: '#7B7B7B', paddingLeft: 10 }}>{tarifler[index].time} Mins</Text>
                </View>
                <View style={{ padding: 30, flexDirection: 'row' }}>
                    <ServiceIcon></ServiceIcon>
                    <Text style={{ color: '#7B7B7B', paddingLeft: 10 }}>10 Mins</Text>
                </View>
                </View>
                <Image style={{width:200,height:180,resizeMode:'stretch'}} source={imageResources(tarifler[index].pngName)}></Image>
            </View>
            <FlatList
            style={{width:'100%',marginTop:10,height:150,padding:10}}
            numColumns={'2'}
            
            data={malzeme}
            renderItem={element=>{
                return(
                    <View style={{backgroundColor:'white',height:50,width:'45%',marginHorizontal:10, borderRadius:20,padding:5,alignItems:'center',justifyContent:'center',marginBottom:10}}>
                        <Text style={{fontWeight:'bold',color:'#FF6B00',fontSize:15,textAlign:'center'}}>{element.item}</Text>
                    </View>
                )
            }}
            >

            </FlatList>
            <View style={{width:'100%',marginTop:30,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={styles.buttonView}>
                    <Text style={styles.buttonTxt}>Tutorial</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonView}>
                    <Text style={styles.buttonTxt}>Recipe</Text>
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