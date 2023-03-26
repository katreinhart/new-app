import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react';
import { useMutation, gql } from '@apollo/client';

const LOGIN = gql`
    mutation Login($input: LoginInput) {
        login(input: $input) {
            firstName
            token
        }
    }
`

const LoginScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [login ] = useMutation(LOGIN, {
        variables: {
            input: {
                email,
                password
            }
        },
        onCompleted: () => {
            navigation.navigate('Home');
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