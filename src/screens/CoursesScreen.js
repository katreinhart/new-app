import { View, Text, StatusBar, FlatList } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import styles from '../styles';

import Button from '../components/Button';
import Card from '../components/Card';
import ErrorComponent from '../components/Error';
import Loading from '../components/Loading';

const GET_COURSES = gql`
    query Courses {
        courses {
            id
            title
            imageURL
            modules {
                title
            }
        }
    }
`

const CoursesScreen = ({ navigation }) => {
    const { loading, error, data } = useQuery(GET_COURSES);

    if (loading) return <Loading/>
    if (error) return <ErrorComponent message={error.message}/>
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>✨ My Courses ✨</Text>
            <FlatList 
                data = {data.courses}
                renderItem={({item}) => <Card 
                    image={item.imageURL}
                    title={item.title} 
                    onPress={() => {
                        navigation.navigate('CourseDetailScreen', { id: item.id })
                    }}
                />}
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

export default CoursesScreen;