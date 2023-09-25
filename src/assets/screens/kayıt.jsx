import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import NameIcon from "../icon/nameIcon";
import MailIcon from "../icon/mailIcon";
import PasswordIcon from "../icon/passwordIcon";
import OpenEyeIcon from "../icon/openEyeIcon";
import CloseEyeIcon from "../icon/closeeyeIcon";
import Asci from "../icon/asci";
import useAuth from '../utility/auth'
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../utility/firebase";
const Kayit = ({navigation, route}) => {

const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
    const [eye, setEye] = useState(true)
    const [eye2, setEye2] = useState(true)

    const AcikKapaliGoz = () => {
        setEye(!eye)
    }
    const AcikKapaliGoz2 = () => {
        setEye2(!eye2)
    }
    return (
        <SafeAreaView style={{ justifyContent: 'space-between', height: '100%', backgroundColor: 'black', }}>
            <View style={styles.arkaplan}>
                <Asci></Asci>
                <View style={styles.titleView}>
                    <Text style={styles.titleTxt}>YEMEKYEMEK</Text>
                    <Text style={{ ...styles.titleTxt, fontSize: 12, color: 'orange', }}>EAT DRINK REPEAT</Text>
                </View>
                <View style={styles.registerView}>
                    <Text style={styles.registerTxt}>Register</Text>
                </View>
                <View style={styles.textInPutView}>
                    <View style={styles.textInPut}>
                        <NameIcon style={styles.icon}></NameIcon>
                        <TextInput
                            style={styles.textInPutTxt}
                            placeholder="Full Name"
                            placeholderTextColor={'white'}
                            onChangeText={setUsername}
                        >
                        </TextInput>
                    </View>

                    <View style={styles.textInPut}>
                        <MailIcon></MailIcon>
                        <TextInput
                            style={styles.textInPutTxt}
                            placeholder="Email Adress"
                            placeholderTextColor={'white'}
                            onChangeText={setEmail}
                        >
                        </TextInput>
                    </View>
                    <View style={{ ...styles.textInPut, justifyContent: 'space-between' }}>
                        <View style={styles.textInPut1}>
                            <PasswordIcon></PasswordIcon>
                            <TextInput
                                style={styles.textInPutTxt}
                                placeholder="Password"
                                placeholderTextColor={'white'}
                                onChangeText={setPassword}
                                secureTextEntry={eye2}
                            >
                            </TextInput>
                        </View>
                        <TouchableOpacity>
                        {eye2 ? (
                                <OpenEyeIcon onPress={AcikKapaliGoz2} />
                            ) : (
                                <CloseEyeIcon onPress={AcikKapaliGoz2} />
                            )

                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{ ...styles.textInPut, justifyContent: 'space-between' }}>
                        <View style={styles.textInPut1}>
                            <PasswordIcon></PasswordIcon>
                            <TextInput
                                style={{...styles.textInPutTxt,width:'80%'}}
                                placeholder="Confrim Password"
                                placeholderTextColor={'white'}
                                onChangeText={setConfirmPassword}
                                secureTextEntry={eye}
                            >
                            </TextInput>
                        </View>
                            {eye ? (
                                <OpenEyeIcon onPress={AcikKapaliGoz} />
                            ) : (
                                <CloseEyeIcon onPress={AcikKapaliGoz} />
                            )

                            }
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonView}
                onPress={async () =>{
                    try {
                    if (confirmPassword === password && username.length > 0 && email.length>0 && password.length>0) {
                            let result = await auth().createUserWithEmailAndPassword(email, password)
                            console.log('result',result)
                        } 
                        
                    } catch (error) {
                        Alert.alert(error.code)
                        console.log(error)
                    }
                    if (auth().currentUser) {
                        navigation.navigate('Main')
                       }
                }}
                >
                    <Text style={styles.buttonTxt}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomView}>
                <Text style={{ ...styles.bottomTxt, color: 'white' }}>Already Registered?</Text>
                <TouchableOpacity
                onPress={()=>{
navigation.navigate('Login')
                }}
                >
                <Text style={styles.bottomTxt}>Login Now</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Kayit
const styles = StyleSheet.create({
    arkaplan: {
        backgroundColor: 'black',
        width: '100%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',



    },
    titleView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleTxt: {
        fontSize: 50,
        color: 'red',
        fontWeight: 'bold'
    },
    registerView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30
    },
    registerTxt: {
        color: 'white',
        fontSize: 25,

    },
    textInPutView: {
        width: '75%',

    },
    textInPut: {
        borderRadius: 1,
        borderBottomWidth: 2,
        fontSize: 15,
        borderColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',

    },
    textInPut1: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textInPutTxt: {
        fontSize: 20,
        color:'white',
        width:'80%',
        marginLeft:10
    },
    buttonView: {
        backgroundColor: '#FF6B00',
        width: '75%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginTop: 40
    },
    buttonTxt: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    bottomView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomTxt: {
        textAlign: 'center',
        color: 'red',
        marginLeft: 5
    }
})