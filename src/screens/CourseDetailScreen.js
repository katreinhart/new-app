import { View, Text, StatusBar, StyleSheet, Button, FlatList } from 'react-native';
import { useQuery, gql } from '@apollo/client';

const GET_COURSE_DETAILS = gql`
    query Course($id: ID!) {
        course(id: $id) {
            title
            modules {
                title
            }
        }
    }
`

const CourseDetailScreen = ({ navigation, route }) => {
    const { loading, error, data } = useQuery(GET_COURSE_DETAILS, { variables: { id: route.params.id }});

    if (loading) return <Text>Loading...</Text> 
    if (error) return <Text>Error: { error.message }</Text>

    return (
        <View style={styles.container}>
            <Text>✨ {data.course.title} ✨</Text>
            
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

export default CourseDetailScreen;