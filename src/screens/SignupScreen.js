import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react';
import { useMutation, gql } from '@apollo/client';

const SIGNUP = gql`
    mutation Signup($input: SignupInput!) {
        signup(input: $input) {
            firstName
            email
        }
    }
`

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    const [signup ] = useMutation(SIGNUP, {
        variables: {
            input: {
                email,
                password,
                firstName,
                lastName
            }
        },
        onCompleted: (data) => {
            
            navigation.navigate('Login');
        }
    })

    return( 
        <View style={styles.container}>
            <Text>Please Sign Up!</Text>
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
            <TextInput
                placeholder="first name"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                placeholder="last name"
                value={lastName}
                onChangeText={setLastName}
            />

            <Button title="Sign Up" onPress={() => signup({ input: { email, password, firstName, lastName }})} />
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

export default SignUpScreen;