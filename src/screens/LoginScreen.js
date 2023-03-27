import { Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react';
import { useMutation, gql } from '@apollo/client';
import styles from '../styles';

import { userVar, tokenVar } from '../state/reactive-vars';

import Button from '../components/Button';

const LOGIN = gql`
    mutation Login($input: LoginInput) {
        login(input: $input) {
            firstName
            lastName
            email
            token
        }
    }
`

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
        onCompleted: ({ login }) => {
            const { token, email, firstName, lastName } = login;
            const user = { token, email, firstName, lastName };
            console.log(user);
            userVar(user);
            tokenVar(token);
        }
    })

    return( 
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <Text style={styles.title}>Please Log In!</Text>
            <TextInput
                style={styles.input}
                placeholder="email"
                placeholderTextColor="#dca"
                keyboardType="email-address"
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
        </KeyboardAvoidingView>
    
    )
}


export default LoginScreen;