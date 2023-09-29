import React, { useState } from 'react'
import {
    Text,
    View,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Alert,
    FlatList,
} from 'react-native'

import {
    PERMISSIONS,
    RESULTS,
    request
} from "react-native-permissions"

import ImageCropPicker from 'react-native-image-crop-picker'

import { auth, firestore, storage } from '../utility/firebase'



const AddRecipe = () => {
    const [recipes, setRecipes] = useState([])

    const add = async (imageUrl) => {
        const image = await imageUrl
        firestore().collection('kisiler').add({ name:  name , surname:  surname , image: image })
    }
    const fetchData = async () => {
        const data = await firestore().collection('kisiler').get()
        const recipesData = data.docs.map(element => {
            return element.data()
        })
        setRecipes(recipesData)
        console.log('recipesData:', recipesData)
    }
    const uploadImage = async (image) => {

        console.log(image)

        const uploadUri = Platform.OS === 'ios' ? image.sourceURL : image.path
        const filename = `${auth().currentUser.uid}_${Date.now()}.jpg`
        const storageRef = storage().ref(`tarifler/${filename}`)
        await storageRef.putFile(uploadUri)
        try {
            const url = await storageRef.getDownloadURL()
            console.log('url:', url)
            return url
        } catch (error) {
            console.log(error)
            return null
        }
    }
    const choosePhoto = () => {
        Alert.alert(
            'Bir Seçim Yapın',
            'Kameradan mı galireden mi?',
            [
                {
                    text: 'Vazgeç',
                    onPress: () => {
                        console.log('Vazgeçti')
                    }
                },
                {
                    text: 'Kamera',
                    onPress: async () => {
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
                            add(uploadImage(image))

                        }
                        console.log('kamera')
                    }
                },
                {
                    text: 'Disk',
                    onPress: async () => {

                        const image = await ImageCropPicker.openPicker({
                            cropping: true

                        })
                        return image
                        console.log('Disk')
                    }
                },

            ]
        )
    }

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Name'
                value={name}
                onChangeText={setName}
                style={{ borderWidth: 2, borderColor: 'red', width: '70%' }}
            >

            </TextInput>
            <TextInput
                placeholder='Surname'
                value={surname}
                onChangeText={setSurname}
                style={{ borderWidth: 2, borderColor: 'red', width: '70%' }}
            >

            </TextInput>
            <TouchableOpacity onPress={add}>
                <Text>Veri Yolla</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={fetchData}>
                <Text>Veri çek</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={choosePhoto}>
                <Text>Foto Seç Veya Çek ve yükle</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={fetchData}>
                <Text>foto yolla</Text>
            </TouchableOpacity>

            <FlatList
                data={recipes}
                renderItem={element => {

                    return (
                        <View>
                            <Text>
                                {element.item.name}
                            </Text>
                            <Text>
                                {element.item.surname}
                            </Text>
                            <Image
                                style={{width: 400, height: 400}}
                                source={{uri: element.item.image}}
                            />
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 24,
        justifyContent: 'center'
    },


})

export default AddRecipe
