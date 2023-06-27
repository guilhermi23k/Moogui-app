import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function LogIn() {
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <View style={styles.containerLogo}>
                    <Animatable.Image
                            source={require('../../assets/logoM.png')}
                            style={{ width: '100%' }}
                            resizeMode="contain"
                    />

                </View>
                <Text style={styles.message}>Welcome back</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput 
                placeholder='Type your Email'
                style={styles.input}
                />
                <Text style={styles.title}>Password</Text>
                <TextInput 
                placeholder='Type your password'
                style={styles.input}
                />

                <TouchableOpacity style={styles.title}>
                <Text style={styles.forgotPassText}>Forgot your password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>    
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#141414'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },


    forgotPassText:{
        color: '#a1a1a1',
        fontWeight: 'bold'
    },

    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },

    containerLogo:{
        width: '35%',
        height: '35%',
        backgroundColor: '#141414',
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        right: '5%',

    },

    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },

    title:{
        fontSize: 20,
        marginTop: 28,
    },

    input:{
        borderBottomWidth: 1,
        height: 40,
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14
    },
    button:{
        backgroundColor: '#E50914',
        width: '100%',
        fontWeight: 'bold',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        top: '15%'
        
    },

    buttonText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },

})