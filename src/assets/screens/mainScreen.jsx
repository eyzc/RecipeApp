import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList,Image } from 'react-native'
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
import Burger from '../png/chickenburger.png'
import { useIsFocused } from "@react-navigation/native";
import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";
const MMKV = new MMKVLoader().initialize()
import { auth } from "../utility/firebase";

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
const MainScreen = ({navigation, route}) => {
    console.log(auth().currentUser)
    let [tarifler, SetTarifler] = useMMKVStorage('yemek',MMKV,[])
    let isFocused = useIsFocused()
useEffect(()=>{
    SetTarifler(MMKV.getMap('yemek'))
if (tarifler.length==0) {
    SetTarifler([{
        name:'Toast with Berries' ,
        like:true,
        time:'10:00',
        rate:'4.5',
        category:'Breakfast',
        pngName:'toast_with_berries',
        ingredients:[
            '2 slices of whole wheat bread',
            '½ cup plain',
            '¾ cup frozen berries',
            '2 tablespoons of peanut butter',
            '½ teaspoon of coconut oil',
            '1 teaspoon cinnamon'
        ]
        
      },
  {
      name:'Chicken Burger' ,
      like:false,
      time:'20:00',
      rate:'4',
      category:'Dinner',
      pngName:'chicken_burger',
      ingredients:[
        'Ground chicken',
        'Bread crumbs',
        'Onion',
        'Egg',
        'Seasonings',
        'Oil'
    ]
      
  },
  {
      name:'Cup Cake' ,
        like:true,
        time:'05:00',
        rate:'5',
        category:'Sweet',
        pngName:'cup_cake',
        ingredients:[
            '110g softened butter',
            '110g golden caster sugar',
            '2 large eggs',
            '½ tsp vanilla extract',
            '110g self-raising flour',
            '150g softened butter',
            '300g icing sugar',
            '1 tsp vanilla extract',
            '3 tbsp milk'
        ]
       
  },
    {
        name:'Chocolate Cake',
        like:false,
        time:'07:30',
        category:'Sweet',
        pngName:'chocolate_cake',
        rate:'3.5',
        ingredients:[
            '2 cups white sugar',
            '1 ¾ cups all-purpose flour',
            '¾ cup unsweetened cocoa powder', 
            '1 ½ teaspoons baking powder',
            '1 ½ teaspoons baking soda',
            '1 teaspoon salt',
            '2 eggs',
            '1 cup milk',
            '½ cup vegetable oil',
            '2 teaspoons vanilla extract',
            '1 cup boiling water'
        ]
    }
])  
}
    
},[isFocused])
        
    
console.log([...tarifler]+'main')
    return (
        <View style={styles.arkaplan}>
            <View style={styles.topIcon}>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Bos')
                }}
                >
                <PlusIcon></PlusIcon>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Side',{
                        tarifler:tarifler
                    })
                }}
                >
                <Cate></Cate>
                </TouchableOpacity>
                
            </View>
            <View style={styles.welcomeView}>
                <Text style={styles.welcomeTxt}>Welcome</Text>
                <Text style={styles.welcomeName}>{auth().currentUser.email}</Text>
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
                    navigation.navigate('TodayFreshSeeAll',{
                        tarifler:tarifler
                    }
                    
                    )
                }}
                >
                    <Text style={styles.seeAllTxt}>See All</Text>
                </TouchableOpacity>
            </View>
         <FlatList
        
         horizontal
         data={tarifler}
         renderItem={element =>{
        
            return(
                <TouchableOpacity
               
                 onPress={()=>{
                    navigation.navigate('Recipe',{
                        tarifler:tarifler,
                        index:element.index
                    },
                    
                    )
                }}
                >
                <View style={styles.todayFreshView}>
                    <View style={styles.todayFreshTopSideRow}>
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
                            ingredients:element.item.ingredients
                        },
                        ...tarifler.slice(element.index + 1)
                        ])
                    }}
                    >
                    {element.item.like ? (<LikeIcon></LikeIcon>):(<UnLikeIcon></UnLikeIcon>)}
                    </TouchableOpacity>
                    <Image style={{width:100,height:90,resizeMode:'stretch'}} source={imageResources(element.item.pngName)}></Image>
                    </View>
                    <View style={styles.boxView}>
                    <Text style={{ color: 'aqua' }}>{element.item.category}</Text>
                    <Text style={{ color: 'white' }}>{element.item.name}</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <TimeIcon></TimeIcon>
                        <Text style={{ color: '#FF6B00', marginLeft: 10 }}>{element.item.time}</Text>
                    </View>
                    <Text style={{ color: 'white' }}>{element.item.rate}/5</Text>
                    </View>
                </View>
                </TouchableOpacity>
            )
         }}
         >

         </FlatList>
            <View style={styles.freshView}>
                <Text style={styles.freshTxt}>Recommended</Text>
                <TouchableOpacity
                   onPress={()=>{
                    navigation.navigate('Recommended',{
                        tarifler:tarifler
                    })
                }}
                >
                    <Text style={styles.seeAllTxt}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
            data={tarifler}
            renderItem={element=>{
                return(
                    <View style={styles.recomendedFlatlistView}>
                <View style={{ alignItems: 'center', width: '20%', justifyContent: 'center', height: '100%' }}>
                    <Image style={{width:65,height:55,resizeMode:'stretch'}} source={imageResources(element.item.pngName)}></Image>
                </View>
                <View style={{width:'50%'}}>
                    <Text numberOfLines={1} style={styles.freshTxt}>{element.item.name}</Text>
                    <View style={{ flexDirection: 'row', }}>
                    <Text style={{ color: 'white' }}>{element.item.rate}/5</Text>
                    
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
                        ingredients:element.item.ingredients
                    },
                    ...tarifler.slice(element.index + 1)
                    ])
                }}
                >
                {element.item.like ? (<LikeIcon></LikeIcon>):(<UnLikeIcon></UnLikeIcon>)}
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', }}>
                        <TimeIcon></TimeIcon>
                        <Text style={{ color: '#FF6B00', marginLeft: 10, }}>{element.item.time}</Text>
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
        marginVertical:10
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
        
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        height:220,
        width:170,
        marginRight:10,
        marginBottom:120

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
        marginTop:10,
        padding: 10
    },
    boxView:{
        width:'100%',
        height:'50%'
       }
})