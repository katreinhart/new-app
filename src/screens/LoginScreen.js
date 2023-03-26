import { View, Text, TextInput } from 'react-native'
import React from 'react';
import { useMutation, gql } from '@apollo/client';
import styles from '../styles';

import Button from '../components/Button';

const LOGIN = gql`
    mutation Login($input: LoginInput) {
        login(input: $input) {
            firstName
            token
        }
    }
`

const setToken = async (token) => {
    try {
        await AsyncStorage.setItem("NewAppProject.authToken", token)
    } catch(e) {
        //
    }
}

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [login ] = useMutation(LOGIN, {
        variables: {
            input: {
                email,
                password
            }
        },
        onCompleted: ({login: { token }}) => {
            setToken(token).then(() => {
                navigation.navigate('Home');
            });
        }
    })

    return( 
        <View style={styles.container}>
            <Text style={styles.title}>Please Log In!</Text>
            <TextInput
                style={styles.input}
                placeholder="email"
                placeholderTextColor="#dca"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="password"
                placeholderTextColor="#dca"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Button title="Sign in" onPress={() => login({ input: { email, password }})} />

            <Text style={styles.paragraph}>Don't have an account?</Text>
            <Button title="Sign up" onPress={() => navigation.navigate('Sign Up')} />
        </View>
    
    )
}


export default LoginScreen;