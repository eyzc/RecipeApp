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
import BurgerIcon from "../icon/burger";
import UnLikeIcon from "../icon/unlike";
import ChocolateCake from "../icon/chocolatecake";
import HalfStarIcon from "../icon/halfstar";
import EmptyStarIcon from "../icon/emptystar";
const MainScreen = ({navigation, route}) => {
  
    return (
        <View style={styles.arkaplan}>
            <View style={styles.topIcon}>
                <TouchableOpacity>
                <PlusIcon></PlusIcon>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Side')
                }}
                >
                <Cate></Cate>
                </TouchableOpacity>
                
            </View>
            <View style={styles.welcomeView}>
                <Text style={styles.welcomeTxt}>Welcome</Text>
                <Text style={styles.welcomeName}>Denny</Text>
            </View>
            <View style={styles.answerView}>
                <Text style={styles.answerTxt}>What would you like to cook today?</Text>
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
            <View style={styles.freshView}>
                <Text style={styles.freshTxt}>Today’s Fresh Recipe</Text>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('TodayFreshSeeAll')
                }}
                >
                    <Text style={styles.seeAllTxt}>See All</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginVertical: 15 }}>
                <TouchableOpacity
                 onPress={()=>{
                    navigation.navigate('Recipe')
                }}
                >
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
                </TouchableOpacity>
                
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
            <View style={styles.freshView}>
                <Text style={styles.freshTxt}>Recommended</Text>
                <TouchableOpacity
                   onPress={()=>{
                    navigation.navigate('Recommended')
                }}
                >
                    <Text style={styles.seeAllTxt}>See All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.recomendedFlatlistView}>
                <View style={{ alignItems: 'center', width: '20%', justifyContent: 'center', height: '100%' }}>
                    <CupCake></CupCake>
                </View>
                <View style={{width:'50%'}}>
                    <Text numberOfLines={1} style={styles.freshTxt}>Cup Cake</Text>
                    <View style={{ flexDirection: 'row', }}>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <EmptyStarIcon></EmptyStarIcon>
                    </View>
                    
                </View>
                <View style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <TouchableOpacity>
                    <LikeIcon></LikeIcon>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', }}>
                        <TimeIcon></TimeIcon>
                        <Text style={{ color: '#FF6B00', marginLeft: 10 }}>10:03</Text>
                    </View>
                </View>
            </View>
            <View style={styles.recomendedFlatlistView}>
                <View style={{ alignItems: 'center', width: '20%', justifyContent: 'center', height: '100%' }}>
                    <CupCake></CupCake>
                </View>
                <View style={{width:'50%'}}>
                    <Text numberOfLines={1} style={styles.freshTxt}>Cup Cake</Text>
                    <View style={{ flexDirection: 'row', }}>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <HalfStarIcon></HalfStarIcon>
                    <EmptyStarIcon></EmptyStarIcon>
                    </View>
                    
                </View>
                <View style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <TouchableOpacity>
                    <LikeIcon></LikeIcon>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', }}>
                        <TimeIcon></TimeIcon>
                        <Text style={{ color: '#FF6B00', marginLeft: 10 }}>10:03</Text>
                    </View>
                </View>
            </View>
            <View style={styles.recomendedFlatlistView}>
                <View style={{ alignItems: 'center', width: '20%', justifyContent: 'center', height: '100%' }}>
                    <CupCake></CupCake>
                </View>
                <View style={{width:'50%'}}>
                    <Text numberOfLines={1} style={styles.freshTxt}>Cup Cake</Text>
                    <View style={{ flexDirection: 'row', }}>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <StarIcon></StarIcon>
                    <EmptyStarIcon></EmptyStarIcon>
                    <EmptyStarIcon></EmptyStarIcon>
                    </View>
                    
                </View>
                <View style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <TouchableOpacity>
                    <LikeIcon></LikeIcon>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', }}>
                        <TimeIcon></TimeIcon>
                        <Text style={{ color: '#FF6B00', marginLeft: 10 }}>10:03</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default MainScreen
const styles = StyleSheet.create({
    arkaplan: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        padding: 30
    },
    topIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    welcomeView: {
        flexDirection: 'row',
        marginTop: 10
    },
    welcomeTxt: {
        fontSize: 25,
        color: 'white'
    },
    welcomeName: {
        color: '#FF6B00',
        fontSize: 25,
        marginLeft: 10
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
        marginBottom:10
    },
    seeAllTxt: {
        color: '#FF6B00',
        fontSize: 20,
    },
    freshTxt: {
        color: 'white',
        fontSize: 20,
        
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
    boxView:{
        width:'100%',
        height:'50%'
       }
})