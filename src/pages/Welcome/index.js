import React from "react";
import { View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";


export default function Welcome() {
    const naviation = useNavigation();


    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                animation="flipInY"
                    source={require('../../assets/logoM.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />

            </View>


            <Animatable.View delay={600}animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Your personalized movie guide powered by AI!</Text>
                <Text style={styles.text}>Sign in to start</Text>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => naviation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <Text style={styles.textLoguin}>Do you already have an account?</Text>

                <TouchableOpacity 
                onPress={ () => naviation.navigate('LogIn')}
                style={styles.loguinButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#141414'
    },

    containerLogo:{
        flex:2,
        backgroundColor: '#141414',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerForm:{
        backgroundColor:'#FFF',
        flex: 2,
        borderRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        margin: '5%',
        width: '90%',
        marginBottom: '40%'
    },

    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },

    text:{
        color: '#a1a1a1'
    },

    textLoguin:{
        color: '#a1a1a1',
        position: 'absolute',
        alignSelf: 'center',
        bottom: '15%',
        right: '8%',
    },
    

    button:{
        position: 'absolute',
        backgroundColor:'#E50914',
        borderRadius: 50,
        paddingVertical: 8,
        width:'60%',
        alignSelf: 'center',
        bottom: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },

    loginButtonText:{
        fontSize: 18,
        color: '#E50914',
        fontWeight: 'bold'
    },

    loguinButton:{
        position: 'absolute',
        borderRadius: 50,
        paddingVertical: 2,
        width:'25%',
        alignSelf: 'center',
        bottom: '5%',
        right: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})