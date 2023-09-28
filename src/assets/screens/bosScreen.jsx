import React,{ useState } from 'react'
import {
    Text,
    View,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native'

import ImageCropPicker from 'react-native-image-crop-picker'

import {
    PERMISSIONS,
    RESULTS,
    request,
} from 'react-native-permissions'

const ProfileScreen = () => {
    const [image, setImage] = useState()

    return (
        <View style={styles.container}>
            <View style={styles.profileImage}/>

            <View style={styles.inputAndBtnContainer}>
                <TextInput style={styles.input}/>

                <TouchableOpacity style={styles.btn}
                    onPress={async () => {
                        const image = await ImageCropPicker.openPicker({})
                        setImage(image)
                    }}
                >
                    <Text style={styles.btnTxt} >Upload Photo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                    onPress={async () => {
                        let result = false
                        if (Platform.OS == "android") {
                            result = await request(PERMISSIONS.ANDROID.CAMERA)
                            await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
                            await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
                            } else if (Platform.OS == 'ios') {
                            result = await request(PERMISSIONS.IOS.CAMERA)
                            await request(PERMISSIONS.IOS.PHOTO_LIBRARY)
                            await request(PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY)
                        }

                        if (result = RESULTS.GRANTED) {
                            const image = await ImageCropPicker.openCamera({})
                            setImage(image)
                        }
                    }}
                >
                    <Text style={styles.btnTxt} >Shoot Photo</Text>
                </TouchableOpacity>
            </View>

            <Image style={styles.image} source={{uri: image?.path}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        paddingHorizontal: 24,
        justifyContent: 'space-between'
    },
    
    profileImage: {
        width: 128,
        height: 128,
        backgroundColor: 'gray',
        borderRadius: 90,
    },

    inputAndBtnContainer: {
        width: '100%',
        alignItems: 'center',
    },

    input: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        width: '100%',
        paddingHorizontal: 16,
        color: 'white',
    },
    
    btn: {
        backgroundColor: '#F55A00',
        paddingVertical: 8,
        borderRadius: 16,
        width: 144,
        marginTop: 16,
    },

    btnTxt: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    image: {
        width: 144,
        height: 144,
        backgroundColor: 'gray'
    }

})

export default ProfileScreen
