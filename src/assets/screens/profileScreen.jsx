


import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Platform, FlatList,SafeAreaView } from 'react-native'
import BackIcon from "../icon/back";
import ApplyIcon from "../icon/apply";
import ProfileIcon2 from "../icon/profileIcon2";
import ImageCropPicker from "react-native-image-crop-picker";
import {
    PERMISSIONS,
    RESULTS,
    request
} from 'react-native-permissions'

const ProfileScreen = ({ navigation, route }) => {
    const [images, setImages] = useState([])
    return (
        <SafeAreaView style={styles.arkaplan}>
            <View>
                <View style={styles.topsideView}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Side')
                        }}
                    >
                        <BackIcon></BackIcon>
                    </TouchableOpacity>
                    
                        <Image style={styles.profileImg} source={{uri: images[0]}}></Image>
                    
                    <ApplyIcon></ApplyIcon>
                </View>
            </View>


            <TextInput
                placeholder="Name"
                placeholderTextColor={'white'}
                style={styles.TextInputView}>
            </TextInput>
            <TouchableOpacity
                onPress={async () => {
                    
                        const image = await ImageCropPicker.openPicker({
                            cropping: true

                        })
                        setImages([image.path, ...images])
                    

                }}
            >
                <View style={styles.btnView}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Upload</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={async () => {
                    let result = false
                    if (Platform.OS == 'android') {
                        result = await request(PERMISSIONS.ANDROID.CAMERA)
                        await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
                        await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)

                    } else if (Platform.OS == 'ios') {
                        result = await request(PERMISSIONS.IOS.CAMERA)
                        await request(PERMISSIONS.IOS.PHOTO_LIBRARY)
                        await request(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY)

                    }
                    if (result == RESULTS.GRANTED) {
                        const image = await ImageCropPicker.openCamera({
                            cropping: true

                        })
                        setImages([image.path, ...images])
                    }

                }}
            >
                <View style={styles.btnView}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Shoot Foto</Text>
                </View>
            </TouchableOpacity>
            <FlatList
                numColumns={2}
                data={images}
                renderItem={element => {
                    return (

                        <Image style={styles.yemekView} source={{ uri: element.item }}></Image>


                    )
                }}
            >

            </FlatList>




        </SafeAreaView>
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
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:'center',
        marginBottom:20

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
    yemekView: {
        width: 160,
        height: 160,
        backgroundColor: "#D9D9D9",
        marginRight: 20,
        borderRadius: 10,
        resizeMode: 'stretch',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'

    }

})