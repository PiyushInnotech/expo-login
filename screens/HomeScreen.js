import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
    const [user, setUser] = useState({})

    const getUser = async () => {
        try {
            let userDetails = await AsyncStorage.getItem('userLogged')
            if (userDetails !== null) {
                setUser(JSON.parse(userDetails))
            } else {
                navigation.navigate('Login')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('userLogged')
            navigation.navigate('Login')
        } catch (error) {
            console.log(error)
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            getUser();
        }, [])
    );

    return (
        <View>
            {user && (
                <View style={styles.container}>
                    <Text style={styles.title}>Hello {user.email} </Text>
                    <TouchableOpacity style={styles.addButton} onPress={handleLogout}>
                        <Text style={styles.addButtonText}>logout</Text>
                    </TouchableOpacity>
                </View>
            )}
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

export default HomeScreen;
