import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
    const navigation = useNavigation();
      return (
        <View style={styles.container}>
         <Text style={styles.titleText}>Sign Up</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Name"/>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    keyboardType="email-address"/>
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    secureTextEntry/>
            </View>
            <TouchableOpacity style={styles.accountContainer} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.accountText}>Already have an account? </Text>
                <Icon name="arrow-forward" size={20} color="red"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signUpButton}>
                  <Text style={styles.signUpButtonText}>SIGN UP</Text>
                 </TouchableOpacity>
                 <Text style={styles.orText}>Or sign up with social account</Text>
                 <View style={styles.socialContainer}>
                 <TouchableOpacity style={styles.socialButton}>
                      <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
                        </TouchableOpacity>
                  <TouchableOpacity style={styles.socialButton}>
                      <Image source={require('../assets/google.png')} style={styles.socialIcon} />
                        </TouchableOpacity>
                     </View>
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
    title: {
        fontSize: 32,
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'flex-start',
        fontFamily: '../assets/fonts/Metropolis-Bold',
    },
    input: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center'
    },
    accountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    accountText: {
        fontSize: 14,
        color: 'black',
        fontFamily:'../assets/fonts/Metropolis-SemiBold',
    },
    signUpButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,
        marginBottom: 20,
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: '../assets/fonts/Metropolis-SemiBold'
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '10',
        marginTop: 10,
    },
    socialButton: {
      width: 50,
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      elevation: 5,
    },
    socialIcon: {
        width: 30,
        height: 30,
    },
    orText: {
        fontSize: 14,
        color: 'black',
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: '../assets/fonts/Metropolis-SemiBold',
    },
});