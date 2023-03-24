import React from 'react';
import { View, Text, StatusBar, StyleSheet, Button, FlatList } from 'react-native';
import { useQuery, gql } from '@apollo/client';

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
            <Text>✨ Course Authors ✨</Text>
            <FlatList 
                data = {data.authors}
                renderItem={({item}) => <Text>{item.firstName} {item.lastName}</Text>}
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

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    });

export default AuthorsScreen;