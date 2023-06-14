import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({navigation}) => {
    const [userSignUp, setUserSignUp] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    })

    const [error, setError] = useState('')

    const handleSignUpChange = (name, value) => {
        setError('')
        setUserSignUp({ ...userSignUp, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("signup suuccesful")
    }

    const goToLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SignUp Page</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your First name'
                value={userSignUp.firstname}
                name="firstname"
                onChangeText={(value) => handleSignUpChange('firstname', value)}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your lastname'
                value={userSignUp.lastname}
                name="lastname"
                onChangeText={(value) => handleSignUpChange('lastname', value)}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your Email'
                value={userSignUp.email}
                name="email"
                onChangeText={(value) => handleSignUpChange('email', value)}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your password'
                secureTextEntry={true}
                value={userSignUp.password}
                name="password"
                onChangeText={(value) => handleSignUpChange('password', value)}
            />
            <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>
            <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
                <Text style={styles.addButtonText}>Signup</Text>
            </TouchableOpacity>
            <View stye={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#2196F3', marginTop: 10 }} onPress={goToLogin}>Already have an account.</Text>
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
    input: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        marginBottom: 10
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

export default SignUpScreen;
