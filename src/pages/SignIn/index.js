import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import * as Animatable from 'react-native-animatable';

export default function SignIn() {

    const [email, setEmail] = useState("");
    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");


    useEffect(()=>{
        // getListUser();
    }, []);

    const createNewUser = () => {
        fetch(`http://192.168.1.12:8081/users`, {
            method: "POST",
            body: JSON.stringify({
                "email": email,
                "name": username,
                "password": password,
                "phone": phone
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then(res =>{
            return res.json()
        }).then(res => {
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    
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
                <Text style={styles.message}>Welcome</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput 
                placeholder='Type an Email'
                style={styles.input}
                value={email}
                onChangeText={(text) =>{
                    setEmail(text);
                }}
                />
                <Text style={styles.title}>Username</Text>
                <TextInput 
                placeholder='Type your username'
                style={styles.input}
                value={username}
                onChangeText={(text) =>{
                    setUserame(text);
                }}
                />
                <Text style={styles.title}>Phone</Text>
                <TextInput 
                placeholder='phone'
                style={styles.input}
                value={phone}
                onChangeText={(text) =>{
                    setPhone(text);
                }}
                />
                <Text style={styles.title}>Password</Text>
                <TextInput 
                placeholder='Type your password'
                style={styles.input}
                value={password}
                onChangeText={(text) =>{
                    setPassword(text);
                }}
                />
                {/* <Text style={styles.title}>Confirm Password</Text>
                <TextInput 
                placeholder='Confirm your password'
                style={styles.input}
                /> */}
                <TouchableOpacity style={styles.button} onPress={createNewUser}>
                    <Text style={styles.buttonText}>Criar Conta</Text>
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