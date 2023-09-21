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
const RecommendedSeeAllScreen = ({navigation, route}) => {
    const [tarifler, SetTarifler] = useMMKVStorage('yemek',MMKV,[])

    return (
        <View style={styles.arkaplan}>
           
            <View style={styles.topView}>
                <Text style={styles.topTxt}>Recommended</Text>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Main')
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
          numColumns={2}
          data={tarifler}
          renderItem={element=>{
            return(
                <View style={styles.todayFreshView}>
                <View style={styles.todayFreshTopSideRow}>
                <TouchableOpacity>
                {element.item.like ? (<LikeIcon></LikeIcon>):(<UnLikeIcon></UnLikeIcon>)}
                </TouchableOpacity>
                    <Image source={{uri: element.item.png}} style={{width:5000,height:50}}></Image>
                </View>
                <View>
                <Text style={{ color: 'aqua' }}>{element.item.category}</Text>
                <Text style={{ color: 'white' }}>{element.item.name}</Text>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <TimeIcon></TimeIcon>
                    <Text style={{ color: '#FF6B00', marginLeft: 10 }}>{element.item.time}</Text>
                </View>
                <Text style={{ color: 'white' }}>{element.item.rate}/5</Text>
                </View>
                
            </View>
            )
          }}
          >

          </FlatList>
        </View>
    )
}
export default RecommendedSeeAllScreen
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
        fontSize: 30,
        color: 'white'
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
        marginVertical: 15

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
    freshView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:10,
       
    },
  
    todayFreshView: {
        backgroundColor: '#70707066',
        width: '47%',
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        height:220,
        width:170,
        marginRight:10,
        marginBottom:10


    },
    todayFreshTopSideRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:'50%'
    },
   boxView:{
    width:'100%',
    height:'50%'
   }
})