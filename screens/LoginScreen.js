import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('')

    const handleLoginChange = (name, value) => {
        setError('')
        setUserLogin({ ...userLogin, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userLogin.email || !userLogin.password) {
            setError('Email and Password should not be empty')
        } else {
            setError('')
            try {
                await AsyncStorage.setItem('userLogged', JSON.stringify(userLogin))
                navigation.navigate('Home')
            } catch (error) {
                console.log(error)
            }
        }
    }

    const goToSignup = () => {
        navigation.navigate('Signup')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Page</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                placeholder='Enter your Email'
                value={userLogin.email}
                name="email"
                onChangeText={(value) => handleLoginChange('email', value)}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                placeholder='Enter your password'
                secureTextEntry={true}
                value={userLogin.password}
                name="password"
                onChangeText={(value) => handleLoginChange('password', value)}
            />
            <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>
            <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
                <Text style={styles.addButtonText}>login</Text>
            </TouchableOpacity>
            <View stye={{ flex:1, justifyContent: 'center', alignItems:'center'}}>
                <Text style= {{color: '#2196F3', marginTop:10}} onPress={goToSignup}>Not a user. Signup</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },
    addButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
    }
});

export default LoginScreen;
