import { View, Text, StatusBar, SectionList, FlatList, Image } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import styles from '../styles';

import Button from '../components/Button';

const GET_COURSE_DETAILS = gql`
    query Course($id: ID!) {
        course(id: $id) {
            title
            description
            imageURL
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

    const { course: {title, imageURL, description }} = data

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>✨ {title} ✨</Text>
            
            <Image
                style={styles.hero}
                source={{
                    uri: imageURL
                }}
            />

            <Text style={styles.paragraph}>{description}</Text>
            
            <Text>Modules</Text>

            {/* <SectionList
                sections={data.course.modules}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                    <View style={styles.item}>
                    <Text style={styles.title}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            /> */}
            
            <FlatList 
                data = {data.course.modules}
                renderItem={({item}) => <Text style={styles.listItem}>{item.title}</Text>}
            />

            <Button 
                title="Go Home"
                onPress={() => {
                    navigation.navigate('Home')
                }} 
            />
        </View>
    )
}

export default CourseDetailScreen;