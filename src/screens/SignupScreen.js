import { View, Text, TextInput } from 'react-native'
import React from 'react';
import { useMutation, gql } from '@apollo/client';
import styles from '../styles';

import Button from '../components/Button';

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
            <Text style={styles.title}>💫 Please Sign Up! 💫</Text>
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
            <TextInput
                style={styles.input}
                placeholder="first name"
                placeholderTextColor="#dca"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="last name"
                placeholderTextColor="#dca"
                value={lastName}
                onChangeText={setLastName}
            />

            <Button title="Sign Up" 
                onPress={() => signup({ input: { email, password, firstName, lastName }})} 
            />
        </View>
    
    )
}


export default SignUpScreen;