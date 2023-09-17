import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
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
const TodayFreshSeeAllScreen = ({navigation, route}) => {
  
    return (
        <View style={styles.arkaplan}>
           
            <View style={styles.topView}>
                <Text style={styles.topTxt}>Today’s Fresh Recipe</Text>
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
           {/* BURASI FLAT LİST YERİ ROW 2 Lİ */}
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginVertical: 15 }}>
                <View style={styles.todayFreshView}>
                    <View style={styles.todayFreshTopSideRow}>
                    <TouchableOpacity>
                    <LikeIcon></LikeIcon>
                    </TouchableOpacity>
                        <WaffleTost></WaffleTost>
                    </View>
                    <View style={styles.boxView}>
                    <Text style={{ color: 'aqua' }}>Kategori</Text>
                    <Text style={{ color: 'white' }}>Name</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <TimeIcon></TimeIcon>
                        <Text style={{ color: '#FF6B00', marginLeft: 10 }}>10:03</Text>
                    </View>
                    <Text style={{ color: 'white' }}>RATE 4.5/5</Text>
                    </View>
                </View>
                <View style={styles.todayFreshView}>
                    <View style={styles.todayFreshTopSideRow}>
                    <TouchableOpacity>
                    <UnLikeIcon></UnLikeIcon>
                    </TouchableOpacity>
                        <BurgerIcon></BurgerIcon>
                    </View>
                    <View>
                    <Text style={{ color: 'aqua' }}>Kategori</Text>
                    <Text style={{ color: 'white' }}>Name</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <TimeIcon></TimeIcon>
                        <Text style={{ color: '#FF6B00', marginLeft: 10 }}>10:03</Text>
                    </View>
                    <Text style={{ color: 'white' }}>RATE 4.5/5</Text>
                    </View>
                    
                </View>
                
                

            </View>
            {/* BURASI FLAT LİST YERİ ROW 2 Lİ */}
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginVertical: 15 }}>
                <View style={styles.todayFreshView}>
                    <View style={styles.todayFreshTopSideRow}>
                    <TouchableOpacity>
                    <LikeIcon></LikeIcon>
                    </TouchableOpacity>
                        <WaffleTost></WaffleTost>
                    </View>
                    <View style={styles.boxView}>
                    <Text style={{ color: 'aqua' }}>Kategori</Text>
                    <Text style={{ color: 'white' }}>Name</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <TimeIcon></TimeIcon>
                        <Text style={{ color: '#FF6B00', marginLeft: 10 }}>10:03</Text>
                    </View>
                    <Text style={{ color: 'white' }}>RATE 4.5/5</Text>
                    </View>
                </View>
                <View style={styles.todayFreshView}>
                    <View style={styles.todayFreshTopSideRow}>
                    <TouchableOpacity>
                    <UnLikeIcon></UnLikeIcon>
                    </TouchableOpacity>
                        <BurgerIcon></BurgerIcon>
                    </View>
                    <View>
                    <Text style={{ color: 'aqua' }}>Kategori</Text>
                    <Text style={{ color: 'white' }}>Name</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <TimeIcon></TimeIcon>
                        <Text style={{ color: '#FF6B00', marginLeft: 10 }}>10:03</Text>
                    </View>
                    <Text style={{ color: 'white' }}>RATE 4.5/5</Text>
                    </View>
                    
                </View>
                
                

            </View>
            {/* BURASI FLAT LİST YERİ ROW 2 Lİ */}
             {/* BURASI FLAT LİST YERİ ROW 2 Lİ */}
             <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginVertical: 15 }}>
                <View style={styles.todayFreshView}>
                    <View style={styles.todayFreshTopSideRow}>
                    <TouchableOpacity>
                    <LikeIcon></LikeIcon>
                    </TouchableOpacity>
                        <WaffleTost></WaffleTost>
                    </View>
                    <View style={styles.boxView}>
                    <Text style={{ color: 'aqua' }}>Kategori</Text>
                    <Text style={{ color: 'white' }}>Name</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <TimeIcon></TimeIcon>
                        <Text style={{ color: '#FF6B00', marginLeft: 10 }}>10:03</Text>
                    </View>
                    <Text style={{ color: 'white' }}>RATE 4.5/5</Text>
                    </View>
                </View>
                <View style={styles.todayFreshView}>
                    <View style={styles.todayFreshTopSideRow}>
                    <TouchableOpacity>
                    <UnLikeIcon></UnLikeIcon>
                    </TouchableOpacity>
                        <BurgerIcon></BurgerIcon>
                    </View>
                    <View>
                    <Text style={{ color: 'aqua' }}>Kategori</Text>
                    <Text style={{ color: 'white' }}>Name</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <TimeIcon></TimeIcon>
                        <Text style={{ color: '#FF6B00', marginLeft: 10 }}>20:03</Text>
                    </View>
                    <Text style={{ color: 'white' }}>RATE 4.5/5</Text>
                    </View>
                    
                </View>
                
                

            </View>
            {/* BURASI FLAT LİST YERİ ROW 2 Lİ */}
        </View>
    )
}
export default TodayFreshSeeAllScreen
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