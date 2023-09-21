import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import PlusIcon from "../assets/icon/plusIcon";
import Cate from "../assets/icon/cate";
import SearchIcon from "../assets/icon/search";
import HuniIcon from "../assets/icon/huni";
import WaffleTost from "../assets/icon/waffleTost";
import LikeIcon from "../assets/icon/like";
import TimeIcon from "../assets/icon/time";
import CupCake from "../assets/icon/cupcake";
import StarIcon from "../assets/icon/star";
import BackIcon from "../assets/icon/back";
import BurgerIcon from "../assets/icon/burger";
import UnLikeIcon from "../assets/icon/unlike";

import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";
import { Image } from "react-native-svg";
const MMKV = new MMKVLoader().initialize()
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
return  {uri: imageName} 

}
const FovouriteScreen = ({navigation, route}) => {
    const [tarifler, SetTarifler] = useMMKVStorage('yemek',MMKV,[])
    return (
        <View style={styles.arkaplan}>
           
            <View style={styles.topView}>
                <Text style={styles.topTxt}>Favourite</Text>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Side')
                }}
                >
                <BackIcon></BackIcon>
                </TouchableOpacity>
                
            </View>
           
            <View style={styles.searchView}>
                <View style={styles.searchBorderView}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor={'white'}
                        style={styles.searchInputTxt}
                    >
                    </TextInput>
                    <SearchIcon></SearchIcon>
                </View>
                <TouchableOpacity style={styles.huniView}>
                    <HuniIcon></HuniIcon>
                </TouchableOpacity>
            </View>
             <FlatList
             data={tarifler}
             renderItem={element=>{
                return(
                    <View style={styles.recomendedFlatlistView}>
                    <View style={{ alignItems: 'center', width: '20%', justifyContent: 'center', height: '100%' }}>
                        <Image style={{with:65,height:55,resizeMode:'stretch'}} source={element.item.png}></Image>
                    </View>
                    <View style={{width:'50%'}}>
                        <Text numberOfLines={1} style={styles.freshTxt}>{element.item.name}</Text>
                        <View style={{ flexDirection: 'row', }}>
                        <Text style={{fontSize:15,color:'white'}}>{element.item.rate}/5</Text>
                        </View>
                        
                    </View>
                    <View style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <TouchableOpacity>
                        {element.item.like ? (<LikeIcon></LikeIcon>):(<UnLikeIcon></UnLikeIcon>)}
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', }}>
                            <TimeIcon></TimeIcon>
                            <Text style={{ color: '#FF6B00', marginLeft: 10 }}>{element.item.time}</Text>
                        </View>
                    </View>
                </View>
                )
             }}
             >

             </FlatList>
        </View>
    )
}
export default FovouriteScreen
const styles = StyleSheet.create({
    arkaplan: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        padding: 30
    },
   
    topView: {
        flexDirection: 'row',
        marginTop: 10,
       alignItems:'center',
       justifyContent:'space-between'
    },
    topTxt: {
        fontSize: 20,
        color: 'white',
        fontWeight:'bold'
    },
    
    answerView: {
        width: '100%'
    },
    answerTxt: {
        color: '#FF6B00',
        fontSize: 40,
        fontWeight: 'bold'
    },
    searchView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 50

    },
    searchBorderView: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        width: '70%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    huniView: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchInputTxt: {
        color: 'white',
        fontSize: 15,
        width: '85%'
    },
    recomendedFlatlistView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#70707066',
        width: '100%',
        borderWidth: 2,
        borderRadius: 10,
        height: 70,
        width: '100%',
        marginBottom: 10,
        padding: 10
    },
    freshTxt: {
        color: 'white',
        fontSize: 20,
        
    },
})