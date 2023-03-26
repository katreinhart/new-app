import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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
            <Text>Please Log In!</Text>
            <TextInput
                placeholder="email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Button title="Sign in" onPress={() => login({ input: { email, password }})} />

            <Text>Don't have an account?</Text>
            <Button title="Sign up" onPress={() => navigation.navigate('Sign Up')} />
        </View>
    
    )
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    });

export default LoginScreen;