import React from 'react';
import { View, Text, StatusBar, StyleSheet, Button, FlatList } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import styles from '../styles';

const GET_AUTHORS = gql`
    query Authors {
        authors {
            firstName
            lastName
        }  
    }
`

const AuthorsScreen = () => {
    const { loading, error, data } = useQuery(GET_AUTHORS);

    if (loading) return <Text>Loading...</Text> 
    if (error) return <Text>Error: { error.message }</Text>

    return (
        <View style={styles.container}>
            <Text style={styles.title}>✨ Course Authors ✨</Text>
            <FlatList 
                data = {data.authors}
                renderItem={({item}) => <Text style={styles.listItem}>{item.firstName} {item.lastName}</Text>}
            />
            
            <StatusBar style="auto" />
            <Button 
                title="Go Home"
                onPress={() => {
                    navigation.navigate('Home')
                }} 
            />
        </View>
    )
}

export default AuthorsScreen;