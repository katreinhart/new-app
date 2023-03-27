import { View, Text, StatusBar } from 'react-native';
import { gql, useMutation, useQuery } from '@apollo/client';

import styles from '../styles';

import Button from '../components/Button'

import { tokenVar, userVar } from '../state/reactive-vars';

const ME = gql`
    query Me {
        me {
            firstName
            lastName
        }
    }
`;

const LOGOUT = gql`
    mutation Logout {
        logout {
            token
        }
    }
`

const ProfileScreen = ({navigation, route}) => {
    const { loading, error, data } = useQuery(ME);
    
    const [logout] = useMutation(LOGOUT, {
        onCompleted: () => {
            tokenVar(null);
            userVar(null);
        }
    })

    if (loading) return <Text>Loading...</Text> 
    if (error) return <Text>Error: { error.message }</Text>

    const { me: { firstName, lastName, email }} = data;

    return (
        <View style={styles.container}>
        <Text style={styles.title}>✨ My Profile ✨</Text>
        <Text style={styles.listItem}>Name: {firstName} {lastName}</Text>
        <Text style={styles.listItem}>Email: {email}</Text>
        <Text style={styles.listItem}>Role: Lead Engineer</Text>
        
        <StatusBar style="auto" />
        <Button 
            title="Go Home"
            onPress={() => {
                navigation.navigate('Home')
            }} />
        <Button 
            title="Log Out"
            onPress={logout} 
        />
      </View>
    )
}

export default ProfileScreen;