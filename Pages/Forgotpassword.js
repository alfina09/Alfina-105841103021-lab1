import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Forgot Password</Text>
            <Text style={styles.infoText}>Please enter your email address. You will receive a link to create a new password via email.</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize='none'
                />
                <Text style={styles.errorText}>Not a valid email address. Should be your@email.com</Text>
            <TouchableOpacity style={styles.sendButton} onPress={() => navigation.navigate('ResetPassword')}>
                <Text style={styles.sendButtonText}>SEND</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titleText: {
        fontSize: 32,
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: '../assets/fonts/Metropolis-Bold',
    },
    infoText: {
        fontSize: 16,
        color: 'black',
        marginBottom: 20,
        fontFamily: './assets/font/Metropolis-SemiBold',
    },
    input: {
        width: '100%',
        maxWidth: 400,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 20,
        fontFamily: '../assets/fonts/Metropolis-SemiBold',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 40,
    },
    sendButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,
    },
    sendButtonText: {
        color: 'white',
        fontSize: 16,
        fontVariant: 'bold',
        fontFamily: '../assets/fonts/Metropolis-SemiBold',
    },
});