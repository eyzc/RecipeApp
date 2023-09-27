import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import PlusIcon from "../icon/plusIcon";
import Cate from "../icon/cate";
import SearchIcon from "../icon/search";
import HuniIcon from "../icon/huni";
import WaffleTost from "../icon/waffleTost";
import LikeIcon from "../icon/like";
import TimeIcon from "../icon/time";
import CupCake from "../icon/cupcake";
import StarIcon from "../icon/star";
import BackIcon from "../icon/back";
import BurgerIcon from "../icon/burger";
import UnLikeIcon from "../icon/unlike";

import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";
import transactions from "react-native-mmkv-storage/dist/src/transactions";
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
                    SetTarifler(tarifler)
                    navigation.navigate('Side',{
                        tarifler:tarifler
                    })
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
             for (let index = 0; index < element.item.length; index++) {
                if (element.item.like) {
                    
                }
                
             }
             return(
                element.item.like ?
                <View style={styles.recomendedFlatlistView}>
                <View style={{ alignItems: 'center', width: '20%', justifyContent: 'center', height: '100%' }}>
                <Image style={{width:65,height:55,resizeMode:'stretch'}} source={imageResources(element.item.pngName)}></Image> 
                </View>
                <View style={{width:'50%'}}>
                    <Text numberOfLines={1} style={styles.freshTxt}>{element.item.name}</Text>
                    <View style={{ flexDirection: 'row', }}>
                    <Text style={{fontSize:15,color:'white'}}>{element.item.rate}/5</Text>
                    </View>
                    
                </View>
                <View style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <TouchableOpacity
                onPress={()=>{
                     SetTarifler([
                        ...tarifler.slice(0, element.index),
                    {
                        name:element.item.name ,
                        like:!element.item.like,
                        time:element.item.time,
                        rate:element.item.rate,
                        category:element.item.category,
                        pngName:element.item.pngName, 
                    },
                    ...tarifler.slice(element.index + 1)
                    ])
                    console.log(tarifler)
                }}
                   
                   
                  
                 
                >
                    {element.item.like ? (<LikeIcon></LikeIcon>):(<UnLikeIcon></UnLikeIcon>)}
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', }}>
                        <TimeIcon></TimeIcon>
                        <Text style={{ color: '#FF6B00', marginLeft: 10 }}>{element.item.time}</Text>
                    </View>
                </View>
            </View>: null
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