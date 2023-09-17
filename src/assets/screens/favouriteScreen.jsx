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
const FovouriteScreen = ({navigation, route}) => {
  
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
             {/* Bu view flat list olacak yatay */}
            <View style={styles.recomendedFlatlistView}>
                <View style={{ alignItems: 'center', width: '20%', justifyContent: 'center', height: '100%' }}>
                    <CupCake></CupCake>
                </View>
                <View style={{width:'50%'}}>
                    <Text numberOfLines={1} style={styles.freshTxt}>Cup Cake</Text>
                    <View style={{ flexDirection: 'row', }}>
                    <Text style={{fontSize:15,color:'white'}}>4.5/5</Text>
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
             {/* Bu view flat list olacak yatay */}
             <View style={styles.recomendedFlatlistView}>
                <View style={{ alignItems: 'center', width: '20%', justifyContent: 'center', height: '100%' }}>
                    <CupCake></CupCake>
                </View>
                <View style={{width:'50%'}}>
                    <Text numberOfLines={1} style={styles.freshTxt}>Cup Cake</Text>
                    <View style={{ flexDirection: 'row', }}>
                    <Text style={{fontSize:15,color:'white'}}>4.5/5</Text>
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
             {/* Bu view flat list olacak yatay */}
             <View style={styles.recomendedFlatlistView}>
                <View style={{ alignItems: 'center', width: '20%', justifyContent: 'center', height: '100%' }}>
                    <CupCake></CupCake>
                </View>
                <View style={{width:'50%'}}>
                    <Text numberOfLines={1} style={styles.freshTxt}>Cup Cake</Text>
                    <View style={{ flexDirection: 'row', }}>
                    <Text style={{fontSize:15,color:'white'}}>4.5/5</Text>
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
             {/* Bu view flat list olacak yatay */}
             <View style={styles.recomendedFlatlistView}>
                <View style={{ alignItems: 'center', width: '20%', justifyContent: 'center', height: '100%' }}>
                    <CupCake></CupCake>
                </View>
                <View style={{width:'50%'}}>
                    <Text numberOfLines={1} style={styles.freshTxt}>Cup Cake</Text>
                    <View style={{ flexDirection: 'row', }}>
                    <Text style={{fontSize:15,color:'white'}}>4.5/5</Text>
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
             {/* Bu view flat list olacak yatay */}
             <View style={styles.recomendedFlatlistView}>
                <View style={{ alignItems: 'center', width: '20%', justifyContent: 'center', height: '100%' }}>
                    <CupCake></CupCake>
                </View>
                <View style={{width:'50%'}}>
                    <Text numberOfLines={1} style={styles.freshTxt}>Cup Cake</Text>
                    <View style={{ flexDirection: 'row', }}>
                    <Text style={{fontSize:15,color:'white'}}>4.5/5</Text>
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
             {/* Bu view flat list olacak yatay */}
             <View style={styles.recomendedFlatlistView}>
                <View style={{ alignItems: 'center', width: '20%', justifyContent: 'center', height: '100%' }}>
                    <CupCake></CupCake>
                </View>
                <View style={{width:'50%'}}>
                    <Text numberOfLines={1} style={styles.freshTxt}>Cup Cake</Text>
                    <View style={{ flexDirection: 'row', }}>
                    <Text style={{fontSize:15,color:'white'}}>4.5/5</Text>
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
             {/* Bu view flat list olacak yatay */}
             <View style={styles.recomendedFlatlistView}>
                <View style={{ alignItems: 'center', width: '20%', justifyContent: 'center', height: '100%' }}>
                    <CupCake></CupCake>
                </View>
                <View style={{width:'50%'}}>
                    <Text numberOfLines={1} style={styles.freshTxt}>Cup Cake</Text>
                    <View style={{ flexDirection: 'row', }}>
                    <Text style={{fontSize:15,color:'white'}}>4.5/5</Text>
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
             {/* Bu view flat list olacak yatay */}
             <View style={styles.recomendedFlatlistView}>
                <View style={{ alignItems: 'center', width: '20%', justifyContent: 'center', height: '100%' }}>
                    <CupCake></CupCake>
                </View>
                <View style={{width:'50%'}}>
                    <Text numberOfLines={1} style={styles.freshTxt}>Cup Cake</Text>
                    <View style={{ flexDirection: 'row', }}>
                    <Text style={{fontSize:15,color:'white'}}>4.5/5</Text>
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
             {/* Bu view flat list olacak yatay */}
             <View style={styles.recomendedFlatlistView}>
                <View style={{ alignItems: 'center', width: '20%', justifyContent: 'center', height: '100%' }}>
                    <CupCake></CupCake>
                </View>
                <View style={{width:'50%'}}>
                    <Text numberOfLines={1} style={styles.freshTxt}>Cup Cake</Text>
                    <View style={{ flexDirection: 'row', }}>
                    <Text style={{fontSize:15,color:'white'}}>4.5/5</Text>
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