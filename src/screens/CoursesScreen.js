import { View, Text, StatusBar, StyleSheet, Button, FlatList } from 'react-native';
import { useQuery, gql } from '@apollo/client';

const GET_COURSES = gql`
    query Courses {
        courses {
        title
        modules {
            title
        }
    }
}
`

const CoursesScreen = () => {
    const { loading, error, data } = useQuery(GET_COURSES);

    if (loading) return <Text>Loading...</Text> 
    if (error) return <Text>Error: { error.message }</Text>

    return (
        <View style={styles.container}>
            <Text>✨ My Courses ✨</Text>
            <FlatList 
                data = {data.courses}
                renderItem={({item}) => <Text>{item.title}</Text>}
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

export default CoursesScreen;