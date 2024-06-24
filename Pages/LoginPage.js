import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.accountContainer} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <Icon name="arrow-forward" size={20} color="red" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('forgotPassword')}>
        <Text style={styles.signUpButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or login with social account</Text>
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
    titleText: {
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
        paddingHorizontal: 10,
        width: '100%',
        maxWidth: 400,
        marginBottom: 20,
    },
    accountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    accountText: {
        fontSize: 16,
        color: 'black',
        fontFamily: '../assets/fonts/Metropolis-SemiBold',
    },
    loginButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,
        marginBottom: 10,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: '../assets/fonts/Metropolis-SemiBold',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        maxWidth: 150, 
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
        marginLeft: 15,
    },
    socialIcon: {
        width: 30, 
        height: 30, 
    },
    orText: {
        fontSize: 15,
        color: 'black',
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: '../assets/fonts/Metropolis-SemiBold.otf'
    },
});