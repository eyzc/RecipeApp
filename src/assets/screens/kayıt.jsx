import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import NameIcon from "../icon/nameIcon";
import MailIcon from "../icon/mailIcon";
import PasswordIcon from "../icon/passwordIcon";
import OpenEyeIcon from "../icon/openEyeIcon";
import CloseEyeIcon from "../icon/closeeyeIcon";
const [eye, setEye] = useState('')

const Kayit = () => {
    return (
        <View style={{ justifyContent: 'space-between', height: '100%', backgroundColor: 'black', }}>
            <View style={styles.arkaplan}>
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
                        >
                        </TextInput>
                    </View>

                    <View style={styles.textInPut}>
                        <MailIcon></MailIcon>
                        <TextInput
                            style={styles.textInPutTxt}
                            placeholder="Email Adress"
                            placeholderTextColor={'white'}
                        >
                        </TextInput>
                    </View>
                    <View style={{...styles.textInPut,justifyContent: 'space-between'}}>
                    <View style={styles.textInPut1}>
                            <PasswordIcon></PasswordIcon>
                            <TextInput
                                style={styles.textInPutTxt}
                                placeholder="Password"
                                placeholderTextColor={'white'}
                            >
                            </TextInput>
                        </View>
                        <TouchableOpacity>
                       <OpenEyeIcon></OpenEyeIcon>
                       </TouchableOpacity>
                    </View>
                    <View style={{...styles.textInPut,justifyContent: 'space-between'}}>
                        <View style={styles.textInPut1}>
                            <PasswordIcon></PasswordIcon>
                            <TextInput
                                style={styles.textInPutTxt}
                                placeholder="Confrim Password"
                                placeholderTextColor={'white'}
                            >
                            </TextInput>
                        </View>
                        <TouchableOpacity
                        onPress={()=>{
                            let a = true
                            if (a) {
                                
                            } else {
                                
                            }
                        }}
                        >
                       <OpenEyeIcon></OpenEyeIcon>
                       </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <Text style={styles.buttonTxt}>Register</Text>
                </View>
            </View>
            <View style={styles.bottomView}>
                <Text style={{ ...styles.bottomTxt, color: 'white' }}>Already Registered?</Text>
                <Text style={styles.bottomTxt}>Login Now</Text>
            </View>
        </View>
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
        fontSize: 20
    },
    buttonView: {
        backgroundColor: '#FF6B00',
        width: '75%',
        borderRadius: 25,
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